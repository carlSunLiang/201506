/**
 * Created by kcarl on 15/9/5.
 */
exports.name = 'xixix';
console.log(require.main);
console.log(require.load);



console.log(require.resolve());//取得模块的绝对路径


console.log(Object.keys(require.cache));


//清除  delete  对象