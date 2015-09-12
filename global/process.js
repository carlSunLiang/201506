/**
 * Created by kcarl on 15/9/12.
 */


console.dir(process);//应用的程序的进程可以在任何模块使用


process.argv.forEach(function(arg){
    console.log(arg);
})




process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(data){
    console.log(data);
    if(data == 'exit\n'){
        process.exit();
    }
});

//           /r od   /n  oa


//nextTick()

//process.chdir()
//process.cwd()
