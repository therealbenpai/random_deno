@ECHO off
rem "This is used to remove the old code coverage files"
rmdir /S /Q cov
deno test -r --coverage=./cov/cov --doc --fail-fast --junit-path=./cov/junit/test.xml --permit-no-files --unstable
deno coverage --lcov cov/cov/ > cov/cov.lcov