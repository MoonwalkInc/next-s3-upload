import { NextApiRequest, NextApiResponse } from 'next';
declare type NextRouteHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
declare type Configure = (options: Options) => Handler;
declare type Handler = NextRouteHandler & {
    configure: Configure;
};
declare type Options = {
    key?: (req: NextApiRequest, filename: string) => string | Promise<string>;
    bucketName?: string;
};
declare let APIRoute: Handler;
export { APIRoute };
