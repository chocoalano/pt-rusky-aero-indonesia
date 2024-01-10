export function response(code: number, msg: any) {
    switch (code) {
        case 200:
            return {
                res: { status: true, data: msg, msg: "success" },
                statCode: code,
            };
        case 400:
            return {
                res: { status: false, data: msg, msg: "error" },
                statCode: code,
            };
        case 401:
            return {
                res: { status: false, data: msg, msg: "error" },
                statCode: code,
            };
        case 422:
            return {
                res: { status: false, data: msg, msg: "error" },
                statCode: code,
            };
        case 404:
            return {
                res: { status: false, data: msg, msg: "error" },
                statCode: code,
            };
    }
}

export function responseErrors(err: any) {
    switch (err.code) {
        case "E_INVALID_AUTH_PASSWORD":
            return response(404, err.responseText);
        case "E_ROW_NOT_FOUND":
            return response(404, err);
        case "E_VALIDATION_FAILURE":
            return response(422, err.messages);
        default:
            return response(400, err);
    }
}