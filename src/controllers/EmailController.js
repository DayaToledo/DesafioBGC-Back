import * as uuid from 'uuid';
import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const create = handler( async (event, context) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: "123",
            emailId: uuid.v1(),
            name: data.name,
            email: data.email,
            text: data.text,
            createdAt: Date.now(),
        },
    };

    await dynamoDb.put(params);

    return params.Item;
});