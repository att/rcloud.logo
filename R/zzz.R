rcloud.logo.caps <- NULL

.onLoad <- function(libname, pkgname)
{
  f <- function(module.name, module.path) {
    path <- system.file("javascript", module.path, package="rcloud.logo")
    caps <- rcloud.install.js.module(module.name,
                                     paste(readLines(path), collapse='\n'))
    caps
  }
  rcloud.logo.caps <<- f("rcloud.logo", "rcloud.logo.js")
  if(!is.null(rcloud.logo.caps))
    rcloud.logo.caps$init(rcloud.config('rcloud.deployment'),
                          rcloud.config('rcloud.deployment.color'))
}
