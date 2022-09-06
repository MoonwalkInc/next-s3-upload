/// <reference types="react" />
declare type TrackedFile = {
    file: File;
    progress: number;
    uploaded: number;
    size: number;
};
export declare const useS3Upload: ({ apiHost }: {
    apiHost?: string | undefined;
}) => {
    FileInput: (props: any) => JSX.Element;
    openFileDialog: () => void;
    uploadToS3: (file: File) => Promise<{
        url: string;
        bucket: string;
        key: string;
    }>;
    files: TrackedFile[];
};
export {};
