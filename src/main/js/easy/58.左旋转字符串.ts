function reverseLeftWords(s: string, n: number): string {
    let len = s.length;
    n = n > len ? n % len : n;
    let left: string = s.substr(0, n);
    let right: string = s.substr(n, len);
    return right + left;
};
