'use server'
import prisma from "@/lib/prisma"

const showAllRecords = async () => {
    const data = await prisma.task.findMany({
        
    })
    return data
} 
export default showAllRecords