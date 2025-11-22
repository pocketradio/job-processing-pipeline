import amqplib from 'amqplib';

let channel;

export async function initializeQueue(){

    const conn = await amqplib.connect('amqp://localhost');
    channel = await conn.createChannel()
    await channel.assertQueue('jobs');
}


export function publishJob({jobID, image}){
    if ( !channel ){
        throw new Error('queue not initialized');
    }
    channel.sendToQueue('jobs',Buffer.from(JSON.stringify({jobID, image})));
}