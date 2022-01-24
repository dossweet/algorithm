function replaceSpace(s: string): string {
    let arr:string[] = s.split(' ');
    return arr.join('%20');
};

console.log(replaceSpace('we are happy'));
