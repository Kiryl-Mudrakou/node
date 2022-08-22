export const log = function(req: any, res: any, next: any) {
    console.log("\x1b[36m%s%s1\x1b[0m",'\npath: ',req.originalUrl,'\nbody:', req.body, '\nparams :', req.params, '\nqueryParams:', req.query,"\n");
    next();
};
