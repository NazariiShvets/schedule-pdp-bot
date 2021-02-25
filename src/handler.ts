import { bot } from './bot'
import { APIGatewayProxyEvent } from 'aws-lambda'

const webhook = async (event: APIGatewayProxyEvent) => {
    const body = JSON.parse(event.body)

    console.log(body) // Логируем body

    if( body && body.message ) {
        const {chat, text} = body.message

        await bot.sendMessage({chat_id: chat.id, text: `Твоє повідомлення: ${text}`})
    }

    return {statusCode: 200}
}


export { webhook }