## 1.12.0.pre.1 (2016-02-09)

Performance:

  - speed up `bundle install` and `bundle update` by using the new compact gem index (@segiddins, @fotanus, @indirect)
  - speed up `bundle exec` by avoiding loading the gemfile twice (#2951, #2952, @segiddins)

Features:

  - add support for using version operators to specify ruby versions in the Gemfile (@jtarchie)
  - redirect `--help` flag for plugins to that plugin's man page (@RochesterinNYC)
  - support probing a mirror with a fallback timeout (#4128, @pcarranza)
  - add `--full-index` option to `bundle lock` (@segiddins)
  - support running with frozen string literals (@deepj, @segiddins)
  - add `--major` and `--minor` options to `bundle outdated` (#3805, @cirdes)
  - allow passing a custom `ui` to `bundler/inline` (@lamont-granquist)
  - add support for ruby 2.4 (#4266, @segiddins)
  - add `bundle outdated --parseable` for machine-readable output (@RochesterinNYC)

  Bugfixes:

    - fix `bundle package --all` recursing endlessly (#4158, @RochesterinNYC)
    - fail fast on more errors when fetching remote resources (#4154, @RochesterinNYC)
    - give a better error message when a given git commit can't be found (#4140, @doy)
    - give a better error message when `bundle clean` doesn't have sufficient permissions (#4170, @RochesterinNYC)
    - give a better error message when reading a bundler config file fails (@segiddins)
    - restrict platforms when referencing a `gemspec` in the `Gemfile` to those defined in the gemspec (#4102, #4150, @smellsblue)
    - fix `bundle gem` with minitest to use the correct rake task (@kotoshenya)
    - give a better error message when ssl isn't available (#4054, @RochesterinNYC)
    - print the original `require` error when `Bundler.require` fails (#4182, @RochesterinNYC)
    - give a better error message when certain resources are temporarily unavailable (#4183, @RochesterinNYC)
    - fix returning case-sensitive gem mirror URIs on ruby 2.3 (@segiddins)
    - ignore colorized output from `git` when determining the current branch (#4056, @agis-)
    - fix storing the shared gems config option as a boolean (@vassilevsky)
    - add support for running `bundle gem --exe` instead of using the `--bin` option (@christhekeele)
    - fix `exec`-ing with 0 args in a directory with spaces (#4230, @segiddins)
    - avoid installing extraneous gems when resolving to an older version of a spec (#4101, #4198, @segiddins)
    - ensure paths resolved when parsing a gemfile are relative to that file (#3349, @dtognazzini)
    - give a better error message when encountering an invalid gemspec (#4248, #4275, @RochesterinNYC)
    - preserve the original `PATH` in `Bundler.with_clean_env` (#4251, @segiddins)
    - ensure standalone file paths are relative to the project root (#4144, @glennpratt)
