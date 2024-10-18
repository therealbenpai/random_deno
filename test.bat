@ECHO off
rem "This is used to remove the old code coverage files"
rmdir /S /Q coverage
deno test -r --coverage=./coverage/cov --doc --fail-fast --junit-path=./coverage/junit/test.xml --permit-no-files --unstable
deno coverage --lcov coverage/cov/ > coverage/cov.lcov