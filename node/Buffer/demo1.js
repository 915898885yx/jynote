// //第一个参数为buffer的参长度，第二个参数为内容默认值为0
// const buf1 = Buffer.alloc(10);
// // console.log(buf1)

// const buf2 = Buffer.alloc(10, 1);
// // console.log(buf2)

// // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
// const buf4 = Buffer.from([1, 2, 3]);
// console.log(buf4)

// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
// const buf5 = Buffer.from('tést');
// console.log(buf5)

// // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
// const buf6 = Buffer.from('tést', 'latin1');
// console.log(buf6)
// //
// const str = '\u00bd + \u00bc = \u00be';
// const str1 = '你'
// console.log(`${Buffer.byteLength(str1, 'utf8')} 个字节`)
// console.log(`${str}: ${str.length} 个字符, ` +
//             `${Buffer.byteLength(str, 'utf8')} 个字节`);

const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];

console.log(arr.sort(Buffer.compare));