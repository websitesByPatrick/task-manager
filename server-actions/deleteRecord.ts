"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const deleteRecord = async (recID:number)  => {
    
    await prisma.task.delete({
        where: {
            id: recID
        }
       
    })

    revalidatePath('/')
}

export default deleteRecord