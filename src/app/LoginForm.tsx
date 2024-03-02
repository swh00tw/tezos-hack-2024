"use client";

import { Text, TextField, Button, Dialog, Flex } from "@radix-ui/themes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userCredentialTable, userInfoTable } from "@/mockdata/user";
import { useRouter } from "next/navigation";
import clientEnv from "@/clientEnv";
import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { ConnectButton } from "@/components/ConnectButton";

const UserLoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export function LoginForm() {
  const { setUser } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, formState, setError } = useForm({
    resolver: zodResolver(UserLoginSchema),
    mode: "onSubmit",
  });

  const [walletmodalOpen, setWalletModalOpen] = useState(false);

  return (
    <>
      <form
        className="flex flex-col gap-y-2"
        onSubmit={handleSubmit(async (data, e) => {
          // parse the form data using schema
          const res = UserLoginSchema.safeParse(data);
          if (!res.success) {
            console.log(res.error);
            return;
          }
          const user = res.data;
          // verify the user exists
          if (!userCredentialTable[user.username]) {
            setError("username", {
              type: "manual",
              message: "User does not exist",
            });
            return;
          }
          // verify the password is correct
          if (userCredentialTable[user.username].password !== user.password) {
            setError("password", {
              type: "manual",
              message: "Incorrect password",
            });
            return;
          }
          // set cookie and open modal
          await fetch(
            `${clientEnv.NEXT_PUBLIC_BASE_URL}/api/auth/login?username=${user.username}`
          );
          setUser(userInfoTable[user.username]);
          setWalletModalOpen(true);
        })}
      >
        <Text weight={"medium"} size="5" className="pb-4">
          Welcome to PWR Perks 🤑
        </Text>
        <Text>Username</Text>
        <div>
          <TextField.Root>
            <TextField.Input placeholder="username" {...register("username")} />
          </TextField.Root>
          {formState.errors.username ? (
            <Text size="1" color="red">
              {formState.errors.username.message as string}
            </Text>
          ) : null}
        </div>
        <Text>Password</Text>
        <div>
          <TextField.Root>
            <TextField.Input
              placeholder="password"
              type="password"
              {...register("password")}
            />
          </TextField.Root>
          {formState.errors.password ? (
            <Text size="1" color="red">
              {formState.errors.password.message as string}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row justify-end items-center w-full mt-4 gap-x-2">
          <Button
            variant="outline"
            onClick={() => {
              alert("Sign up is not implemented yet lol");
            }}
          >
            Sign up
          </Button>
          <Button type="submit" className="bg-green-8 text-white">
            Log In
          </Button>
        </div>
      </form>
      <Dialog.Root open={walletmodalOpen} onOpenChange={setWalletModalOpen}>
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Connect to your Wallet </Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Make changes to your profile.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <ConnectButton />
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
