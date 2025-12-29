"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createRec = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.task.create({
    data: {
      title: title,
      content: content,
    },
  });

  revalidatePath("/add-task");
  redirect("/");
};

export default createRec;
