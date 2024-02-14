import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import {customSlugify} from "/opt/nodejs/customCode";

export const customSlugifyFunction = async (): Promise<{ body: string; statusCode: number }> => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: customSlugify('hello world'),
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
