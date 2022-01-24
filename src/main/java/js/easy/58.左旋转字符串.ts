function reverseLeftWords(s: string, n: number): string {
    let len = s.length;
    let left:string = s.substr(0,n);
    let right:string =  s.substr(n, len);
    return right+left;
};
