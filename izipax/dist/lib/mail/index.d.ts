declare const mailer: (email: string, options: {
    subject: string;
    body: string;
}) => Promise<boolean>;
export default mailer;
