SET from=..\xmark_tracking_backend\src
SET dest=src

rmdir "%dest%\api_consts" /s /q
xcopy "%from%\api_consts" "%dest%\api_consts\" /s/h/e/k/f/c
rmdir "%dest%\dto" /s /q
xcopy "%from%\dto" "%dest%\dto\" /s/h/e/k/f/c