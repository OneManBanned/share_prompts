import Prompt from '@models/prompt'
import { connectToDB } from "@utlis/database";

export const POST = async (request) => {
    console.log('hello')
    const { userId, prompt, tag } = await request.json();
    console.log('hit again')
    try {
        console.log('hit again')
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })

    } catch (error) {
        return new Response('Failed to create a new prompt', { status: 500 })
    }
}