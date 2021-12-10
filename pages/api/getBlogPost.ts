import { getPostData } from "@util/posts"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
    [key: string]: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const postId = req.query.id
    console.log("?")
    res.status(200).json(getPostData(postId))
}
