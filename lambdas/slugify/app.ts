import Slugify from "/opt/nodejs/node_modules/slugify";
export const slugifyFunction = async (): Promise<{ body: string; statusCode: number }> => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: Slugify('hello world'),
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
