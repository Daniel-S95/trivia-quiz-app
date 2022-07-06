export const parseString = (string) => {
    const parser = new DOMParser();
    return parser.parseFromString(`<!doctype html><body>${string}`, 'text/html').body.textContent;
}