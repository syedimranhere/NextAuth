import { authOptions } from "@/app/auth/[...nextauth]/route";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
)