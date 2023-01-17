import camelize from "camelize";

export function kamelifiera(obj: any) {
    return camelize(obj);
}

export function foo(text: string = "") {
    return `foo:${text}`;
}
