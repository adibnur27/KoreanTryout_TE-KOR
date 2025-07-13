Project Structure:

└── fe-tekor/
    ├── .git/
    │   ├── hooks/
    │   │   ├── applypatch-msg.sample
    │   │   ├── commit-msg.sample
    │   │   ├── fsmonitor-watchman.sample
    │   │   ├── post-update.sample
    │   │   ├── pre-applypatch.sample
    │   │   ├── pre-commit.sample
    │   │   ├── pre-merge-commit.sample
    │   │   ├── pre-push.sample
    │   │   ├── pre-rebase.sample
    │   │   ├── pre-receive.sample
    │   │   ├── prepare-commit-msg.sample
    │   │   ├── push-to-checkout.sample
    │   │   ├── sendemail-validate.sample
    │   │   └── update.sample
    │   ├── info/
    │   │   └── exclude
    │   ├── logs/
    │   │   ├── refs/
    │   │   │   ├── heads/
    │   │   │   │   ├── dev-adib
    │   │   │   │   └── main
    │   │   │   ├── remotes/
    │   │   │   │   └── origin/
    │   │   │   │       ├── dev-adib
    │   │   │   │       └── HEAD
    │   │   │   └── stash
    │   │   └── HEAD
    │   ├── objects/
    │   │   ├── 00/
    │   │   │   └── ed134e842e923ca953a7ce9eaa5b0be96eda87
    │   │   ├── 01/
    │   │   │   └── ace0244e22470d802af5c9043af43f41d63c0a
    │   │   ├── 02/
    │   │   │   ├── 12a1f274adfee3ae430794b64040af87bb876c
    │   │   │   ├── 7ea7fb9f256d849723be4bf043ea9596eaf46a
    │   │   │   ├── 7fd1016e03d1317d2c32d865fc6798bfbba5fc
    │   │   │   └── baf599f9168c3843784258ab321404e7581436
    │   │   ├── 03/
    │   │   │   ├── 21077801ebf6126fbe50acf0ff69cd62c4ea66
    │   │   │   └── f149913966061442ae0dd2575c29259b1fe176
    │   │   ├── 04/
    │   │   │   ├── 4f0a763d3ec7475d727f6c24a8c040c91b2811
    │   │   │   └── de6e3e401f927497e5047f495f63ceafe13543
    │   │   ├── 05/
    │   │   │   ├── 3de492b89beeec685f57b619048f1d19efc210
    │   │   │   ├── 6ef86ab20e28f3d1c4344dbb4595f89b8523e0
    │   │   │   └── ddbf7cd8a82de3655f727d444509215b26d4be
    │   │   ├── 07/
    │   │   │   └── 572fe82d8f809e634aeda0663dfda62d99954a
    │   │   ├── 08/
    │   │   │   └── 353a98b059aed1009c2f798f1bca94984ee813
    │   │   ├── 09/
    │   │   │   └── 72581a49718fe857980e0db2667631b88e1184
    │   │   ├── 0a/
    │   │   │   ├── 74bc4a9d1ac425b28b8a2b30b7a8f5d04093e6
    │   │   │   ├── 850193ffca3659de26065e6fec3aeb03d5992f
    │   │   │   └── c4d720f2eb265769fa962d4242f3b4bec441f2
    │   │   ├── 0b/
    │   │   │   ├── 19ee2c17bf73e85c72ef57d00aada8e51e0011
    │   │   │   └── a2cd0a308f21267124b2ac3e5f3754911dcedc
    │   │   ├── 0d/
    │   │   │   └── 8843edd71e09c7f70d677e6de022f4bdd5a82d
    │   │   ├── 0e/
    │   │   │   ├── 695c78dd619a381e69386fdf1b79be375ef44a
    │   │   │   └── d7286090da9f22af288320afb7dffa91696680
    │   │   ├── 10/
    │   │   │   └── 41331934298942f0e062b24c119a151e9f9100
    │   │   ├── 12/
    │   │   │   ├── 475ef0f9c76377d49fbd15f1fd2e66966720e3
    │   │   │   ├── 6d46620e0a83a1c01e62d5818bee50147b3171
    │   │   │   ├── 95ac2aceaf3a2cd97ed0fd1cdccb32927a7328
    │   │   │   └── d45417d089dda365ca9ebd6f5ecc929221d15b
    │   │   ├── 13/
    │   │   │   └── 2b57b97104c9d02479c1a1e622bcd43d5cd20a
    │   │   ├── 14/
    │   │   │   ├── 8fa1d5429aa72420e9579f3ce1dc78b10accfd
    │   │   │   └── c1a0d23c37fba3571f2dd6cb1aeaaab72a6c91
    │   │   ├── 15/
    │   │   │   ├── 16d3fd78a4efa5d495f9a240947e95028e67f7
    │   │   │   ├── 540d9b485d040f969e9b3f02a6ad1e849aed71
    │   │   │   └── c34aaf9a671b4a1015929568d41d62e79f3c92
    │   │   ├── 16/
    │   │   │   └── 3dd9477b4830d79ef7e395e4e53ceee726e12f
    │   │   ├── 17/
    │   │   │   └── 6fc08cca199b60e4c57392aa7bfe2551062068
    │   │   ├── 18/
    │   │   │   └── c2be8f4ea50d38ed3425ac57a882f763cf5e82
    │   │   ├── 1a/
    │   │   │   └── 79fe6bf7e7be75b84bd8122ae43ac0a8e5ca5e
    │   │   ├── 1b/
    │   │   │   ├── 2d971d2871660c769e96305ff4ec6bd06c20ba
    │   │   │   ├── 513faaeb1bc8c8db6fd15577e5eeadea92c735
    │   │   │   └── f20ec86d0fe97197ebc29376b5be34d927b8ef
    │   │   ├── 1c/
    │   │   │   ├── 1cbc9170e762d59fe0620de47f06f5b9301a5f
    │   │   │   └── 7b2f9b571174a6a5a9b3e5a65f44e00b264e1f
    │   │   ├── 1d/
    │   │   │   └── 14f510facefc745cb83f284ca86777dcb0d2b0
    │   │   ├── 1e/
    │   │   │   ├── 4add151520ce7a07b3eeb7a6c4c927521b731d
    │   │   │   └── 9e10bf9c432c6851c509af4f7290b9b3d75e29
    │   │   ├── 1f/
    │   │   │   ├── 9923b9b4dd98515321afb9aa2998223044dd0d
    │   │   │   └── c189dcaa70aea0461d8401fb0d6a5f1a90196d
    │   │   ├── 21/
    │   │   │   ├── 01ae2095db56102f0d75e5d49d608b453604ad
    │   │   │   ├── 58956f9d78d55cd49bce730c77ef6b615bf067
    │   │   │   └── a7a68bcc9e87b8e2c13e49a490121e82844f7c
    │   │   ├── 22/
    │   │   │   ├── ce59cf2d761fddd3dafbbb8de41d1b3cc58f86
    │   │   │   └── dedb934ccfc86521320c3bf176d465b59eefcf
    │   │   ├── 23/
    │   │   │   ├── 7f291d97a3f4ed8d8218fc19da08c2f4b11c5d
    │   │   │   └── 8e56682570bbfed16d3f2a3f532ba863c163fb
    │   │   ├── 25/
    │   │   │   ├── b7a4b79652914510c3d94c396add6c75f68756
    │   │   │   └── b878fde9bcb6851dbd725cdfc24aa357c6e9ef
    │   │   ├── 27/
    │   │   │   └── cae449ddda69ad4f267a358ac1e98c350426bd
    │   │   ├── 2f/
    │   │   │   └── d562fef3289f5c2cad32c30fe7689dd942c624
    │   │   ├── 31/
    │   │   │   ├── 0f50d9b2b5dcece55c16341108a51a20bdbfbf
    │   │   │   ├── 5aa5245c44d766e38cc3ca6b7267f362859a91
    │   │   │   └── 81776060d0277f205b55ee66e6902268117472
    │   │   ├── 32/
    │   │   │   └── fa76c5c87d71181af48cc8c065b71ed4c53589
    │   │   ├── 34/
    │   │   │   └── f12c24653ed9ed5cc96f10418b6efc660846ad
    │   │   ├── 36/
    │   │   │   └── 62cfefd4b3192eb5301042cd8f4a3944d463df
    │   │   ├── 37/
    │   │   │   ├── 935ec7332659d70f902422e0fc67ca0c65bdf6
    │   │   │   └── ff917dac97fc1888133ca69758c6894fe008df
    │   │   ├── 3a/
    │   │   │   ├── 0ac97918b11dec27c6a5390252efaff4477ac1
    │   │   │   ├── 6ca77274dc782d46691c4e27f4b71d7547cb89
    │   │   │   ├── 91f13fb0498ac837151ed56f725a161d0a7a90
    │   │   │   ├── e3a8cfdde3e2f14027c93b12e9d904a65f23c4
    │   │   │   └── f482b1c44f28403c31b52bb51027beda0bdbaa
    │   │   ├── 3b/
    │   │   │   └── 6d910e8650edd7f12c0dd0eecfe7d4665bd81b
    │   │   ├── 3c/
    │   │   │   └── 0b63c84d2a102f45e4691eabc35dd7f160352a
    │   │   ├── 3e/
    │   │   │   ├── 56980dbdf7f406f65218cf0ac5e41eca4bff1f
    │   │   │   └── cbef5e2cce85932fd83e455817e54c7ba3912a
    │   │   ├── 3f/
    │   │   │   ├── 847a836b57836f1426884557d0387be3889e99
    │   │   │   ├── 8c5d7cdb542c2972a0465f9776a20d2d7c1788
    │   │   │   └── c2c598240be47195d24767b1aa66866d5f0791
    │   │   ├── 40/
    │   │   │   ├── 1001d9911c752408cb62301b906e96feb09c47
    │   │   │   └── 5791f147a7da9b8864606455ecd8cb8ddf148a
    │   │   ├── 41/
    │   │   │   └── 97ad984d15f219f90dfa7dcb465374f84c22ff
    │   │   ├── 42/
    │   │   │   ├── d66a9cd1304b988acba057aac9931cad81a65e
    │   │   │   └── e413f94bf7a8224387ce7706515d34a5b87d7b
    │   │   ├── 43/
    │   │   │   └── 4a0e1a1a6458849795f3e7efb3b6ec99b04732
    │   │   ├── 45/
    │   │   │   └── dbe39623aa74ae5eb74a8016340e6917e59058
    │   │   ├── 46/
    │   │   │   └── c54ffc9c7a2b1f2241902ded91364fc14829eb
    │   │   ├── 48/
    │   │   │   ├── 92b5174eec69e63844b83c65dec025756b5c08
    │   │   │   └── f2e2fa5640f423a4e75aeec4d0d96c685ac000
    │   │   ├── 49/
    │   │   │   ├── 3ad8b405f6f367ddd30a45b5e16b19ded014b2
    │   │   │   └── 95d8d6b5067176760a6c57eecbed95add5a25c
    │   │   ├── 4a/
    │   │   │   └── 13bc5f36df758f4cc906c7ef5d2eb0ef33fe86
    │   │   ├── 4b/
    │   │   │   ├── 07da5966d3181932c8200f7c6ad4e39dc82c42
    │   │   │   └── 7c5834326d350802e142e3b5f867ca669f17fa
    │   │   ├── 4c/
    │   │   │   ├── 4157dd7735f2d768b67566b5b214fabfe567d1
    │   │   │   ├── f51d0e70f5d5e7226801d1415e0431dd14ac7b
    │   │   │   └── fa4d0be4714e57680541e5d92dd14c7e42ed0e
    │   │   ├── 4d/
    │   │   │   └── e1367c148fe4c3a6f39bb18316a48b4bb4e40d
    │   │   ├── 4f/
    │   │   │   └── 10878d766e84ac04dd0f3aa9ee1adac43526ff
    │   │   ├── 50/
    │   │   │   └── f0a2865d12412cb7d63765b559ed497dd9936c
    │   │   ├── 53/
    │   │   │   ├── 1fbdde72800336c84bb03769ade4d202367039
    │   │   │   ├── 586d4e58ecd475f03e39cdd8d669d263364d7d
    │   │   │   └── a94e642945f40b5903f8fab95f67b6bf8696d6
    │   │   ├── 54/
    │   │   │   └── 82a71e919f87e586e29f623476c501f3f359e7
    │   │   ├── 55/
    │   │   │   ├── 2285ce533e2a6c4e78f00ae0242a080bfe5346
    │   │   │   └── f71ec1e8fd31f4d786a71e8c265803171c5bd5
    │   │   ├── 57/
    │   │   │   ├── 147b74cdc74ab81f3a142e9d96e4cd5d28d59d
    │   │   │   ├── 3ce0225ba2d4cfe496623f2606fd465c72db25
    │   │   │   ├── 52e74755c2e3b50211add0ef190ed700336aa2
    │   │   │   └── bd818278f2c904a0838a9637b03574e871cbf5
    │   │   ├── 59/
    │   │   │   ├── 31b2d3a2f4211f93b2ca87e89582c7b5feaa78
    │   │   │   └── 46c89cc9de9cf1699d8b1a6295fac8e3612b02
    │   │   ├── 5a/
    │   │   │   └── dc517cc363809c66df1bf7e6cb8aa69bdc44da
    │   │   ├── 5b/
    │   │   │   ├── 799e8dce726b675caca85489999deee614746d
    │   │   │   ├── 850087e98f5e7678487f3794a7291274e48cfc
    │   │   │   ├── 8c43846e70de3f7938024629b66fba14822248
    │   │   │   ├── acd8ee2c052a8a26070536841ef5b14b1e1b40
    │   │   │   └── e59b4cd491dc8bb37ed79e69aa9bc110a0d4c1
    │   │   ├── 5c/
    │   │   │   ├── 71d32090a91b63f43630562340713be78230bf
    │   │   │   └── 7a8b2bae8c53a18bd9b02aa3326c7502442a06
    │   │   ├── 5d/
    │   │   │   └── e83eb4b6ef6cde16176d1c921912647e6ffc65
    │   │   ├── 5f/
    │   │   │   ├── 598c067631bbcc6db4b69b7b7e1addae614035
    │   │   │   └── 9508ca630cf65d435622dd48a2860cafc84379
    │   │   ├── 63/
    │   │   │   └── cdca44d6b1c38de3b3604bbb8ac6dff7707a87
    │   │   ├── 65/
    │   │   │   ├── 4cb86cb148180e0827e5bc733ebe67fffc517b
    │   │   │   ├── 87f13577aa618e8265b1073a5125b9becceb25
    │   │   │   └── ae82538d4064aa6d1e57e6d10e9e82f87d694a
    │   │   ├── 66/
    │   │   │   └── c746917567f65f64dedcfb8c56afeac777c39d
    │   │   ├── 67/
    │   │   │   ├── 3ecd9e0afb85f63022783e5d65d1894c033aa7
    │   │   │   ├── 41346e5d1c4b11b88eba79db01e9ebb6216465
    │   │   │   ├── 690f6ef4d5a4b5803c77510292a13a28af3b0c
    │   │   │   └── 90b80cd085d657bcc9463bdf55ae9b6e4975ca
    │   │   ├── 68/
    │   │   │   └── 296051c970537e8664fa36ac88b51263072273
    │   │   ├── 69/
    │   │   │   └── 1b9b08b5691f19f8cce68c219de495eee4af86
    │   │   ├── 6b/
    │   │   │   ├── 6afead6f1322775500ea2f53e737e4fd393c44
    │   │   │   ├── 87b643e7fc83a8787e064aba21f5b7db21b287
    │   │   │   └── cbb6f9da5aff1571113cc1dd18ea254f3cf7ae
    │   │   ├── 6c/
    │   │   │   └── fe2c5ee5a43bf666d54d5b69d00f352289ea0b
    │   │   ├── 6d/
    │   │   │   ├── 7b9f299592d674190a77937f4d26a2ddf488cc
    │   │   │   ├── c27ad7d2f9c5bc3a09030b53f01f9ea940195b
    │   │   │   ├── c6f55c295664c747b7983afbb4f27b834426f5
    │   │   │   └── e8492650465b177b1823395f6f0e0fcb45d7e0
    │   │   ├── 6f/
    │   │   │   ├── 139ff7c459007ccc6418ae01035180e9e16eae
    │   │   │   ├── 5baea89e971963ce037e38a3110847ec39ba82
    │   │   │   └── ead482bfb4245dd568d290c3e57edf718d97ef
    │   │   ├── 71/
    │   │   │   └── 8f27b903e56a7e2002f1d4e0d9cdb0ec62abda
    │   │   ├── 73/
    │   │   │   ├── 6a66518874f5a8234fbb5de452a890894d7d8a
    │   │   │   └── a9af205d385fc5a58a531dfe211f7b7a12fddb
    │   │   ├── 74/
    │   │   │   └── 2ed526f74a5f5230e48b10fd95f404cebf9301
    │   │   ├── 75/
    │   │   │   ├── 02c60b166d72a3db8ed6011a3a3cc44892a084
    │   │   │   └── 2e9dd618d4c436fe7001996cd901a5b6447e9c
    │   │   ├── 77/
    │   │   │   ├── 1f2179b6331ecbeaa024939e213140b088e17b
    │   │   │   ├── 7327e2c93a802e46aca06e504ff659966db6c7
    │   │   │   └── af76f59be1ed51056c9dee68628a71f2fc3d5d
    │   │   ├── 78/
    │   │   │   ├── 85245646b31ef42bd40a2bd7a42d720a4fd639
    │   │   │   └── da64abab2f8fc9065de3745ce487987ca955a0
    │   │   ├── 79/
    │   │   │   ├── af4938e2c657b07249891f347a79ccb748ad81
    │   │   │   ├── c6620209722214bfb05259ae8f7f44a0a9ad58
    │   │   │   └── de892f7d82a408082d37b7dad7a5f710e8cf79
    │   │   ├── 7a/
    │   │   │   └── 47bf7e691daae777db101d4f9bb9aa49a3a677
    │   │   ├── 7b/
    │   │   │   └── 454f97a59e70675414043761eff76c3673c70d
    │   │   ├── 7c/
    │   │   │   ├── 29ec3903766b579d0d50facd1a87d8d612994e
    │   │   │   ├── 58ff7f7241831d3046ddc8287569863f089370
    │   │   │   ├── 85a10fc0cba571df5b771e85eeb68f5ce7a95e
    │   │   │   └── bca3115a8593cc4c61a588229d5f61a296a92d
    │   │   ├── 7d/
    │   │   │   └── 8a600edf89331ea90366513d876e69fc2e942b
    │   │   ├── 7e/
    │   │   │   ├── 6517dff1ba03986e2073a6aa7058d3afcd342f
    │   │   │   └── 78860365c7cbd18953ba81c88debe48392df82
    │   │   ├── 7f/
    │   │   │   ├── 8084dc142a27dedadb196eb319860a2db8c2d4
    │   │   │   └── dd346410f7a628321f7401650b7f9f6ccb8545
    │   │   ├── 80/
    │   │   │   ├── 9cc85c9280020b26d618219fedcc39a1d36607
    │   │   │   └── ed1f3bd3a095601e671c188a1b5711e81742de
    │   │   ├── 87/
    │   │   │   └── 51f4c8430a70bc31036abcace8a2402658b7d5
    │   │   ├── 88/
    │   │   │   ├── 4fdaba62cd885031940d07e1ca64bd3a281622
    │   │   │   ├── bcfe085088869d6bb9a2c82963f3bc72ac1068
    │   │   │   └── fed7514dbf8cd2ed3bba889998bd0749692c57
    │   │   ├── 89/
    │   │   │   ├── 173d1ecd559127d15782e5ab5387e8240bca25
    │   │   │   └── 7ea42b29b20a3f9027deaa74cc367b80192144
    │   │   ├── 8a/
    │   │   │   ├── 021e86b4a3266787d36eba962ae306e2b29fd5
    │   │   │   └── 11eefe562615da8fc97846580de8b6ca2a6cde
    │   │   ├── 8b/
    │   │   │   └── 137891791fe96927ad78e64b0aad7bded08bdc
    │   │   ├── 8c/
    │   │   │   └── 1661c4582c165d7f4cec5b809bb4443caa8b61
    │   │   ├── 8d/
    │   │   │   ├── 05963ec58b924985e1f4902faa19a874f67530
    │   │   │   └── 60bf7fc54b0c3582ea97cb95aeb6e1a8988b07
    │   │   ├── 8e/
    │   │   │   └── 661a97cd67bea29db3c9b1d84c8db842077ce2
    │   │   ├── 8f/
    │   │   │   ├── 0f427ef0f04a6115665f558176fcab66f34387
    │   │   │   ├── 220448274b7c259b59ad781e84db6ca9028af4
    │   │   │   └── e1f827939e78b9b27edd41030324329771c383
    │   │   ├── 90/
    │   │   │   └── 7752b5d2048412f0a2f0dee9e71e5522a07a65
    │   │   ├── 91/
    │   │   │   └── b8028d2786d3e608817e6be0e300bca8a951d5
    │   │   ├── 92/
    │   │   │   ├── 0deedda61be000e41380d887490367e446c11c
    │   │   │   ├── dffd5f670fed9108baeffeae1b462d80d6d4d8
    │   │   │   └── e2b672bfa5b917e881cf6d81ad9c3f8431be80
    │   │   ├── 93/
    │   │   │   ├── 49d082e83c1e87ef396ff231c2bde79100b4b2
    │   │   │   ├── 86465b763294c5d777b40e339efda58e41fdcf
    │   │   │   ├── a00b6a6cba2964ee39d75cf474fc8706dd4ec1
    │   │   │   └── f5d8c8b0c1acf96cf7cc5cb07ffa98bfa26eb2
    │   │   ├── 99/
    │   │   │   └── 4b6316dcf36d3ec030faac1721bd04b0091437
    │   │   ├── 9a/
    │   │   │   └── 86724ff7604aec433794c31b68c2c75a54c6c2
    │   │   ├── 9b/
    │   │   │   └── 0e598c6ba137856ecfc289f3ebbe96b9e831af
    │   │   ├── 9c/
    │   │   │   └── a71ed59d02d4c28d253acb16f75066df92aac2
    │   │   ├── 9d/
    │   │   │   ├── 8edf5601527f94ed92a396711a9f4dc4d90fed
    │   │   │   └── b9ca4021c2c3fdfc4c3c8cf54d73089b0323db
    │   │   ├── 9e/
    │   │   │   └── e7483376153a5a65cb07207b79f603450b8350
    │   │   ├── 9f/
    │   │   │   └── 168d0b50b4219a79913ebb5968731237da05de
    │   │   ├── a0/
    │   │   │   └── 73595fe10ba36bbc1e5a6f584067697c644bb9
    │   │   ├── a1/
    │   │   │   ├── 06be16170627fd3ca8943e256d7578048e0499
    │   │   │   └── 81ac87a71970c862eaa0a7298d32019d132c8c
    │   │   ├── a4/
    │   │   │   ├── 5611fbc7bda5ee73a2346bd1f0412083080d15
    │   │   │   └── e1a8ee7d02d305cebdeca1abf77a8a50c9feb6
    │   │   ├── a5/
    │   │   │   └── eb6170ffd401d99a041a500bf4103a9f77da10
    │   │   ├── a6/
    │   │   │   └── a5ab085a63b6c0918216eb32c9235e5685a2e7
    │   │   ├── a7/
    │   │   │   ├── 509c6431c3b56104d012b6323bd1907b9bd465
    │   │   │   ├── 9d0e28af08618f86204354d20d81006e4e7100
    │   │   │   └── ef0992cd4559318c8df1dee16f644ba2927318
    │   │   ├── a9/
    │   │   │   ├── 1000495a8c101c8c8e02b18381d0b0b4ff08dd
    │   │   │   ├── 58c321c739cfc62c7938b00484f447134046f3
    │   │   │   └── 5eeebd9ad20114d7eb9998ce75f5e304f47d68
    │   │   ├── aa/
    │   │   │   └── 3b3575c6563ab6164842e5c3150d832863c256
    │   │   ├── ab/
    │   │   │   ├── b0f9408d6d3bc875796e868b0b4d5a7ac33dd1
    │   │   │   └── c727b96468d03a47a0b8cd43a962311628eea9
    │   │   ├── ac/
    │   │   │   └── ec97fdd826d5fcae1e70958f4cbcc77d9c6cbb
    │   │   ├── af/
    │   │   │   └── 182caef8a39edc97b0fdc4fa5608da8e461461
    │   │   ├── b0/
    │   │   │   └── ada54a2529511854a238760b8f5a5a34ebc03a
    │   │   ├── b1/
    │   │   │   ├── 3d5675e5bab9b268727cd35e26d852ce05fe4e
    │   │   │   ├── 95baf737749785af292240ecbcb68ee25d5633
    │   │   │   └── c5229459ada92bea4be7769d44ef9b6ac5cb87
    │   │   ├── b2/
    │   │   │   └── 595891926e0344b3a1f77c440715cdb41ef933
    │   │   ├── b3/
    │   │   │   └── 98da3b0517c68b09d152dd1bbd8beee1a35799
    │   │   ├── b4/
    │   │   │   ├── 1080127c31f4d3aaa6cde0ca72df62300ea017
    │   │   │   ├── 1ceb9e682627dfbc154b7c6b97400cd698e329
    │   │   │   ├── 7206bb96a35d2becf4fc5755555d59b3cbf283
    │   │   │   └── 9d3601c6312ca03b757fd44adf7e344a084e6e
    │   │   ├── b5/
    │   │   │   ├── 63d5206111e9c3a79a6b3403ee53c03fcc8a4e
    │   │   │   └── 887c75355b8bede7c2caa461933d10aac5fa8b
    │   │   ├── b6/
    │   │   │   └── d5e10d1181c2c1794a6d4985ad788463938413
    │   │   ├── b7/
    │   │   │   └── d9859470303d058de442b5f14cec13bed93da0
    │   │   ├── b8/
    │   │   │   └── 00a326d7f085311b8dff8b1b522c65f9f20a7d
    │   │   ├── b9/
    │   │   │   ├── c306b9c35d7e52afed233386d528722991d7e5
    │   │   │   └── f5ba788be7bb3806b04fe2d5e4e8d02b82d48a
    │   │   ├── ba/
    │   │   │   ├── 90e337d7d4e29a19625426a48548e9af21dd49
    │   │   │   └── e203ac4e953a2ee313792f2b353437699421f8
    │   │   ├── bb/
    │   │   │   └── 878054a8d7436a8222eb9479ff54f1660fe11f
    │   │   ├── bc/
    │   │   │   ├── 2203982ab42c3b709913610a0e3c93599b333a
    │   │   │   ├── 38475b5befcaa008d974d9731c9ea4080daa2a
    │   │   │   └── 93fa5700df4d9eb0d68e3d531c0bc79f6d2f02
    │   │   ├── be/
    │   │   │   ├── 22e3a45566f6d370a464e0e24cc5ffed8c1403
    │   │   │   └── df07f2469e28b300c10c088f8e6fcd3325072e
    │   │   ├── c0/
    │   │   │   └── 0ce3309b346eaaf7505a4d290e1d8b853fce44
    │   │   ├── c2/
    │   │   │   └── 28a1c14813e3d0ed7a21ae1b3589455a783e64
    │   │   ├── c3/
    │   │   │   └── 5924b83e8178eb108fa6ea90e8fa5ac7d0d8dc
    │   │   ├── c4/
    │   │   │   └── 2b19086c6b6dc6a183182bd25b25f65713c5c4
    │   │   ├── c5/
    │   │   │   └── 84857dfb005f19264e24402405802c365c0af6
    │   │   ├── c6/
    │   │   │   └── 56eec294dc689021826164eb492500f4d38181
    │   │   ├── c7/
    │   │   │   ├── 302b3a4978729d12c8038e8279d4a758b4ad80
    │   │   │   └── 69ebde7523c2188f0a76c3ea534dfce0c6349a
    │   │   ├── c9/
    │   │   │   ├── 7899766cd41141e40e8e7d45668e23cefac75e
    │   │   │   └── fcd810236ae95d2498ac9d7b43105d8665bef2
    │   │   ├── cc/
    │   │   │   ├── 028cae89745cb2996e3ed67e19c30a426e95b3
    │   │   │   └── b52a3ebb8b8fbbf21b2e29fc723f45847d815e
    │   │   ├── ce/
    │   │   │   ├── 66c1b83ba5a5a968e9ea9689a14501c30a6d52
    │   │   │   └── a84e4d6ae39642b2f74038ff78f97b58d0210b
    │   │   ├── cf/
    │   │   │   ├── 5a4bc2c9e7a2f515e74cd5998295fe5d57a5e9
    │   │   │   └── c43edcd0c419aabcff984443f98cfdd249b0a9
    │   │   ├── d0/
    │   │   │   └── 148d3a311a6ba4f2fe3e0abfcd6424be5b61eb
    │   │   ├── d1/
    │   │   │   ├── 0742d97ae6c41120f13d67ff8347c984c8d7d2
    │   │   │   ├── 2d28665b1d4b2cf626d456066a1d9da81f78f5
    │   │   │   └── 32c63cfa68e62dcbfc9c75b54e4db06b81f697
    │   │   ├── d3/
    │   │   │   ├── 121246d692a44e7fadb3807648a744260c2e77
    │   │   │   ├── 37181d7d60d540eaf5f0dc403225bfb66e27d7
    │   │   │   └── f2ed6250e5093e72cfa327e22843a0f501d74a
    │   │   ├── d4/
    │   │   │   ├── 30afcf8089589901c8f7bd3f247d6ccb05795e
    │   │   │   ├── 5053b66c52dd25326dbded6a8230985530fbe8
    │   │   │   ├── 819e58e24b59a314b95859c079718656048eb6
    │   │   │   └── a24b542f7d7c813d0fae58f2d04e565af22e99
    │   │   ├── d5/
    │   │   │   └── d31341bf18d933a35da886b3e3e90809013788
    │   │   ├── d6/
    │   │   │   ├── a4bbf67d57d26143b02250f8bea14c1d968424
    │   │   │   └── f8f6b0865da5d9b87d34728d388b5c583b1b8f
    │   │   ├── d7/
    │   │   │   ├── 2c6f968ed18fdc3473783a33c3323567a8836a
    │   │   │   ├── 9ae3867f7af6da107a9b200111764c4cbd1bb3
    │   │   │   ├── d6bfede340db1e6316be58c872b86055e033c4
    │   │   │   └── e984298ffe1cd8fb417e5a9738ccb68b8d9c26
    │   │   ├── d8/
    │   │   │   ├── 1206a9c6cf0d53749a59b4c042ade4038bb460
    │   │   │   ├── 8f4aa580d133d1f8d70b471c71018a6385eb6f
    │   │   │   └── f9f0f4cc0ee1bae627148fd23b7539bfffbf04
    │   │   ├── d9/
    │   │   │   └── 90328f65c98d454deb52d3c517d3c1dcdb520c
    │   │   ├── da/
    │   │   │   └── a15e8259d6d6d004e4c4da11b307ef6692af6d
    │   │   ├── db/
    │   │   │   └── 34fbc31ce5cc60830014954cd56ed08197143c
    │   │   ├── dc/
    │   │   │   └── 2e5435e1360fdaee4205c6160db942903b5e99
    │   │   ├── dd/
    │   │   │   ├── d14ad8832bfadd978e0ffb582bb8b0d237b5ec
    │   │   │   ├── d28bf7dc45cb38f68cdca3e8a0e09d13ed49d2
    │   │   │   └── d29c490e92827e8b5c12fdf1a6a5d40355583a
    │   │   ├── de/
    │   │   │   └── 2c3aeaa1ce12b9249432517a964c9700f471ea
    │   │   ├── e0/
    │   │   │   └── 03109e3cad00470b70e4f45e8f0a696c054ed6
    │   │   ├── e1/
    │   │   │   └── 69ba09b06ef5411ebab85e94ede7948896cd2e
    │   │   ├── e2/
    │   │   │   └── b433dcb71064a2b4cad481af77364f15d20641
    │   │   ├── e3/
    │   │   │   └── 97260fe6e744fc351a9dd0a44def5b5fd3c5db
    │   │   ├── e5/
    │   │   │   └── 6cfc0eb8c573130e079e8b14007ad4081cd215
    │   │   ├── e6/
    │   │   │   ├── 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
    │   │   │   └── c3504c1ddd438b5e726fd97fd1c51fc8560f77
    │   │   ├── e7/
    │   │   │   ├── 0f0a0af104c7b2ea006139e7aba081c0507fbd
    │   │   │   ├── 69ae97170ae6f78e96846ca30e24c6058c66e8
    │   │   │   └── 93cd80eb15b2fd067cc4b168ac1cfec167128f
    │   │   ├── e8/
    │   │   │   ├── 96518512ccfa96d0669c07f24dd3c7faac8139
    │   │   │   └── c1766bb265331c4fca3c899bba1a5d67157f16
    │   │   ├── e9/
    │   │   │   ├── a9037d3623d0e80d7e0920ad74f5b8c73d379a
    │   │   │   ├── d8698d3c5d63ee00f3b8f1141b07295fdbc780
    │   │   │   ├── df3110105b60e15832341d6b0cae8c285cedde
    │   │   │   └── ee1d53b65ffdda327a995dde3e37b0c38ecf32
    │   │   ├── eb/
    │   │   │   └── bc132e7f699182a6b748808e32009a9563b88e
    │   │   ├── ed/
    │   │   │   ├── 144fb65217ff76ce401ac61861f06b143f1e5a
    │   │   │   ├── 615565e58d7d5bc4c3685f754b393ddf91ff95
    │   │   │   └── d36d9f0c5418950781c44487d9259182bc8955
    │   │   ├── ef/
    │   │   │   ├── 18cc036763cecaa014b4305975c45dbca5be56
    │   │   │   └── b718b95d77e79e54ed4a4b1c46f54d834455f7
    │   │   ├── f0/
    │   │   │   └── daa9def7bd900fa8f724a300a747afe815a010
    │   │   ├── f1/
    │   │   │   └── acb8d7c59895c54b435d5b8e045aa0435a966a
    │   │   ├── f2/
    │   │   │   ├── 91f94919612426185b04be996fe7c4edf6f78d
    │   │   │   └── cc65a4f05b3b0e3ad25b13f9285467723cf9ef
    │   │   ├── f4/
    │   │   │   └── 1abab0ad42041994cd73489658aeffb62fb747
    │   │   ├── f5/
    │   │   │   ├── a606bff7c8c7125c4180b8c0c024fb050047d7
    │   │   │   └── ed9f25832b4b7f70fb3796e4c96ac1ddd557b4
    │   │   ├── f8/
    │   │   │   └── e105ed66fb7aae186e032e0c9ff7f552bc585b
    │   │   ├── f9/
    │   │   │   ├── b0264a69f9746fad61c635b88cb966cdf66f32
    │   │   │   └── e7233e2349752611dcfce76b264a4a26f191ec
    │   │   ├── fa/
    │   │   │   ├── 2067c93c1a449c746e3c41da5a1097ee6baa8b
    │   │   │   └── 464d4c1753a658187886ff7d7400bde06ca40f
    │   │   ├── fb/
    │   │   │   ├── 379aa76b40c6afe728366f70ab23fb907535db
    │   │   │   ├── cc9a2f8542607c065c1a2fd334b255efc3fade
    │   │   │   └── e14a4c98ae1e88685c21b79c95250d724fd43f
    │   │   ├── fc/
    │   │   │   └── 6ec97eb4a76d5e868caa304a025fdcb286650b
    │   │   ├── fd/
    │   │   │   └── ee66f744f80b68693ea8414d93ca15de9caa07
    │   │   ├── fe/
    │   │   │   ├── 6493a8961743226c95b564ba54d9e0f9867bd5
    │   │   │   └── 900217b11d57ad9d6bac4d839802c025d53b68
    │   │   ├── ff/
    │   │   │   ├── 219e087bad1bfe324e4b33eb3a45fbde66eec7
    │   │   │   ├── 3874ef648bdae93a58c9aa80ded000af629400
    │   │   │   └── c76b7327f4cfcf292d57e16571afc52893a642
    │   │   ├── info/
    │   │   └── pack/
    │   │       ├── pack-d3b85d89240542996cd5e41cdbc30be9341f3907.idx
    │   │       ├── pack-d3b85d89240542996cd5e41cdbc30be9341f3907.pack
    │   │       └── pack-d3b85d89240542996cd5e41cdbc30be9341f3907.rev
    │   ├── refs/
    │   │   ├── heads/
    │   │   │   ├── dev-adib
    │   │   │   └── main
    │   │   ├── remotes/
    │   │   │   └── origin/
    │   │   │       ├── dev-adib
    │   │   │       └── HEAD
    │   │   ├── tags/
    │   │   └── stash
    │   ├── COMMIT_EDITMSG
    │   ├── config
    │   ├── description
    │   ├── HEAD
    │   ├── index
    │   ├── ORIG_HEAD
    │   └── packed-refs
    ├── node_modules/
    │   ├── .bin/
    │   │   ├── acorn
    │   │   ├── acorn.cmd
    │   │   ├── acorn.ps1
    │   │   ├── autoprefixer
    │   │   ├── autoprefixer.cmd
    │   │   ├── autoprefixer.ps1
    │   │   ├── browserslist
    │   │   ├── browserslist.cmd
    │   │   ├── browserslist.ps1
    │   │   ├── cssesc
    │   │   ├── cssesc.cmd
    │   │   ├── cssesc.ps1
    │   │   ├── esbuild
    │   │   ├── esbuild.cmd
    │   │   ├── esbuild.ps1
    │   │   ├── eslint
    │   │   ├── eslint.cmd
    │   │   ├── eslint.ps1
    │   │   ├── glob
    │   │   ├── glob.cmd
    │   │   ├── glob.ps1
    │   │   ├── jiti
    │   │   ├── jiti.cmd
    │   │   ├── jiti.ps1
    │   │   ├── js-yaml
    │   │   ├── js-yaml.cmd
    │   │   ├── js-yaml.ps1
    │   │   ├── jsesc
    │   │   ├── jsesc.cmd
    │   │   ├── jsesc.ps1
    │   │   ├── json5
    │   │   ├── json5.cmd
    │   │   ├── json5.ps1
    │   │   ├── nanoid
    │   │   ├── nanoid.cmd
    │   │   ├── nanoid.ps1
    │   │   ├── node-which
    │   │   ├── node-which.cmd
    │   │   ├── node-which.ps1
    │   │   ├── parser
    │   │   ├── parser.cmd
    │   │   ├── parser.ps1
    │   │   ├── resolve
    │   │   ├── resolve.cmd
    │   │   ├── resolve.ps1
    │   │   ├── rollup
    │   │   ├── rollup.cmd
    │   │   ├── rollup.ps1
    │   │   ├── semver
    │   │   ├── semver.cmd
    │   │   ├── semver.ps1
    │   │   ├── sucrase
    │   │   ├── sucrase-node
    │   │   ├── sucrase-node.cmd
    │   │   ├── sucrase-node.ps1
    │   │   ├── sucrase.cmd
    │   │   ├── sucrase.ps1
    │   │   ├── tailwind
    │   │   ├── tailwind.cmd
    │   │   ├── tailwind.ps1
    │   │   ├── tailwindcss
    │   │   ├── tailwindcss.cmd
    │   │   ├── tailwindcss.ps1
    │   │   ├── update-browserslist-db
    │   │   ├── update-browserslist-db.cmd
    │   │   ├── update-browserslist-db.ps1
    │   │   ├── vite
    │   │   ├── vite.cmd
    │   │   ├── vite.ps1
    │   │   ├── yaml
    │   │   ├── yaml.cmd
    │   │   └── yaml.ps1
    │   ├── .vite/
    │   │   └── deps/
    │   │       ├── _metadata.json
    │   │       ├── @hookform_resolvers_yup.js
    │   │       ├── @hookform_resolvers_yup.js.map
    │   │       ├── @reduxjs_toolkit.js
    │   │       ├── @reduxjs_toolkit.js.map
    │   │       ├── axios.js
    │   │       ├── axios.js.map
    │   │       ├── chunk-G3PMV62Z.js
    │   │       ├── chunk-G3PMV62Z.js.map
    │   │       ├── chunk-HE4GKDYE.js
    │   │       ├── chunk-HE4GKDYE.js.map
    │   │       ├── chunk-MJNCUEZK.js
    │   │       ├── chunk-MJNCUEZK.js.map
    │   │       ├── chunk-RAHNFGEP.js
    │   │       ├── chunk-RAHNFGEP.js.map
    │   │       ├── chunk-UGC3UZ7L.js
    │   │       ├── chunk-UGC3UZ7L.js.map
    │   │       ├── clsx.js
    │   │       ├── clsx.js.map
    │   │       ├── framer-motion_client.js
    │   │       ├── framer-motion_client.js.map
    │   │       ├── gsap.js
    │   │       ├── gsap.js.map
    │   │       ├── package.json
    │   │       ├── react_jsx-dev-runtime.js
    │   │       ├── react_jsx-dev-runtime.js.map
    │   │       ├── react_jsx-runtime.js
    │   │       ├── react_jsx-runtime.js.map
    │   │       ├── react-dom_client.js
    │   │       ├── react-dom_client.js.map
    │   │       ├── react-dom.js
    │   │       ├── react-dom.js.map
    │   │       ├── react-hook-form.js
    │   │       ├── react-hook-form.js.map
    │   │       ├── react-redux.js
    │   │       ├── react-redux.js.map
    │   │       ├── react-router-dom.js
    │   │       ├── react-router-dom.js.map
    │   │       ├── react.js
    │   │       ├── react.js.map
    │   │       ├── sweetalert2.js
    │   │       ├── sweetalert2.js.map
    │   │       ├── yup.js
    │   │       └── yup.js.map
    │   ├── .vite-temp/
    │   ├── @alloc/
    │   │   └── quick-lru/
    │   │       ├── index.d.ts
    │   │       ├── index.js
    │   │       ├── license
    │   │       ├── package.json
    │   │       └── readme.md
    │   ├── @ampproject/
    │   │   └── remapping/
    │   │       ├── dist/
    │   │       │   ├── types/
    │   │       │   │   ├── build-source-map-tree.d.ts
    │   │       │   │   ├── remapping.d.ts
    │   │       │   │   ├── source-map-tree.d.ts
    │   │       │   │   ├── source-map.d.ts
    │   │       │   │   └── types.d.ts
    │   │       │   ├── remapping.mjs
    │   │       │   ├── remapping.mjs.map
    │   │       │   ├── remapping.umd.js
    │   │       │   └── remapping.umd.js.map
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @babel/
    │   │   ├── code-frame/
    │   │   │   ├── lib/
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── compat-data/
    │   │   │   ├── data/
    │   │   │   │   ├── corejs2-built-ins.json
    │   │   │   │   ├── corejs3-shipped-proposals.json
    │   │   │   │   ├── native-modules.json
    │   │   │   │   ├── overlapping-plugins.json
    │   │   │   │   ├── plugin-bugfixes.json
    │   │   │   │   └── plugins.json
    │   │   │   ├── corejs2-built-ins.js
    │   │   │   ├── corejs3-shipped-proposals.js
    │   │   │   ├── LICENSE
    │   │   │   ├── native-modules.js
    │   │   │   ├── overlapping-plugins.js
    │   │   │   ├── package.json
    │   │   │   ├── plugin-bugfixes.js
    │   │   │   ├── plugins.js
    │   │   │   └── README.md
    │   │   ├── core/
    │   │   │   ├── lib/
    │   │   │   │   ├── config/
    │   │   │   │   │   ├── files/
    │   │   │   │   │   │   ├── configuration.js
    │   │   │   │   │   │   ├── configuration.js.map
    │   │   │   │   │   │   ├── import.cjs
    │   │   │   │   │   │   ├── import.cjs.map
    │   │   │   │   │   │   ├── index-browser.js
    │   │   │   │   │   │   ├── index-browser.js.map
    │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   ├── index.js.map
    │   │   │   │   │   │   ├── module-types.js
    │   │   │   │   │   │   ├── module-types.js.map
    │   │   │   │   │   │   ├── package.js
    │   │   │   │   │   │   ├── package.js.map
    │   │   │   │   │   │   ├── plugins.js
    │   │   │   │   │   │   ├── plugins.js.map
    │   │   │   │   │   │   ├── types.js
    │   │   │   │   │   │   ├── types.js.map
    │   │   │   │   │   │   ├── utils.js
    │   │   │   │   │   │   └── utils.js.map
    │   │   │   │   │   ├── helpers/
    │   │   │   │   │   │   ├── config-api.js
    │   │   │   │   │   │   ├── config-api.js.map
    │   │   │   │   │   │   ├── deep-array.js
    │   │   │   │   │   │   ├── deep-array.js.map
    │   │   │   │   │   │   ├── environment.js
    │   │   │   │   │   │   └── environment.js.map
    │   │   │   │   │   ├── validation/
    │   │   │   │   │   │   ├── option-assertions.js
    │   │   │   │   │   │   ├── option-assertions.js.map
    │   │   │   │   │   │   ├── options.js
    │   │   │   │   │   │   ├── options.js.map
    │   │   │   │   │   │   ├── plugins.js
    │   │   │   │   │   │   ├── plugins.js.map
    │   │   │   │   │   │   ├── removed.js
    │   │   │   │   │   │   └── removed.js.map
    │   │   │   │   │   ├── cache-contexts.js
    │   │   │   │   │   ├── cache-contexts.js.map
    │   │   │   │   │   ├── caching.js
    │   │   │   │   │   ├── caching.js.map
    │   │   │   │   │   ├── config-chain.js
    │   │   │   │   │   ├── config-chain.js.map
    │   │   │   │   │   ├── config-descriptors.js
    │   │   │   │   │   ├── config-descriptors.js.map
    │   │   │   │   │   ├── full.js
    │   │   │   │   │   ├── full.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── index.js.map
    │   │   │   │   │   ├── item.js
    │   │   │   │   │   ├── item.js.map
    │   │   │   │   │   ├── partial.js
    │   │   │   │   │   ├── partial.js.map
    │   │   │   │   │   ├── pattern-to-regex.js
    │   │   │   │   │   ├── pattern-to-regex.js.map
    │   │   │   │   │   ├── plugin.js
    │   │   │   │   │   ├── plugin.js.map
    │   │   │   │   │   ├── printer.js
    │   │   │   │   │   ├── printer.js.map
    │   │   │   │   │   ├── resolve-targets-browser.js
    │   │   │   │   │   ├── resolve-targets-browser.js.map
    │   │   │   │   │   ├── resolve-targets.js
    │   │   │   │   │   ├── resolve-targets.js.map
    │   │   │   │   │   ├── util.js
    │   │   │   │   │   └── util.js.map
    │   │   │   │   ├── errors/
    │   │   │   │   │   ├── config-error.js
    │   │   │   │   │   ├── config-error.js.map
    │   │   │   │   │   ├── rewrite-stack-trace.js
    │   │   │   │   │   └── rewrite-stack-trace.js.map
    │   │   │   │   ├── gensync-utils/
    │   │   │   │   │   ├── async.js
    │   │   │   │   │   ├── async.js.map
    │   │   │   │   │   ├── fs.js
    │   │   │   │   │   ├── fs.js.map
    │   │   │   │   │   ├── functional.js
    │   │   │   │   │   └── functional.js.map
    │   │   │   │   ├── parser/
    │   │   │   │   │   ├── util/
    │   │   │   │   │   │   ├── missing-plugin-helper.js
    │   │   │   │   │   │   └── missing-plugin-helper.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── index.js.map
    │   │   │   │   ├── tools/
    │   │   │   │   │   ├── build-external-helpers.js
    │   │   │   │   │   └── build-external-helpers.js.map
    │   │   │   │   ├── transformation/
    │   │   │   │   │   ├── file/
    │   │   │   │   │   │   ├── babel-7-helpers.cjs
    │   │   │   │   │   │   ├── babel-7-helpers.cjs.map
    │   │   │   │   │   │   ├── file.js
    │   │   │   │   │   │   ├── file.js.map
    │   │   │   │   │   │   ├── generate.js
    │   │   │   │   │   │   ├── generate.js.map
    │   │   │   │   │   │   ├── merge-map.js
    │   │   │   │   │   │   └── merge-map.js.map
    │   │   │   │   │   ├── util/
    │   │   │   │   │   │   ├── clone-deep.js
    │   │   │   │   │   │   └── clone-deep.js.map
    │   │   │   │   │   ├── block-hoist-plugin.js
    │   │   │   │   │   ├── block-hoist-plugin.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── index.js.map
    │   │   │   │   │   ├── normalize-file.js
    │   │   │   │   │   ├── normalize-file.js.map
    │   │   │   │   │   ├── normalize-opts.js
    │   │   │   │   │   ├── normalize-opts.js.map
    │   │   │   │   │   ├── plugin-pass.js
    │   │   │   │   │   └── plugin-pass.js.map
    │   │   │   │   ├── vendor/
    │   │   │   │   │   ├── import-meta-resolve.js
    │   │   │   │   │   └── import-meta-resolve.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── parse.js
    │   │   │   │   ├── parse.js.map
    │   │   │   │   ├── transform-ast.js
    │   │   │   │   ├── transform-ast.js.map
    │   │   │   │   ├── transform-file-browser.js
    │   │   │   │   ├── transform-file-browser.js.map
    │   │   │   │   ├── transform-file.js
    │   │   │   │   ├── transform-file.js.map
    │   │   │   │   ├── transform.js
    │   │   │   │   └── transform.js.map
    │   │   │   ├── src/
    │   │   │   │   ├── config/
    │   │   │   │   │   ├── files/
    │   │   │   │   │   │   ├── index-browser.ts
    │   │   │   │   │   │   └── index.ts
    │   │   │   │   │   ├── resolve-targets-browser.ts
    │   │   │   │   │   └── resolve-targets.ts
    │   │   │   │   ├── transform-file-browser.ts
    │   │   │   │   └── transform-file.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── generator/
    │   │   │   ├── lib/
    │   │   │   │   ├── generators/
    │   │   │   │   │   ├── base.js
    │   │   │   │   │   ├── base.js.map
    │   │   │   │   │   ├── classes.js
    │   │   │   │   │   ├── classes.js.map
    │   │   │   │   │   ├── deprecated.js
    │   │   │   │   │   ├── deprecated.js.map
    │   │   │   │   │   ├── expressions.js
    │   │   │   │   │   ├── expressions.js.map
    │   │   │   │   │   ├── flow.js
    │   │   │   │   │   ├── flow.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── index.js.map
    │   │   │   │   │   ├── jsx.js
    │   │   │   │   │   ├── jsx.js.map
    │   │   │   │   │   ├── methods.js
    │   │   │   │   │   ├── methods.js.map
    │   │   │   │   │   ├── modules.js
    │   │   │   │   │   ├── modules.js.map
    │   │   │   │   │   ├── statements.js
    │   │   │   │   │   ├── statements.js.map
    │   │   │   │   │   ├── template-literals.js
    │   │   │   │   │   ├── template-literals.js.map
    │   │   │   │   │   ├── types.js
    │   │   │   │   │   ├── types.js.map
    │   │   │   │   │   ├── typescript.js
    │   │   │   │   │   └── typescript.js.map
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── index.js.map
    │   │   │   │   │   ├── parentheses.js
    │   │   │   │   │   ├── parentheses.js.map
    │   │   │   │   │   ├── whitespace.js
    │   │   │   │   │   └── whitespace.js.map
    │   │   │   │   ├── buffer.js
    │   │   │   │   ├── buffer.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── printer.js
    │   │   │   │   ├── printer.js.map
    │   │   │   │   ├── source-map.js
    │   │   │   │   ├── source-map.js.map
    │   │   │   │   ├── token-map.js
    │   │   │   │   └── token-map.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helper-compilation-targets/
    │   │   │   ├── lib/
    │   │   │   │   ├── debug.js
    │   │   │   │   ├── debug.js.map
    │   │   │   │   ├── filter-items.js
    │   │   │   │   ├── filter-items.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── options.js
    │   │   │   │   ├── options.js.map
    │   │   │   │   ├── pretty.js
    │   │   │   │   ├── pretty.js.map
    │   │   │   │   ├── targets.js
    │   │   │   │   ├── targets.js.map
    │   │   │   │   ├── utils.js
    │   │   │   │   └── utils.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helper-module-imports/
    │   │   │   ├── lib/
    │   │   │   │   ├── import-builder.js
    │   │   │   │   ├── import-builder.js.map
    │   │   │   │   ├── import-injector.js
    │   │   │   │   ├── import-injector.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── is-module.js
    │   │   │   │   └── is-module.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helper-module-transforms/
    │   │   │   ├── lib/
    │   │   │   │   ├── dynamic-import.js
    │   │   │   │   ├── dynamic-import.js.map
    │   │   │   │   ├── get-module-name.js
    │   │   │   │   ├── get-module-name.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── lazy-modules.js
    │   │   │   │   ├── lazy-modules.js.map
    │   │   │   │   ├── normalize-and-load-metadata.js
    │   │   │   │   ├── normalize-and-load-metadata.js.map
    │   │   │   │   ├── rewrite-live-references.js
    │   │   │   │   ├── rewrite-live-references.js.map
    │   │   │   │   ├── rewrite-this.js
    │   │   │   │   └── rewrite-this.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helper-plugin-utils/
    │   │   │   ├── lib/
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helper-string-parser/
    │   │   │   ├── lib/
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helper-validator-identifier/
    │   │   │   ├── lib/
    │   │   │   │   ├── identifier.js
    │   │   │   │   ├── identifier.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── keyword.js
    │   │   │   │   └── keyword.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helper-validator-option/
    │   │   │   ├── lib/
    │   │   │   │   ├── find-suggestion.js
    │   │   │   │   ├── find-suggestion.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── validator.js
    │   │   │   │   └── validator.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── helpers/
    │   │   │   ├── lib/
    │   │   │   │   ├── helpers/
    │   │   │   │   │   ├── applyDecoratedDescriptor.js
    │   │   │   │   │   ├── applyDecoratedDescriptor.js.map
    │   │   │   │   │   ├── applyDecs.js
    │   │   │   │   │   ├── applyDecs.js.map
    │   │   │   │   │   ├── applyDecs2203.js
    │   │   │   │   │   ├── applyDecs2203.js.map
    │   │   │   │   │   ├── applyDecs2203R.js
    │   │   │   │   │   ├── applyDecs2203R.js.map
    │   │   │   │   │   ├── applyDecs2301.js
    │   │   │   │   │   ├── applyDecs2301.js.map
    │   │   │   │   │   ├── applyDecs2305.js
    │   │   │   │   │   ├── applyDecs2305.js.map
    │   │   │   │   │   ├── applyDecs2311.js
    │   │   │   │   │   ├── applyDecs2311.js.map
    │   │   │   │   │   ├── arrayLikeToArray.js
    │   │   │   │   │   ├── arrayLikeToArray.js.map
    │   │   │   │   │   ├── arrayWithHoles.js
    │   │   │   │   │   ├── arrayWithHoles.js.map
    │   │   │   │   │   ├── arrayWithoutHoles.js
    │   │   │   │   │   ├── arrayWithoutHoles.js.map
    │   │   │   │   │   ├── assertClassBrand.js
    │   │   │   │   │   ├── assertClassBrand.js.map
    │   │   │   │   │   ├── assertThisInitialized.js
    │   │   │   │   │   ├── assertThisInitialized.js.map
    │   │   │   │   │   ├── asyncGeneratorDelegate.js
    │   │   │   │   │   ├── asyncGeneratorDelegate.js.map
    │   │   │   │   │   ├── asyncIterator.js
    │   │   │   │   │   ├── asyncIterator.js.map
    │   │   │   │   │   ├── asyncToGenerator.js
    │   │   │   │   │   ├── asyncToGenerator.js.map
    │   │   │   │   │   ├── awaitAsyncGenerator.js
    │   │   │   │   │   ├── awaitAsyncGenerator.js.map
    │   │   │   │   │   ├── AwaitValue.js
    │   │   │   │   │   ├── AwaitValue.js.map
    │   │   │   │   │   ├── callSuper.js
    │   │   │   │   │   ├── callSuper.js.map
    │   │   │   │   │   ├── checkInRHS.js
    │   │   │   │   │   ├── checkInRHS.js.map
    │   │   │   │   │   ├── checkPrivateRedeclaration.js
    │   │   │   │   │   ├── checkPrivateRedeclaration.js.map
    │   │   │   │   │   ├── classApplyDescriptorDestructureSet.js
    │   │   │   │   │   ├── classApplyDescriptorDestructureSet.js.map
    │   │   │   │   │   ├── classApplyDescriptorGet.js
    │   │   │   │   │   ├── classApplyDescriptorGet.js.map
    │   │   │   │   │   ├── classApplyDescriptorSet.js
    │   │   │   │   │   ├── classApplyDescriptorSet.js.map
    │   │   │   │   │   ├── classCallCheck.js
    │   │   │   │   │   ├── classCallCheck.js.map
    │   │   │   │   │   ├── classCheckPrivateStaticAccess.js
    │   │   │   │   │   ├── classCheckPrivateStaticAccess.js.map
    │   │   │   │   │   ├── classCheckPrivateStaticFieldDescriptor.js
    │   │   │   │   │   ├── classCheckPrivateStaticFieldDescriptor.js.map
    │   │   │   │   │   ├── classExtractFieldDescriptor.js
    │   │   │   │   │   ├── classExtractFieldDescriptor.js.map
    │   │   │   │   │   ├── classNameTDZError.js
    │   │   │   │   │   ├── classNameTDZError.js.map
    │   │   │   │   │   ├── classPrivateFieldDestructureSet.js
    │   │   │   │   │   ├── classPrivateFieldDestructureSet.js.map
    │   │   │   │   │   ├── classPrivateFieldGet.js
    │   │   │   │   │   ├── classPrivateFieldGet.js.map
    │   │   │   │   │   ├── classPrivateFieldGet2.js
    │   │   │   │   │   ├── classPrivateFieldGet2.js.map
    │   │   │   │   │   ├── classPrivateFieldInitSpec.js
    │   │   │   │   │   ├── classPrivateFieldInitSpec.js.map
    │   │   │   │   │   ├── classPrivateFieldLooseBase.js
    │   │   │   │   │   ├── classPrivateFieldLooseBase.js.map
    │   │   │   │   │   ├── classPrivateFieldLooseKey.js
    │   │   │   │   │   ├── classPrivateFieldLooseKey.js.map
    │   │   │   │   │   ├── classPrivateFieldSet.js
    │   │   │   │   │   ├── classPrivateFieldSet.js.map
    │   │   │   │   │   ├── classPrivateFieldSet2.js
    │   │   │   │   │   ├── classPrivateFieldSet2.js.map
    │   │   │   │   │   ├── classPrivateGetter.js
    │   │   │   │   │   ├── classPrivateGetter.js.map
    │   │   │   │   │   ├── classPrivateMethodGet.js
    │   │   │   │   │   ├── classPrivateMethodGet.js.map
    │   │   │   │   │   ├── classPrivateMethodInitSpec.js
    │   │   │   │   │   ├── classPrivateMethodInitSpec.js.map
    │   │   │   │   │   ├── classPrivateMethodSet.js
    │   │   │   │   │   ├── classPrivateMethodSet.js.map
    │   │   │   │   │   ├── classPrivateSetter.js
    │   │   │   │   │   ├── classPrivateSetter.js.map
    │   │   │   │   │   ├── classStaticPrivateFieldDestructureSet.js
    │   │   │   │   │   ├── classStaticPrivateFieldDestructureSet.js.map
    │   │   │   │   │   ├── classStaticPrivateFieldSpecGet.js
    │   │   │   │   │   ├── classStaticPrivateFieldSpecGet.js.map
    │   │   │   │   │   ├── classStaticPrivateFieldSpecSet.js
    │   │   │   │   │   ├── classStaticPrivateFieldSpecSet.js.map
    │   │   │   │   │   ├── classStaticPrivateMethodGet.js
    │   │   │   │   │   ├── classStaticPrivateMethodGet.js.map
    │   │   │   │   │   ├── classStaticPrivateMethodSet.js
    │   │   │   │   │   ├── classStaticPrivateMethodSet.js.map
    │   │   │   │   │   ├── construct.js
    │   │   │   │   │   ├── construct.js.map
    │   │   │   │   │   ├── createClass.js
    │   │   │   │   │   ├── createClass.js.map
    │   │   │   │   │   ├── createForOfIteratorHelper.js
    │   │   │   │   │   ├── createForOfIteratorHelper.js.map
    │   │   │   │   │   ├── createForOfIteratorHelperLoose.js
    │   │   │   │   │   ├── createForOfIteratorHelperLoose.js.map
    │   │   │   │   │   ├── createSuper.js
    │   │   │   │   │   ├── createSuper.js.map
    │   │   │   │   │   ├── decorate.js
    │   │   │   │   │   ├── decorate.js.map
    │   │   │   │   │   ├── defaults.js
    │   │   │   │   │   ├── defaults.js.map
    │   │   │   │   │   ├── defineAccessor.js
    │   │   │   │   │   ├── defineAccessor.js.map
    │   │   │   │   │   ├── defineEnumerableProperties.js
    │   │   │   │   │   ├── defineEnumerableProperties.js.map
    │   │   │   │   │   ├── defineProperty.js
    │   │   │   │   │   ├── defineProperty.js.map
    │   │   │   │   │   ├── dispose.js
    │   │   │   │   │   ├── dispose.js.map
    │   │   │   │   │   ├── extends.js
    │   │   │   │   │   ├── extends.js.map
    │   │   │   │   │   ├── get.js
    │   │   │   │   │   ├── get.js.map
    │   │   │   │   │   ├── getPrototypeOf.js
    │   │   │   │   │   ├── getPrototypeOf.js.map
    │   │   │   │   │   ├── identity.js
    │   │   │   │   │   ├── identity.js.map
    │   │   │   │   │   ├── importDeferProxy.js
    │   │   │   │   │   ├── importDeferProxy.js.map
    │   │   │   │   │   ├── inherits.js
    │   │   │   │   │   ├── inherits.js.map
    │   │   │   │   │   ├── inheritsLoose.js
    │   │   │   │   │   ├── inheritsLoose.js.map
    │   │   │   │   │   ├── initializerDefineProperty.js
    │   │   │   │   │   ├── initializerDefineProperty.js.map
    │   │   │   │   │   ├── initializerWarningHelper.js
    │   │   │   │   │   ├── initializerWarningHelper.js.map
    │   │   │   │   │   ├── instanceof.js
    │   │   │   │   │   ├── instanceof.js.map
    │   │   │   │   │   ├── interopRequireDefault.js
    │   │   │   │   │   ├── interopRequireDefault.js.map
    │   │   │   │   │   ├── interopRequireWildcard.js
    │   │   │   │   │   ├── interopRequireWildcard.js.map
    │   │   │   │   │   ├── isNativeFunction.js
    │   │   │   │   │   ├── isNativeFunction.js.map
    │   │   │   │   │   ├── isNativeReflectConstruct.js
    │   │   │   │   │   ├── isNativeReflectConstruct.js.map
    │   │   │   │   │   ├── iterableToArray.js
    │   │   │   │   │   ├── iterableToArray.js.map
    │   │   │   │   │   ├── iterableToArrayLimit.js
    │   │   │   │   │   ├── iterableToArrayLimit.js.map
    │   │   │   │   │   ├── jsx.js
    │   │   │   │   │   ├── jsx.js.map
    │   │   │   │   │   ├── maybeArrayLike.js
    │   │   │   │   │   ├── maybeArrayLike.js.map
    │   │   │   │   │   ├── newArrowCheck.js
    │   │   │   │   │   ├── newArrowCheck.js.map
    │   │   │   │   │   ├── nonIterableRest.js
    │   │   │   │   │   ├── nonIterableRest.js.map
    │   │   │   │   │   ├── nonIterableSpread.js
    │   │   │   │   │   ├── nonIterableSpread.js.map
    │   │   │   │   │   ├── nullishReceiverError.js
    │   │   │   │   │   ├── nullishReceiverError.js.map
    │   │   │   │   │   ├── objectDestructuringEmpty.js
    │   │   │   │   │   ├── objectDestructuringEmpty.js.map
    │   │   │   │   │   ├── objectSpread.js
    │   │   │   │   │   ├── objectSpread.js.map
    │   │   │   │   │   ├── objectSpread2.js
    │   │   │   │   │   ├── objectSpread2.js.map
    │   │   │   │   │   ├── objectWithoutProperties.js
    │   │   │   │   │   ├── objectWithoutProperties.js.map
    │   │   │   │   │   ├── objectWithoutPropertiesLoose.js
    │   │   │   │   │   ├── objectWithoutPropertiesLoose.js.map
    │   │   │   │   │   ├── OverloadYield.js
    │   │   │   │   │   ├── OverloadYield.js.map
    │   │   │   │   │   ├── possibleConstructorReturn.js
    │   │   │   │   │   ├── possibleConstructorReturn.js.map
    │   │   │   │   │   ├── readOnlyError.js
    │   │   │   │   │   ├── readOnlyError.js.map
    │   │   │   │   │   ├── regenerator.js
    │   │   │   │   │   ├── regenerator.js.map
    │   │   │   │   │   ├── regeneratorAsync.js
    │   │   │   │   │   ├── regeneratorAsync.js.map
    │   │   │   │   │   ├── regeneratorAsyncGen.js
    │   │   │   │   │   ├── regeneratorAsyncGen.js.map
    │   │   │   │   │   ├── regeneratorAsyncIterator.js
    │   │   │   │   │   ├── regeneratorAsyncIterator.js.map
    │   │   │   │   │   ├── regeneratorDefine.js
    │   │   │   │   │   ├── regeneratorDefine.js.map
    │   │   │   │   │   ├── regeneratorKeys.js
    │   │   │   │   │   ├── regeneratorKeys.js.map
    │   │   │   │   │   ├── regeneratorRuntime.js
    │   │   │   │   │   ├── regeneratorRuntime.js.map
    │   │   │   │   │   ├── regeneratorValues.js
    │   │   │   │   │   ├── regeneratorValues.js.map
    │   │   │   │   │   ├── set.js
    │   │   │   │   │   ├── set.js.map
    │   │   │   │   │   ├── setFunctionName.js
    │   │   │   │   │   ├── setFunctionName.js.map
    │   │   │   │   │   ├── setPrototypeOf.js
    │   │   │   │   │   ├── setPrototypeOf.js.map
    │   │   │   │   │   ├── skipFirstGeneratorNext.js
    │   │   │   │   │   ├── skipFirstGeneratorNext.js.map
    │   │   │   │   │   ├── slicedToArray.js
    │   │   │   │   │   ├── slicedToArray.js.map
    │   │   │   │   │   ├── superPropBase.js
    │   │   │   │   │   ├── superPropBase.js.map
    │   │   │   │   │   ├── superPropGet.js
    │   │   │   │   │   ├── superPropGet.js.map
    │   │   │   │   │   ├── superPropSet.js
    │   │   │   │   │   ├── superPropSet.js.map
    │   │   │   │   │   ├── taggedTemplateLiteral.js
    │   │   │   │   │   ├── taggedTemplateLiteral.js.map
    │   │   │   │   │   ├── taggedTemplateLiteralLoose.js
    │   │   │   │   │   ├── taggedTemplateLiteralLoose.js.map
    │   │   │   │   │   ├── tdz.js
    │   │   │   │   │   ├── tdz.js.map
    │   │   │   │   │   ├── temporalRef.js
    │   │   │   │   │   ├── temporalRef.js.map
    │   │   │   │   │   ├── temporalUndefined.js
    │   │   │   │   │   ├── temporalUndefined.js.map
    │   │   │   │   │   ├── toArray.js
    │   │   │   │   │   ├── toArray.js.map
    │   │   │   │   │   ├── toConsumableArray.js
    │   │   │   │   │   ├── toConsumableArray.js.map
    │   │   │   │   │   ├── toPrimitive.js
    │   │   │   │   │   ├── toPrimitive.js.map
    │   │   │   │   │   ├── toPropertyKey.js
    │   │   │   │   │   ├── toPropertyKey.js.map
    │   │   │   │   │   ├── toSetter.js
    │   │   │   │   │   ├── toSetter.js.map
    │   │   │   │   │   ├── tsRewriteRelativeImportExtensions.js
    │   │   │   │   │   ├── tsRewriteRelativeImportExtensions.js.map
    │   │   │   │   │   ├── typeof.js
    │   │   │   │   │   ├── typeof.js.map
    │   │   │   │   │   ├── unsupportedIterableToArray.js
    │   │   │   │   │   ├── unsupportedIterableToArray.js.map
    │   │   │   │   │   ├── using.js
    │   │   │   │   │   ├── using.js.map
    │   │   │   │   │   ├── usingCtx.js
    │   │   │   │   │   ├── usingCtx.js.map
    │   │   │   │   │   ├── wrapAsyncGenerator.js
    │   │   │   │   │   ├── wrapAsyncGenerator.js.map
    │   │   │   │   │   ├── wrapNativeSuper.js
    │   │   │   │   │   ├── wrapNativeSuper.js.map
    │   │   │   │   │   ├── wrapRegExp.js
    │   │   │   │   │   ├── wrapRegExp.js.map
    │   │   │   │   │   ├── writeOnlyError.js
    │   │   │   │   │   └── writeOnlyError.js.map
    │   │   │   │   ├── helpers-generated.js
    │   │   │   │   ├── helpers-generated.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── parser/
    │   │   │   ├── bin/
    │   │   │   │   └── babel-parser.js
    │   │   │   ├── lib/
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── typings/
    │   │   │   │   └── babel-parser.d.ts
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── plugin-transform-react-jsx-self/
    │   │   │   ├── lib/
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── plugin-transform-react-jsx-source/
    │   │   │   ├── lib/
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── template/
    │   │   │   ├── lib/
    │   │   │   │   ├── builder.js
    │   │   │   │   ├── builder.js.map
    │   │   │   │   ├── formatters.js
    │   │   │   │   ├── formatters.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── literal.js
    │   │   │   │   ├── literal.js.map
    │   │   │   │   ├── options.js
    │   │   │   │   ├── options.js.map
    │   │   │   │   ├── parse.js
    │   │   │   │   ├── parse.js.map
    │   │   │   │   ├── populate.js
    │   │   │   │   ├── populate.js.map
    │   │   │   │   ├── string.js
    │   │   │   │   └── string.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── traverse/
    │   │   │   ├── lib/
    │   │   │   │   ├── path/
    │   │   │   │   │   ├── inference/
    │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   ├── index.js.map
    │   │   │   │   │   │   ├── inferer-reference.js
    │   │   │   │   │   │   ├── inferer-reference.js.map
    │   │   │   │   │   │   ├── inferers.js
    │   │   │   │   │   │   ├── inferers.js.map
    │   │   │   │   │   │   ├── util.js
    │   │   │   │   │   │   └── util.js.map
    │   │   │   │   │   ├── lib/
    │   │   │   │   │   │   ├── hoister.js
    │   │   │   │   │   │   ├── hoister.js.map
    │   │   │   │   │   │   ├── removal-hooks.js
    │   │   │   │   │   │   ├── removal-hooks.js.map
    │   │   │   │   │   │   ├── virtual-types-validator.js
    │   │   │   │   │   │   ├── virtual-types-validator.js.map
    │   │   │   │   │   │   ├── virtual-types.js
    │   │   │   │   │   │   └── virtual-types.js.map
    │   │   │   │   │   ├── ancestry.js
    │   │   │   │   │   ├── ancestry.js.map
    │   │   │   │   │   ├── comments.js
    │   │   │   │   │   ├── comments.js.map
    │   │   │   │   │   ├── context.js
    │   │   │   │   │   ├── context.js.map
    │   │   │   │   │   ├── conversion.js
    │   │   │   │   │   ├── conversion.js.map
    │   │   │   │   │   ├── evaluation.js
    │   │   │   │   │   ├── evaluation.js.map
    │   │   │   │   │   ├── family.js
    │   │   │   │   │   ├── family.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── index.js.map
    │   │   │   │   │   ├── introspection.js
    │   │   │   │   │   ├── introspection.js.map
    │   │   │   │   │   ├── modification.js
    │   │   │   │   │   ├── modification.js.map
    │   │   │   │   │   ├── removal.js
    │   │   │   │   │   ├── removal.js.map
    │   │   │   │   │   ├── replacement.js
    │   │   │   │   │   └── replacement.js.map
    │   │   │   │   ├── scope/
    │   │   │   │   │   ├── lib/
    │   │   │   │   │   │   ├── renamer.js
    │   │   │   │   │   │   └── renamer.js.map
    │   │   │   │   │   ├── binding.js
    │   │   │   │   │   ├── binding.js.map
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── index.js.map
    │   │   │   │   ├── cache.js
    │   │   │   │   ├── cache.js.map
    │   │   │   │   ├── context.js
    │   │   │   │   ├── context.js.map
    │   │   │   │   ├── hub.js
    │   │   │   │   ├── hub.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── traverse-node.js
    │   │   │   │   ├── traverse-node.js.map
    │   │   │   │   ├── types.js
    │   │   │   │   ├── types.js.map
    │   │   │   │   ├── visitors.js
    │   │   │   │   └── visitors.js.map
    │   │   │   ├── node_modules/
    │   │   │   │   └── globals/
    │   │   │   │       ├── globals.json
    │   │   │   │       ├── index.js
    │   │   │   │       ├── license
    │   │   │   │       ├── package.json
    │   │   │   │       └── readme.md
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── types/
    │   │       ├── lib/
    │   │       │   ├── asserts/
    │   │       │   │   ├── generated/
    │   │       │   │   │   ├── index.js
    │   │       │   │   │   └── index.js.map
    │   │       │   │   ├── assertNode.js
    │   │       │   │   └── assertNode.js.map
    │   │       │   ├── ast-types/
    │   │       │   │   └── generated/
    │   │       │   │       ├── index.js
    │   │       │   │       └── index.js.map
    │   │       │   ├── builders/
    │   │       │   │   ├── flow/
    │   │       │   │   │   ├── createFlowUnionType.js
    │   │       │   │   │   ├── createFlowUnionType.js.map
    │   │       │   │   │   ├── createTypeAnnotationBasedOnTypeof.js
    │   │       │   │   │   └── createTypeAnnotationBasedOnTypeof.js.map
    │   │       │   │   ├── generated/
    │   │       │   │   │   ├── index.js
    │   │       │   │   │   ├── index.js.map
    │   │       │   │   │   ├── lowercase.js
    │   │       │   │   │   ├── lowercase.js.map
    │   │       │   │   │   ├── uppercase.js
    │   │       │   │   │   └── uppercase.js.map
    │   │       │   │   ├── react/
    │   │       │   │   │   ├── buildChildren.js
    │   │       │   │   │   └── buildChildren.js.map
    │   │       │   │   ├── typescript/
    │   │       │   │   │   ├── createTSUnionType.js
    │   │       │   │   │   └── createTSUnionType.js.map
    │   │       │   │   ├── productions.js
    │   │       │   │   ├── productions.js.map
    │   │       │   │   ├── validateNode.js
    │   │       │   │   └── validateNode.js.map
    │   │       │   ├── clone/
    │   │       │   │   ├── clone.js
    │   │       │   │   ├── clone.js.map
    │   │       │   │   ├── cloneDeep.js
    │   │       │   │   ├── cloneDeep.js.map
    │   │       │   │   ├── cloneDeepWithoutLoc.js
    │   │       │   │   ├── cloneDeepWithoutLoc.js.map
    │   │       │   │   ├── cloneNode.js
    │   │       │   │   ├── cloneNode.js.map
    │   │       │   │   ├── cloneWithoutLoc.js
    │   │       │   │   └── cloneWithoutLoc.js.map
    │   │       │   ├── comments/
    │   │       │   │   ├── addComment.js
    │   │       │   │   ├── addComment.js.map
    │   │       │   │   ├── addComments.js
    │   │       │   │   ├── addComments.js.map
    │   │       │   │   ├── inheritInnerComments.js
    │   │       │   │   ├── inheritInnerComments.js.map
    │   │       │   │   ├── inheritLeadingComments.js
    │   │       │   │   ├── inheritLeadingComments.js.map
    │   │       │   │   ├── inheritsComments.js
    │   │       │   │   ├── inheritsComments.js.map
    │   │       │   │   ├── inheritTrailingComments.js
    │   │       │   │   ├── inheritTrailingComments.js.map
    │   │       │   │   ├── removeComments.js
    │   │       │   │   └── removeComments.js.map
    │   │       │   ├── constants/
    │   │       │   │   ├── generated/
    │   │       │   │   │   ├── index.js
    │   │       │   │   │   └── index.js.map
    │   │       │   │   ├── index.js
    │   │       │   │   └── index.js.map
    │   │       │   ├── converters/
    │   │       │   │   ├── ensureBlock.js
    │   │       │   │   ├── ensureBlock.js.map
    │   │       │   │   ├── gatherSequenceExpressions.js
    │   │       │   │   ├── gatherSequenceExpressions.js.map
    │   │       │   │   ├── toBindingIdentifierName.js
    │   │       │   │   ├── toBindingIdentifierName.js.map
    │   │       │   │   ├── toBlock.js
    │   │       │   │   ├── toBlock.js.map
    │   │       │   │   ├── toComputedKey.js
    │   │       │   │   ├── toComputedKey.js.map
    │   │       │   │   ├── toExpression.js
    │   │       │   │   ├── toExpression.js.map
    │   │       │   │   ├── toIdentifier.js
    │   │       │   │   ├── toIdentifier.js.map
    │   │       │   │   ├── toKeyAlias.js
    │   │       │   │   ├── toKeyAlias.js.map
    │   │       │   │   ├── toSequenceExpression.js
    │   │       │   │   ├── toSequenceExpression.js.map
    │   │       │   │   ├── toStatement.js
    │   │       │   │   ├── toStatement.js.map
    │   │       │   │   ├── valueToNode.js
    │   │       │   │   └── valueToNode.js.map
    │   │       │   ├── definitions/
    │   │       │   │   ├── core.js
    │   │       │   │   ├── core.js.map
    │   │       │   │   ├── deprecated-aliases.js
    │   │       │   │   ├── deprecated-aliases.js.map
    │   │       │   │   ├── experimental.js
    │   │       │   │   ├── experimental.js.map
    │   │       │   │   ├── flow.js
    │   │       │   │   ├── flow.js.map
    │   │       │   │   ├── index.js
    │   │       │   │   ├── index.js.map
    │   │       │   │   ├── jsx.js
    │   │       │   │   ├── jsx.js.map
    │   │       │   │   ├── misc.js
    │   │       │   │   ├── misc.js.map
    │   │       │   │   ├── placeholders.js
    │   │       │   │   ├── placeholders.js.map
    │   │       │   │   ├── typescript.js
    │   │       │   │   ├── typescript.js.map
    │   │       │   │   ├── utils.js
    │   │       │   │   └── utils.js.map
    │   │       │   ├── modifications/
    │   │       │   │   ├── flow/
    │   │       │   │   │   ├── removeTypeDuplicates.js
    │   │       │   │   │   └── removeTypeDuplicates.js.map
    │   │       │   │   ├── typescript/
    │   │       │   │   │   ├── removeTypeDuplicates.js
    │   │       │   │   │   └── removeTypeDuplicates.js.map
    │   │       │   │   ├── appendToMemberExpression.js
    │   │       │   │   ├── appendToMemberExpression.js.map
    │   │       │   │   ├── inherits.js
    │   │       │   │   ├── inherits.js.map
    │   │       │   │   ├── prependToMemberExpression.js
    │   │       │   │   ├── prependToMemberExpression.js.map
    │   │       │   │   ├── removeProperties.js
    │   │       │   │   ├── removeProperties.js.map
    │   │       │   │   ├── removePropertiesDeep.js
    │   │       │   │   └── removePropertiesDeep.js.map
    │   │       │   ├── retrievers/
    │   │       │   │   ├── getAssignmentIdentifiers.js
    │   │       │   │   ├── getAssignmentIdentifiers.js.map
    │   │       │   │   ├── getBindingIdentifiers.js
    │   │       │   │   ├── getBindingIdentifiers.js.map
    │   │       │   │   ├── getFunctionName.js
    │   │       │   │   ├── getFunctionName.js.map
    │   │       │   │   ├── getOuterBindingIdentifiers.js
    │   │       │   │   └── getOuterBindingIdentifiers.js.map
    │   │       │   ├── traverse/
    │   │       │   │   ├── traverse.js
    │   │       │   │   ├── traverse.js.map
    │   │       │   │   ├── traverseFast.js
    │   │       │   │   └── traverseFast.js.map
    │   │       │   ├── utils/
    │   │       │   │   ├── react/
    │   │       │   │   │   ├── cleanJSXElementLiteralChild.js
    │   │       │   │   │   └── cleanJSXElementLiteralChild.js.map
    │   │       │   │   ├── deprecationWarning.js
    │   │       │   │   ├── deprecationWarning.js.map
    │   │       │   │   ├── inherit.js
    │   │       │   │   ├── inherit.js.map
    │   │       │   │   ├── shallowEqual.js
    │   │       │   │   └── shallowEqual.js.map
    │   │       │   ├── validators/
    │   │       │   │   ├── generated/
    │   │       │   │   │   ├── index.js
    │   │       │   │   │   └── index.js.map
    │   │       │   │   ├── react/
    │   │       │   │   │   ├── isCompatTag.js
    │   │       │   │   │   ├── isCompatTag.js.map
    │   │       │   │   │   ├── isReactComponent.js
    │   │       │   │   │   └── isReactComponent.js.map
    │   │       │   │   ├── buildMatchMemberExpression.js
    │   │       │   │   ├── buildMatchMemberExpression.js.map
    │   │       │   │   ├── is.js
    │   │       │   │   ├── is.js.map
    │   │       │   │   ├── isBinding.js
    │   │       │   │   ├── isBinding.js.map
    │   │       │   │   ├── isBlockScoped.js
    │   │       │   │   ├── isBlockScoped.js.map
    │   │       │   │   ├── isImmutable.js
    │   │       │   │   ├── isImmutable.js.map
    │   │       │   │   ├── isLet.js
    │   │       │   │   ├── isLet.js.map
    │   │       │   │   ├── isNode.js
    │   │       │   │   ├── isNode.js.map
    │   │       │   │   ├── isNodesEquivalent.js
    │   │       │   │   ├── isNodesEquivalent.js.map
    │   │       │   │   ├── isPlaceholderType.js
    │   │       │   │   ├── isPlaceholderType.js.map
    │   │       │   │   ├── isReferenced.js
    │   │       │   │   ├── isReferenced.js.map
    │   │       │   │   ├── isScope.js
    │   │       │   │   ├── isScope.js.map
    │   │       │   │   ├── isSpecifierDefault.js
    │   │       │   │   ├── isSpecifierDefault.js.map
    │   │       │   │   ├── isType.js
    │   │       │   │   ├── isType.js.map
    │   │       │   │   ├── isValidES3Identifier.js
    │   │       │   │   ├── isValidES3Identifier.js.map
    │   │       │   │   ├── isValidIdentifier.js
    │   │       │   │   ├── isValidIdentifier.js.map
    │   │       │   │   ├── isVar.js
    │   │       │   │   ├── isVar.js.map
    │   │       │   │   ├── matchesPattern.js
    │   │       │   │   ├── matchesPattern.js.map
    │   │       │   │   ├── validate.js
    │   │       │   │   └── validate.js.map
    │   │       │   ├── index-legacy.d.ts
    │   │       │   ├── index.d.ts
    │   │       │   ├── index.js
    │   │       │   ├── index.js.flow
    │   │       │   └── index.js.map
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @esbuild/
    │   │   └── win32-x64/
    │   │       ├── esbuild.exe
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @eslint/
    │   │   ├── config-array/
    │   │   │   ├── dist/
    │   │   │   │   ├── cjs/
    │   │   │   │   │   ├── std__path/
    │   │   │   │   │   │   ├── posix.cjs
    │   │   │   │   │   │   └── windows.cjs
    │   │   │   │   │   ├── index.cjs
    │   │   │   │   │   ├── index.d.cts
    │   │   │   │   │   └── types.ts
    │   │   │   │   └── esm/
    │   │   │   │       ├── std__path/
    │   │   │   │       │   ├── posix.js
    │   │   │   │       │   └── windows.js
    │   │   │   │       ├── index.d.ts
    │   │   │   │       ├── index.js
    │   │   │   │       ├── types.d.ts
    │   │   │   │       └── types.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── config-helpers/
    │   │   │   ├── dist/
    │   │   │   │   ├── cjs/
    │   │   │   │   │   ├── index.cjs
    │   │   │   │   │   ├── index.d.cts
    │   │   │   │   │   └── types.cts
    │   │   │   │   └── esm/
    │   │   │   │       ├── index.d.ts
    │   │   │   │       ├── index.js
    │   │   │   │       ├── types.d.ts
    │   │   │   │       └── types.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── core/
    │   │   │   ├── dist/
    │   │   │   │   ├── cjs/
    │   │   │   │   │   └── types.d.cts
    │   │   │   │   └── esm/
    │   │   │   │       └── types.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── eslintrc/
    │   │   │   ├── conf/
    │   │   │   │   ├── config-schema.js
    │   │   │   │   └── environments.js
    │   │   │   ├── dist/
    │   │   │   │   ├── eslintrc-universal.cjs
    │   │   │   │   ├── eslintrc-universal.cjs.map
    │   │   │   │   ├── eslintrc.cjs
    │   │   │   │   ├── eslintrc.cjs.map
    │   │   │   │   └── eslintrc.d.cts
    │   │   │   ├── lib/
    │   │   │   │   ├── config-array/
    │   │   │   │   │   ├── config-array.js
    │   │   │   │   │   ├── config-dependency.js
    │   │   │   │   │   ├── extracted-config.js
    │   │   │   │   │   ├── ignore-pattern.js
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── override-tester.js
    │   │   │   │   ├── shared/
    │   │   │   │   │   ├── ajv.js
    │   │   │   │   │   ├── config-ops.js
    │   │   │   │   │   ├── config-validator.js
    │   │   │   │   │   ├── deep-merge-arrays.js
    │   │   │   │   │   ├── deprecation-warnings.js
    │   │   │   │   │   ├── naming.js
    │   │   │   │   │   ├── relative-module-resolver.js
    │   │   │   │   │   └── types.js
    │   │   │   │   ├── types/
    │   │   │   │   │   └── index.d.ts
    │   │   │   │   ├── cascading-config-array-factory.js
    │   │   │   │   ├── config-array-factory.js
    │   │   │   │   ├── flat-compat.js
    │   │   │   │   ├── index-universal.js
    │   │   │   │   └── index.js
    │   │   │   ├── node_modules/
    │   │   │   │   └── globals/
    │   │   │   │       ├── globals.json
    │   │   │   │       ├── index.d.ts
    │   │   │   │       ├── index.js
    │   │   │   │       ├── license
    │   │   │   │       ├── package.json
    │   │   │   │       └── readme.md
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   ├── README.md
    │   │   │   └── universal.js
    │   │   ├── js/
    │   │   │   ├── src/
    │   │   │   │   ├── configs/
    │   │   │   │   │   ├── eslint-all.js
    │   │   │   │   │   └── eslint-recommended.js
    │   │   │   │   └── index.js
    │   │   │   ├── types/
    │   │   │   │   └── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── object-schema/
    │   │   │   ├── dist/
    │   │   │   │   ├── cjs/
    │   │   │   │   │   ├── index.cjs
    │   │   │   │   │   ├── index.d.cts
    │   │   │   │   │   └── types.ts
    │   │   │   │   └── esm/
    │   │   │   │       ├── index.d.ts
    │   │   │   │       ├── index.js
    │   │   │   │       ├── types.d.ts
    │   │   │   │       └── types.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── plugin-kit/
    │   │       ├── dist/
    │   │       │   ├── cjs/
    │   │       │   │   ├── index.cjs
    │   │       │   │   ├── index.d.cts
    │   │       │   │   └── types.cts
    │   │       │   └── esm/
    │   │       │       ├── index.d.ts
    │   │       │       ├── index.js
    │   │       │       ├── types.d.ts
    │   │       │       └── types.ts
    │   │       ├── node_modules/
    │   │       │   └── @eslint/
    │   │       │       └── core/
    │   │       │           ├── dist/
    │   │       │           │   ├── cjs/
    │   │       │           │   │   └── types.d.cts
    │   │       │           │   └── esm/
    │   │       │           │       └── types.d.ts
    │   │       │           ├── LICENSE
    │   │       │           ├── package.json
    │   │       │           └── README.md
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @eslint-community/
    │   │   ├── eslint-utils/
    │   │   │   ├── node_modules/
    │   │   │   │   └── eslint-visitor-keys/
    │   │   │   │       ├── dist/
    │   │   │   │       │   ├── eslint-visitor-keys.cjs
    │   │   │   │       │   ├── eslint-visitor-keys.d.cts
    │   │   │   │       │   ├── index.d.ts
    │   │   │   │       │   └── visitor-keys.d.ts
    │   │   │   │       ├── lib/
    │   │   │   │       │   ├── index.js
    │   │   │   │       │   └── visitor-keys.js
    │   │   │   │       ├── LICENSE
    │   │   │   │       ├── package.json
    │   │   │   │       └── README.md
    │   │   │   ├── index.d.mts
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── index.mjs
    │   │   │   ├── index.mjs.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── regexpp/
    │   │       ├── index.d.ts
    │   │       ├── index.js
    │   │       ├── index.js.map
    │   │       ├── index.mjs
    │   │       ├── index.mjs.map
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @hookform/
    │   │   └── resolvers/
    │   │       ├── ajv/
    │   │       │   ├── dist/
    │   │       │   │   ├── ajv.d.ts
    │   │       │   │   ├── ajv.js
    │   │       │   │   ├── ajv.js.map
    │   │       │   │   ├── ajv.mjs
    │   │       │   │   ├── ajv.modern.mjs
    │   │       │   │   ├── ajv.modern.mjs.map
    │   │       │   │   ├── ajv.module.js
    │   │       │   │   ├── ajv.module.js.map
    │   │       │   │   ├── ajv.umd.js
    │   │       │   │   ├── ajv.umd.js.map
    │   │       │   │   ├── index.d.ts
    │   │       │   │   └── types.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   ├── data-errors.ts
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   ├── ajv-errors.ts.snap
    │   │       │   │   │   │   └── ajv.ts.snap
    │   │       │   │   │   ├── ajv-errors.ts
    │   │       │   │   │   ├── ajv.ts
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   └── Form.tsx
    │   │       │   │   ├── ajv.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── types.ts
    │   │       │   └── package.json
    │   │       ├── arktype/
    │   │       │   ├── dist/
    │   │       │   │   ├── arktype.d.ts
    │   │       │   │   ├── arktype.js
    │   │       │   │   ├── arktype.js.map
    │   │       │   │   ├── arktype.mjs
    │   │       │   │   ├── arktype.modern.mjs
    │   │       │   │   ├── arktype.modern.mjs.map
    │   │       │   │   ├── arktype.module.js
    │   │       │   │   ├── arktype.module.js.map
    │   │       │   │   ├── arktype.umd.js
    │   │       │   │   ├── arktype.umd.js.map
    │   │       │   │   └── index.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── arktype.ts.snap
    │   │       │   │   │   ├── arktype.ts
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   └── Form.tsx
    │   │       │   │   ├── arktype.ts
    │   │       │   │   └── index.ts
    │   │       │   └── package.json
    │   │       ├── class-validator/
    │   │       │   ├── dist/
    │   │       │   │   ├── class-validator.d.ts
    │   │       │   │   ├── class-validator.js
    │   │       │   │   ├── class-validator.js.map
    │   │       │   │   ├── class-validator.mjs
    │   │       │   │   ├── class-validator.modern.mjs
    │   │       │   │   ├── class-validator.modern.mjs.map
    │   │       │   │   ├── class-validator.module.js
    │   │       │   │   ├── class-validator.module.js.map
    │   │       │   │   ├── class-validator.umd.js
    │   │       │   │   ├── class-validator.umd.js.map
    │   │       │   │   └── index.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── class-validator.ts.snap
    │   │       │   │   │   ├── class-validator.ts
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   └── Form.tsx
    │   │       │   │   ├── class-validator.ts
    │   │       │   │   └── index.ts
    │   │       │   └── package.json
    │   │       ├── computed-types/
    │   │       │   ├── dist/
    │   │       │   │   ├── computed-types.d.ts
    │   │       │   │   ├── computed-types.js
    │   │       │   │   ├── computed-types.js.map
    │   │       │   │   ├── computed-types.mjs
    │   │       │   │   ├── computed-types.modern.mjs
    │   │       │   │   ├── computed-types.modern.mjs.map
    │   │       │   │   ├── computed-types.module.js
    │   │       │   │   ├── computed-types.module.js.map
    │   │       │   │   ├── computed-types.umd.js
    │   │       │   │   ├── computed-types.umd.js.map
    │   │       │   │   └── index.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── computed-types.ts.snap
    │   │       │   │   │   ├── computed-types.ts
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   └── Form.tsx
    │   │       │   │   ├── computed-types.ts
    │   │       │   │   └── index.ts
    │   │       │   └── package.json
    │   │       ├── dist/
    │   │       │   ├── index.d.ts
    │   │       │   ├── resolvers.js
    │   │       │   ├── resolvers.js.map
    │   │       │   ├── resolvers.mjs
    │   │       │   ├── resolvers.mjs.map
    │   │       │   ├── resolvers.module.js
    │   │       │   ├── resolvers.module.js.map
    │   │       │   ├── resolvers.umd.js
    │   │       │   ├── resolvers.umd.js.map
    │   │       │   ├── toNestErrors.d.ts
    │   │       │   └── validateFieldsNatively.d.ts
    │   │       ├── effect-ts/
    │   │       │   ├── dist/
    │   │       │   │   ├── effect-ts.d.ts
    │   │       │   │   ├── effect-ts.js
    │   │       │   │   ├── effect-ts.js.map
    │   │       │   │   ├── effect-ts.mjs
    │   │       │   │   ├── effect-ts.modern.mjs
    │   │       │   │   ├── effect-ts.modern.mjs.map
    │   │       │   │   ├── effect-ts.module.js
    │   │       │   │   ├── effect-ts.module.js.map
    │   │       │   │   ├── effect-ts.umd.js
    │   │       │   │   ├── effect-ts.umd.js.map
    │   │       │   │   └── index.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── effect-ts.ts.snap
    │   │       │   │   │   ├── effect-ts.ts
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   └── Form.tsx
    │   │       │   │   ├── effect-ts.ts
    │   │       │   │   └── index.ts
    │   │       │   └── package.json
    │   │       ├── fluentvalidation-ts/
    │   │       │   ├── dist/
    │   │       │   │   ├── fluentvalidation-ts.d.ts
    │   │       │   │   ├── fluentvalidation-ts.js
    │   │       │   │   ├── fluentvalidation-ts.js.map
    │   │       │   │   ├── fluentvalidation-ts.mjs
    │   │       │   │   ├── fluentvalidation-ts.modern.mjs
    │   │       │   │   ├── fluentvalidation-ts.modern.mjs.map
    │   │       │   │   ├── fluentvalidation-ts.module.js
    │   │       │   │   ├── fluentvalidation-ts.module.js.map
    │   │       │   │   ├── fluentvalidation-ts.umd.js
    │   │       │   │   ├── fluentvalidation-ts.umd.js.map
    │   │       │   │   └── index.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── fluentvalidation-ts.ts.snap
    │   │       │   │   │   ├── fluentvalidation-ts.ts
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   └── Form.tsx
    │   │       │   │   ├── fluentvalidation-ts.ts
    │   │       │   │   └── index.ts
    │   │       │   └── package.json
    │   │       ├── io-ts/
    │   │       │   ├── dist/
    │   │       │   │   ├── arrayToPath.d.ts
    │   │       │   │   ├── errorsToRecord.d.ts
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── io-ts.d.ts
    │   │       │   │   ├── io-ts.js
    │   │       │   │   ├── io-ts.js.map
    │   │       │   │   ├── io-ts.mjs
    │   │       │   │   ├── io-ts.modern.mjs
    │   │       │   │   ├── io-ts.modern.mjs.map
    │   │       │   │   ├── io-ts.module.js
    │   │       │   │   ├── io-ts.module.js.map
    │   │       │   │   ├── io-ts.umd.js
    │   │       │   │   └── io-ts.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── io-ts.ts.snap
    │   │       │   │   │   ├── errorsToRecord.ts
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── io-ts.ts
    │   │       │   │   ├── arrayToPath.ts
    │   │       │   │   ├── errorsToRecord.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── io-ts.ts
    │   │       │   └── package.json
    │   │       ├── joi/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── joi.d.ts
    │   │       │   │   ├── joi.js
    │   │       │   │   ├── joi.js.map
    │   │       │   │   ├── joi.mjs
    │   │       │   │   ├── joi.modern.mjs
    │   │       │   │   ├── joi.modern.mjs.map
    │   │       │   │   ├── joi.module.js
    │   │       │   │   ├── joi.module.js.map
    │   │       │   │   ├── joi.umd.js
    │   │       │   │   ├── joi.umd.js.map
    │   │       │   │   └── types.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── joi.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── joi.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── joi.ts
    │   │       │   │   └── types.ts
    │   │       │   └── package.json
    │   │       ├── nope/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── nope.d.ts
    │   │       │   │   ├── nope.js
    │   │       │   │   ├── nope.js.map
    │   │       │   │   ├── nope.mjs
    │   │       │   │   ├── nope.modern.mjs
    │   │       │   │   ├── nope.modern.mjs.map
    │   │       │   │   ├── nope.module.js
    │   │       │   │   ├── nope.module.js.map
    │   │       │   │   ├── nope.umd.js
    │   │       │   │   ├── nope.umd.js.map
    │   │       │   │   └── types.d.ts
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── nope.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── nope.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── nope.ts
    │   │       │   │   └── types.ts
    │   │       │   └── package.json
    │   │       ├── standard-schema/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── standard-schema.d.ts
    │   │       │   │   ├── standard-schema.js
    │   │       │   │   ├── standard-schema.js.map
    │   │       │   │   ├── standard-schema.mjs
    │   │       │   │   ├── standard-schema.modern.mjs
    │   │       │   │   ├── standard-schema.modern.mjs.map
    │   │       │   │   ├── standard-schema.module.js
    │   │       │   │   ├── standard-schema.module.js.map
    │   │       │   │   ├── standard-schema.umd.js
    │   │       │   │   └── standard-schema.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── standard-schema.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── standard-schema.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── standard-schema.ts
    │   │       │   └── package.json
    │   │       ├── superstruct/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── superstruct.d.ts
    │   │       │   │   ├── superstruct.js
    │   │       │   │   ├── superstruct.js.map
    │   │       │   │   ├── superstruct.mjs
    │   │       │   │   ├── superstruct.modern.mjs
    │   │       │   │   ├── superstruct.modern.mjs.map
    │   │       │   │   ├── superstruct.module.js
    │   │       │   │   ├── superstruct.module.js.map
    │   │       │   │   ├── superstruct.umd.js
    │   │       │   │   └── superstruct.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── superstruct.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── superstruct.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── superstruct.ts
    │   │       │   └── package.json
    │   │       ├── typanion/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── typanion.d.ts
    │   │       │   │   ├── typanion.js
    │   │       │   │   ├── typanion.js.map
    │   │       │   │   ├── typanion.mjs
    │   │       │   │   ├── typanion.modern.mjs
    │   │       │   │   ├── typanion.modern.mjs.map
    │   │       │   │   ├── typanion.module.js
    │   │       │   │   ├── typanion.module.js.map
    │   │       │   │   ├── typanion.umd.js
    │   │       │   │   └── typanion.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── typanion.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── typanion.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── typanion.ts
    │   │       │   └── package.json
    │   │       ├── typebox/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── typebox.d.ts
    │   │       │   │   ├── typebox.js
    │   │       │   │   ├── typebox.js.map
    │   │       │   │   ├── typebox.mjs
    │   │       │   │   ├── typebox.modern.mjs
    │   │       │   │   ├── typebox.modern.mjs.map
    │   │       │   │   ├── typebox.module.js
    │   │       │   │   ├── typebox.module.js.map
    │   │       │   │   ├── typebox.umd.js
    │   │       │   │   └── typebox.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   ├── typebox-compiler.ts.snap
    │   │       │   │   │   │   └── typebox.ts.snap
    │   │       │   │   │   ├── Form-compiler.tsx
    │   │       │   │   │   ├── Form-native-validation-compiler.tsx
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   ├── typebox-compiler.ts
    │   │       │   │   │   └── typebox.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── typebox.ts
    │   │       │   └── package.json
    │   │       ├── typeschema/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── typeschema.d.ts
    │   │       │   │   ├── typeschema.js
    │   │       │   │   ├── typeschema.js.map
    │   │       │   │   ├── typeschema.mjs
    │   │       │   │   ├── typeschema.modern.mjs
    │   │       │   │   ├── typeschema.modern.mjs.map
    │   │       │   │   ├── typeschema.module.js
    │   │       │   │   ├── typeschema.module.js.map
    │   │       │   │   ├── typeschema.umd.js
    │   │       │   │   └── typeschema.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── typeschema.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── typeschema.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── typeschema.ts
    │   │       │   └── package.json
    │   │       ├── valibot/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── valibot.d.ts
    │   │       │   │   ├── valibot.js
    │   │       │   │   ├── valibot.js.map
    │   │       │   │   ├── valibot.mjs
    │   │       │   │   ├── valibot.modern.mjs
    │   │       │   │   ├── valibot.modern.mjs.map
    │   │       │   │   ├── valibot.module.js
    │   │       │   │   ├── valibot.module.js.map
    │   │       │   │   ├── valibot.umd.js
    │   │       │   │   └── valibot.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── valibot.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── valibot.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── valibot.ts
    │   │       │   └── package.json
    │   │       ├── vest/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── types.d.ts
    │   │       │   │   ├── vest.d.ts
    │   │       │   │   ├── vest.js
    │   │       │   │   ├── vest.js.map
    │   │       │   │   ├── vest.mjs
    │   │       │   │   ├── vest.modern.mjs
    │   │       │   │   ├── vest.modern.mjs.map
    │   │       │   │   ├── vest.module.js
    │   │       │   │   ├── vest.module.js.map
    │   │       │   │   ├── vest.umd.js
    │   │       │   │   └── vest.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── vest.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── vest.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── types.ts
    │   │       │   │   └── vest.ts
    │   │       │   └── package.json
    │   │       ├── vine/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── vine.d.ts
    │   │       │   │   ├── vine.js
    │   │       │   │   ├── vine.js.map
    │   │       │   │   ├── vine.mjs
    │   │       │   │   ├── vine.modern.mjs
    │   │       │   │   ├── vine.modern.mjs.map
    │   │       │   │   ├── vine.module.js
    │   │       │   │   ├── vine.module.js.map
    │   │       │   │   ├── vine.umd.js
    │   │       │   │   └── vine.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── vine.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── vine.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── vine.ts
    │   │       │   └── package.json
    │   │       ├── yup/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── yup.d.ts
    │   │       │   │   ├── yup.js
    │   │       │   │   ├── yup.js.map
    │   │       │   │   ├── yup.mjs
    │   │       │   │   ├── yup.modern.mjs
    │   │       │   │   ├── yup.modern.mjs.map
    │   │       │   │   ├── yup.module.js
    │   │       │   │   ├── yup.module.js.map
    │   │       │   │   ├── yup.umd.js
    │   │       │   │   └── yup.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   └── data.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── yup.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   └── yup.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── yup.ts
    │   │       │   └── package.json
    │   │       ├── zod/
    │   │       │   ├── dist/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── zod.d.ts
    │   │       │   │   ├── zod.js
    │   │       │   │   ├── zod.js.map
    │   │       │   │   ├── zod.mjs
    │   │       │   │   ├── zod.modern.mjs
    │   │       │   │   ├── zod.modern.mjs.map
    │   │       │   │   ├── zod.module.js
    │   │       │   │   ├── zod.module.js.map
    │   │       │   │   ├── zod.umd.js
    │   │       │   │   └── zod.umd.js.map
    │   │       │   ├── src/
    │   │       │   │   ├── __tests__/
    │   │       │   │   │   ├── __fixtures__/
    │   │       │   │   │   │   ├── data-v3.ts
    │   │       │   │   │   │   ├── data-v4-mini.ts
    │   │       │   │   │   │   └── data-v4.ts
    │   │       │   │   │   ├── __snapshots__/
    │   │       │   │   │   │   └── zod.ts.snap
    │   │       │   │   │   ├── Form-native-validation.tsx
    │   │       │   │   │   ├── Form.tsx
    │   │       │   │   │   ├── zod-v3.ts
    │   │       │   │   │   ├── zod-v4-mini.ts
    │   │       │   │   │   └── zod-v4.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── zod.ts
    │   │       │   └── package.json
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @humanfs/
    │   │   ├── core/
    │   │   │   ├── dist/
    │   │   │   │   ├── errors.d.ts
    │   │   │   │   ├── fsx.d.ts
    │   │   │   │   ├── hfs.d.ts
    │   │   │   │   ├── index.d.ts
    │   │   │   │   └── path.d.ts
    │   │   │   ├── src/
    │   │   │   │   ├── errors.js
    │   │   │   │   ├── hfs.js
    │   │   │   │   ├── index.js
    │   │   │   │   └── path.js
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── node/
    │   │       ├── dist/
    │   │       │   ├── index.d.ts
    │   │       │   ├── node-fsx.d.ts
    │   │       │   └── node-hfs.d.ts
    │   │       ├── node_modules/
    │   │       │   └── @humanwhocodes/
    │   │       │       └── retry/
    │   │       │           ├── dist/
    │   │       │           │   ├── retrier.cjs
    │   │       │           │   ├── retrier.d.cts
    │   │       │           │   ├── retrier.d.ts
    │   │       │           │   ├── retrier.js
    │   │       │           │   ├── retrier.min.js
    │   │       │           │   └── retrier.mjs
    │   │       │           ├── LICENSE
    │   │       │           ├── package.json
    │   │       │           └── README.md
    │   │       ├── src/
    │   │       │   ├── index.js
    │   │       │   └── node-hfs.js
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @humanwhocodes/
    │   │   ├── module-importer/
    │   │   │   ├── dist/
    │   │   │   │   ├── module-importer.cjs
    │   │   │   │   ├── module-importer.d.cts
    │   │   │   │   ├── module-importer.d.ts
    │   │   │   │   └── module-importer.js
    │   │   │   ├── src/
    │   │   │   │   ├── module-importer.cjs
    │   │   │   │   └── module-importer.js
    │   │   │   ├── CHANGELOG.md
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── retry/
    │   │       ├── dist/
    │   │       │   ├── retrier.cjs
    │   │       │   ├── retrier.d.cts
    │   │       │   ├── retrier.d.ts
    │   │       │   ├── retrier.js
    │   │       │   ├── retrier.min.js
    │   │       │   └── retrier.mjs
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @isaacs/
    │   │   └── cliui/
    │   │       ├── build/
    │   │       │   ├── lib/
    │   │       │   │   └── index.js
    │   │       │   ├── index.cjs
    │   │       │   └── index.d.cts
    │   │       ├── index.mjs
    │   │       ├── LICENSE.txt
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @jridgewell/
    │   │   ├── gen-mapping/
    │   │   │   ├── dist/
    │   │   │   │   ├── types/
    │   │   │   │   │   ├── gen-mapping.d.ts
    │   │   │   │   │   ├── sourcemap-segment.d.ts
    │   │   │   │   │   └── types.d.ts
    │   │   │   │   ├── gen-mapping.mjs
    │   │   │   │   ├── gen-mapping.mjs.map
    │   │   │   │   ├── gen-mapping.umd.js
    │   │   │   │   └── gen-mapping.umd.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── resolve-uri/
    │   │   │   ├── dist/
    │   │   │   │   ├── types/
    │   │   │   │   │   └── resolve-uri.d.ts
    │   │   │   │   ├── resolve-uri.mjs
    │   │   │   │   ├── resolve-uri.mjs.map
    │   │   │   │   ├── resolve-uri.umd.js
    │   │   │   │   └── resolve-uri.umd.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── set-array/
    │   │   │   ├── dist/
    │   │   │   │   ├── types/
    │   │   │   │   │   └── set-array.d.ts
    │   │   │   │   ├── set-array.mjs
    │   │   │   │   ├── set-array.mjs.map
    │   │   │   │   ├── set-array.umd.js
    │   │   │   │   └── set-array.umd.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── sourcemap-codec/
    │   │   │   ├── dist/
    │   │   │   │   ├── types/
    │   │   │   │   │   ├── scopes.d.ts
    │   │   │   │   │   ├── sourcemap-codec.d.ts
    │   │   │   │   │   ├── strings.d.ts
    │   │   │   │   │   └── vlq.d.ts
    │   │   │   │   ├── sourcemap-codec.mjs
    │   │   │   │   ├── sourcemap-codec.mjs.map
    │   │   │   │   ├── sourcemap-codec.umd.js
    │   │   │   │   └── sourcemap-codec.umd.js.map
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── trace-mapping/
    │   │       ├── dist/
    │   │       │   ├── types/
    │   │       │   │   ├── any-map.d.ts
    │   │       │   │   ├── binary-search.d.ts
    │   │       │   │   ├── by-source.d.ts
    │   │       │   │   ├── resolve.d.ts
    │   │       │   │   ├── sort.d.ts
    │   │       │   │   ├── sourcemap-segment.d.ts
    │   │       │   │   ├── strip-filename.d.ts
    │   │       │   │   ├── trace-mapping.d.ts
    │   │       │   │   └── types.d.ts
    │   │       │   ├── trace-mapping.mjs
    │   │       │   ├── trace-mapping.mjs.map
    │   │       │   ├── trace-mapping.umd.js
    │   │       │   └── trace-mapping.umd.js.map
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @nodelib/
    │   │   ├── fs.scandir/
    │   │   │   ├── out/
    │   │   │   │   ├── adapters/
    │   │   │   │   │   ├── fs.d.ts
    │   │   │   │   │   └── fs.js
    │   │   │   │   ├── providers/
    │   │   │   │   │   ├── async.d.ts
    │   │   │   │   │   ├── async.js
    │   │   │   │   │   ├── common.d.ts
    │   │   │   │   │   ├── common.js
    │   │   │   │   │   ├── sync.d.ts
    │   │   │   │   │   └── sync.js
    │   │   │   │   ├── types/
    │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── utils/
    │   │   │   │   │   ├── fs.d.ts
    │   │   │   │   │   ├── fs.js
    │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── constants.d.ts
    │   │   │   │   ├── constants.js
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── settings.d.ts
    │   │   │   │   └── settings.js
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── fs.stat/
    │   │   │   ├── out/
    │   │   │   │   ├── adapters/
    │   │   │   │   │   ├── fs.d.ts
    │   │   │   │   │   └── fs.js
    │   │   │   │   ├── providers/
    │   │   │   │   │   ├── async.d.ts
    │   │   │   │   │   ├── async.js
    │   │   │   │   │   ├── sync.d.ts
    │   │   │   │   │   └── sync.js
    │   │   │   │   ├── types/
    │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── settings.d.ts
    │   │   │   │   └── settings.js
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── fs.walk/
    │   │       ├── out/
    │   │       │   ├── providers/
    │   │       │   │   ├── async.d.ts
    │   │       │   │   ├── async.js
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── index.js
    │   │       │   │   ├── stream.d.ts
    │   │       │   │   ├── stream.js
    │   │       │   │   ├── sync.d.ts
    │   │       │   │   └── sync.js
    │   │       │   ├── readers/
    │   │       │   │   ├── async.d.ts
    │   │       │   │   ├── async.js
    │   │       │   │   ├── common.d.ts
    │   │       │   │   ├── common.js
    │   │       │   │   ├── reader.d.ts
    │   │       │   │   ├── reader.js
    │   │       │   │   ├── sync.d.ts
    │   │       │   │   └── sync.js
    │   │       │   ├── types/
    │   │       │   │   ├── index.d.ts
    │   │       │   │   └── index.js
    │   │       │   ├── index.d.ts
    │   │       │   ├── index.js
    │   │       │   ├── settings.d.ts
    │   │       │   └── settings.js
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @pkgjs/
    │   │   └── parseargs/
    │   │       ├── examples/
    │   │       │   ├── is-default-value.js
    │   │       │   ├── limit-long-syntax.js
    │   │       │   ├── negate.js
    │   │       │   ├── no-repeated-options.js
    │   │       │   ├── ordered-options.mjs
    │   │       │   └── simple-hard-coded.js
    │   │       ├── internal/
    │   │       │   ├── errors.js
    │   │       │   ├── primordials.js
    │   │       │   ├── util.js
    │   │       │   └── validators.js
    │   │       ├── .editorconfig
    │   │       ├── CHANGELOG.md
    │   │       ├── index.js
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       ├── README.md
    │   │       └── utils.js
    │   ├── @reduxjs/
    │   │   └── toolkit/
    │   │       ├── dist/
    │   │       │   ├── cjs/
    │   │       │   │   ├── index.js
    │   │       │   │   ├── redux-toolkit.development.cjs
    │   │       │   │   ├── redux-toolkit.development.cjs.map
    │   │       │   │   ├── redux-toolkit.production.min.cjs
    │   │       │   │   └── redux-toolkit.production.min.cjs.map
    │   │       │   ├── query/
    │   │       │   │   ├── cjs/
    │   │       │   │   │   ├── index.js
    │   │       │   │   │   ├── rtk-query.development.cjs
    │   │       │   │   │   ├── rtk-query.development.cjs.map
    │   │       │   │   │   ├── rtk-query.production.min.cjs
    │   │       │   │   │   └── rtk-query.production.min.cjs.map
    │   │       │   │   ├── react/
    │   │       │   │   │   ├── cjs/
    │   │       │   │   │   │   ├── index.js
    │   │       │   │   │   │   ├── rtk-query-react.development.cjs
    │   │       │   │   │   │   ├── rtk-query-react.development.cjs.map
    │   │       │   │   │   │   ├── rtk-query-react.production.min.cjs
    │   │       │   │   │   │   └── rtk-query-react.production.min.cjs.map
    │   │       │   │   │   ├── index.d.mts
    │   │       │   │   │   ├── index.d.ts
    │   │       │   │   │   ├── rtk-query-react.browser.mjs
    │   │       │   │   │   ├── rtk-query-react.browser.mjs.map
    │   │       │   │   │   ├── rtk-query-react.legacy-esm.js
    │   │       │   │   │   ├── rtk-query-react.legacy-esm.js.map
    │   │       │   │   │   ├── rtk-query-react.modern.mjs
    │   │       │   │   │   └── rtk-query-react.modern.mjs.map
    │   │       │   │   ├── index.d.mts
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── rtk-query.browser.mjs
    │   │       │   │   ├── rtk-query.browser.mjs.map
    │   │       │   │   ├── rtk-query.legacy-esm.js
    │   │       │   │   ├── rtk-query.legacy-esm.js.map
    │   │       │   │   ├── rtk-query.modern.mjs
    │   │       │   │   └── rtk-query.modern.mjs.map
    │   │       │   ├── react/
    │   │       │   │   ├── cjs/
    │   │       │   │   │   ├── index.js
    │   │       │   │   │   ├── redux-toolkit-react.development.cjs
    │   │       │   │   │   ├── redux-toolkit-react.development.cjs.map
    │   │       │   │   │   ├── redux-toolkit-react.production.min.cjs
    │   │       │   │   │   └── redux-toolkit-react.production.min.cjs.map
    │   │       │   │   ├── index.d.mts
    │   │       │   │   ├── index.d.ts
    │   │       │   │   ├── redux-toolkit-react.browser.mjs
    │   │       │   │   ├── redux-toolkit-react.browser.mjs.map
    │   │       │   │   ├── redux-toolkit-react.legacy-esm.js
    │   │       │   │   ├── redux-toolkit-react.legacy-esm.js.map
    │   │       │   │   ├── redux-toolkit-react.modern.mjs
    │   │       │   │   └── redux-toolkit-react.modern.mjs.map
    │   │       │   ├── index.d.mts
    │   │       │   ├── index.d.ts
    │   │       │   ├── redux-toolkit.browser.mjs
    │   │       │   ├── redux-toolkit.browser.mjs.map
    │   │       │   ├── redux-toolkit.legacy-esm.js
    │   │       │   ├── redux-toolkit.legacy-esm.js.map
    │   │       │   ├── redux-toolkit.modern.mjs
    │   │       │   ├── redux-toolkit.modern.mjs.map
    │   │       │   └── uncheckedindexed.ts
    │   │       ├── query/
    │   │       │   ├── react/
    │   │       │   │   └── package.json
    │   │       │   └── package.json
    │   │       ├── react/
    │   │       │   └── package.json
    │   │       ├── src/
    │   │       │   ├── dynamicMiddleware/
    │   │       │   │   ├── react/
    │   │       │   │   │   └── index.ts
    │   │       │   │   ├── tests/
    │   │       │   │   │   ├── index.test-d.ts
    │   │       │   │   │   ├── index.test.ts
    │   │       │   │   │   ├── react.test-d.ts
    │   │       │   │   │   └── react.test.tsx
    │   │       │   │   ├── index.ts
    │   │       │   │   └── types.ts
    │   │       │   ├── entities/
    │   │       │   │   ├── tests/
    │   │       │   │   │   ├── fixtures/
    │   │       │   │   │   │   └── book.ts
    │   │       │   │   │   ├── entity_slice_enhancer.test.ts
    │   │       │   │   │   ├── entity_state.test.ts
    │   │       │   │   │   ├── sorted_state_adapter.test.ts
    │   │       │   │   │   ├── state_adapter.test.ts
    │   │       │   │   │   ├── state_selectors.test.ts
    │   │       │   │   │   ├── unsorted_state_adapter.test.ts
    │   │       │   │   │   └── utils.spec.ts
    │   │       │   │   ├── create_adapter.ts
    │   │       │   │   ├── entity_state.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── models.ts
    │   │       │   │   ├── sorted_state_adapter.ts
    │   │       │   │   ├── state_adapter.ts
    │   │       │   │   ├── state_selectors.ts
    │   │       │   │   ├── unsorted_state_adapter.ts
    │   │       │   │   └── utils.ts
    │   │       │   ├── listenerMiddleware/
    │   │       │   │   ├── tests/
    │   │       │   │   │   ├── effectScenarios.test.ts
    │   │       │   │   │   ├── fork.test.ts
    │   │       │   │   │   ├── listenerMiddleware.test-d.ts
    │   │       │   │   │   ├── listenerMiddleware.test.ts
    │   │       │   │   │   ├── listenerMiddleware.withTypes.test-d.ts
    │   │       │   │   │   ├── listenerMiddleware.withTypes.test.ts
    │   │       │   │   │   └── useCases.test.ts
    │   │       │   │   ├── exceptions.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── task.ts
    │   │       │   │   ├── types.ts
    │   │       │   │   └── utils.ts
    │   │       │   ├── query/
    │   │       │   │   ├── core/
    │   │       │   │   │   ├── buildMiddleware/
    │   │       │   │   │   │   ├── batchActions.ts
    │   │       │   │   │   │   ├── cacheCollection.ts
    │   │       │   │   │   │   ├── cacheLifecycle.ts
    │   │       │   │   │   │   ├── devMiddleware.ts
    │   │       │   │   │   │   ├── index.ts
    │   │       │   │   │   │   ├── invalidationByTags.ts
    │   │       │   │   │   │   ├── polling.ts
    │   │       │   │   │   │   ├── queryLifecycle.ts
    │   │       │   │   │   │   ├── types.ts
    │   │       │   │   │   │   └── windowEventHandling.ts
    │   │       │   │   │   ├── apiState.ts
    │   │       │   │   │   ├── buildInitiate.ts
    │   │       │   │   │   ├── buildSelectors.ts
    │   │       │   │   │   ├── buildSlice.ts
    │   │       │   │   │   ├── buildThunks.ts
    │   │       │   │   │   ├── index.ts
    │   │       │   │   │   ├── module.ts
    │   │       │   │   │   ├── rtkImports.ts
    │   │       │   │   │   └── setupListeners.ts
    │   │       │   │   ├── react/
    │   │       │   │   │   ├── ApiProvider.tsx
    │   │       │   │   │   ├── buildHooks.ts
    │   │       │   │   │   ├── constants.ts
    │   │       │   │   │   ├── index.ts
    │   │       │   │   │   ├── module.ts
    │   │       │   │   │   ├── namedHooks.ts
    │   │       │   │   │   ├── useSerializedStableValue.ts
    │   │       │   │   │   └── useShallowStableValue.ts
    │   │       │   │   ├── tests/
    │   │       │   │   │   ├── mocks/
    │   │       │   │   │   │   ├── handlers.ts
    │   │       │   │   │   │   └── server.ts
    │   │       │   │   │   ├── apiProvider.test.tsx
    │   │       │   │   │   ├── baseQueryTypes.test-d.ts
    │   │       │   │   │   ├── buildCreateApi.test.tsx
    │   │       │   │   │   ├── buildHooks.test-d.tsx
    │   │       │   │   │   ├── buildHooks.test.tsx
    │   │       │   │   │   ├── buildInitiate.test.tsx
    │   │       │   │   │   ├── buildMiddleware.test-d.ts
    │   │       │   │   │   ├── buildMiddleware.test.tsx
    │   │       │   │   │   ├── buildSelector.test-d.ts
    │   │       │   │   │   ├── buildSlice.test.ts
    │   │       │   │   │   ├── buildThunks.test.tsx
    │   │       │   │   │   ├── cacheCollection.test.ts
    │   │       │   │   │   ├── cacheLifecycle.test-d.ts
    │   │       │   │   │   ├── cacheLifecycle.test.ts
    │   │       │   │   │   ├── cleanup.test.tsx
    │   │       │   │   │   ├── copyWithStructuralSharing.test.ts
    │   │       │   │   │   ├── createApi.test-d.ts
    │   │       │   │   │   ├── createApi.test.ts
    │   │       │   │   │   ├── defaultSerializeQueryArgs.test.ts
    │   │       │   │   │   ├── devWarnings.test.tsx
    │   │       │   │   │   ├── errorHandling.test-d.tsx
    │   │       │   │   │   ├── errorHandling.test.tsx
    │   │       │   │   │   ├── fakeBaseQuery.test.tsx
    │   │       │   │   │   ├── fetchBaseQuery.test.tsx
    │   │       │   │   │   ├── infiniteQueries.test-d.ts
    │   │       │   │   │   ├── infiniteQueries.test.ts
    │   │       │   │   │   ├── injectEndpoints.test.tsx
    │   │       │   │   │   ├── invalidation.test.tsx
    │   │       │   │   │   ├── matchers.test-d.tsx
    │   │       │   │   │   ├── matchers.test.tsx
    │   │       │   │   │   ├── optimisticUpdates.test.tsx
    │   │       │   │   │   ├── optimisticUpserts.test.tsx
    │   │       │   │   │   ├── polling.test.tsx
    │   │       │   │   │   ├── queryFn.test.tsx
    │   │       │   │   │   ├── queryLifecycle.test-d.tsx
    │   │       │   │   │   ├── queryLifecycle.test.tsx
    │   │       │   │   │   ├── raceConditions.test.ts
    │   │       │   │   │   ├── refetchingBehaviors.test.tsx
    │   │       │   │   │   ├── retry.test-d.ts
    │   │       │   │   │   ├── retry.test.ts
    │   │       │   │   │   ├── unionTypes.test-d.ts
    │   │       │   │   │   ├── useMutation-fixedCacheKey.test.tsx
    │   │       │   │   │   └── utils.test.ts
    │   │       │   │   ├── utils/
    │   │       │   │   │   ├── capitalize.ts
    │   │       │   │   │   ├── copyWithStructuralSharing.ts
    │   │       │   │   │   ├── countObjectKeys.ts
    │   │       │   │   │   ├── flatten.ts
    │   │       │   │   │   ├── getOrInsert.ts
    │   │       │   │   │   ├── index.ts
    │   │       │   │   │   ├── isAbsoluteUrl.ts
    │   │       │   │   │   ├── isDocumentVisible.ts
    │   │       │   │   │   ├── isNotNullish.ts
    │   │       │   │   │   ├── isOnline.ts
    │   │       │   │   │   ├── isValidUrl.ts
    │   │       │   │   │   └── joinUrls.ts
    │   │       │   │   ├── apiTypes.ts
    │   │       │   │   ├── baseQueryTypes.ts
    │   │       │   │   ├── createApi.ts
    │   │       │   │   ├── defaultSerializeQueryArgs.ts
    │   │       │   │   ├── endpointDefinitions.ts
    │   │       │   │   ├── fakeBaseQuery.ts
    │   │       │   │   ├── fetchBaseQuery.ts
    │   │       │   │   ├── HandledError.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── retry.ts
    │   │       │   │   ├── standardSchema.ts
    │   │       │   │   └── tsHelpers.ts
    │   │       │   ├── react/
    │   │       │   │   └── index.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── utils/
    │   │       │   │   │   ├── CustomMatchers.d.ts
    │   │       │   │   │   └── helpers.tsx
    │   │       │   │   ├── actionCreatorInvariantMiddleware.test.ts
    │   │       │   │   ├── autoBatchEnhancer.test.ts
    │   │       │   │   ├── combinedTest.test.ts
    │   │       │   │   ├── combineSlices.test-d.ts
    │   │       │   │   ├── combineSlices.test.ts
    │   │       │   │   ├── configureStore.test-d.ts
    │   │       │   │   ├── configureStore.test.ts
    │   │       │   │   ├── createAction.test-d.tsx
    │   │       │   │   ├── createAction.test.ts
    │   │       │   │   ├── createAsyncThunk.test-d.ts
    │   │       │   │   ├── createAsyncThunk.test.ts
    │   │       │   │   ├── createDraftSafeSelector.test.ts
    │   │       │   │   ├── createDraftSafeSelector.withTypes.test.ts
    │   │       │   │   ├── createEntityAdapter.test-d.ts
    │   │       │   │   ├── createReducer.test-d.ts
    │   │       │   │   ├── createReducer.test.ts
    │   │       │   │   ├── createSlice.test-d.ts
    │   │       │   │   ├── createSlice.test.ts
    │   │       │   │   ├── getDefaultEnhancers.test-d.ts
    │   │       │   │   ├── getDefaultMiddleware.test-d.ts
    │   │       │   │   ├── getDefaultMiddleware.test.ts
    │   │       │   │   ├── immutableStateInvariantMiddleware.test.ts
    │   │       │   │   ├── mapBuilders.test-d.ts
    │   │       │   │   ├── matchers.test-d.ts
    │   │       │   │   ├── matchers.test.ts
    │   │       │   │   ├── serializableStateInvariantMiddleware.test.ts
    │   │       │   │   └── Tuple.test-d.ts
    │   │       │   ├── actionCreatorInvariantMiddleware.ts
    │   │       │   ├── autoBatchEnhancer.ts
    │   │       │   ├── combineSlices.ts
    │   │       │   ├── configureStore.ts
    │   │       │   ├── createAction.ts
    │   │       │   ├── createAsyncThunk.ts
    │   │       │   ├── createDraftSafeSelector.ts
    │   │       │   ├── createReducer.ts
    │   │       │   ├── createSlice.ts
    │   │       │   ├── devtoolsExtension.ts
    │   │       │   ├── formatProdErrorMessage.ts
    │   │       │   ├── getDefaultEnhancers.ts
    │   │       │   ├── getDefaultMiddleware.ts
    │   │       │   ├── immutableStateInvariantMiddleware.ts
    │   │       │   ├── index.ts
    │   │       │   ├── mapBuilders.ts
    │   │       │   ├── matchers.ts
    │   │       │   ├── nanoid.ts
    │   │       │   ├── serializableStateInvariantMiddleware.ts
    │   │       │   ├── tsHelpers.ts
    │   │       │   ├── uncheckedindexed.ts
    │   │       │   └── utils.ts
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @rolldown/
    │   │   └── pluginutils/
    │   │       ├── dist/
    │   │       │   ├── index.cjs
    │   │       │   ├── index.d.cts
    │   │       │   ├── index.d.ts
    │   │       │   └── index.js
    │   │       ├── LICENSE
    │   │       └── package.json
    │   ├── @rollup/
    │   │   └── rollup-win32-x64-msvc/
    │   │       ├── package.json
    │   │       ├── README.md
    │   │       └── rollup.win32-x64-msvc.node
    │   ├── @standard-schema/
    │   │   ├── spec/
    │   │   │   ├── dist/
    │   │   │   │   ├── index.cjs
    │   │   │   │   ├── index.d.cts
    │   │   │   │   ├── index.d.ts
    │   │   │   │   └── index.js
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   └── utils/
    │   │       ├── dist/
    │   │       │   ├── index.cjs
    │   │       │   ├── index.d.cts
    │   │       │   ├── index.d.ts
    │   │       │   └── index.js
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── @types/
    │   │   ├── babel__core/
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── babel__generator/
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── babel__template/
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── babel__traverse/
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── estree/
    │   │   │   ├── flow.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── json-schema/
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── react/
    │   │   │   ├── ts5.0/
    │   │   │   │   ├── v18/
    │   │   │   │   │   ├── ts5.0/
    │   │   │   │   │   │   ├── global.d.ts
    │   │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   │   ├── jsx-dev-runtime.d.ts
    │   │   │   │   │   │   └── jsx-runtime.d.ts
    │   │   │   │   │   ├── global.d.ts
    │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   ├── jsx-dev-runtime.d.ts
    │   │   │   │   │   └── jsx-runtime.d.ts
    │   │   │   │   ├── canary.d.ts
    │   │   │   │   ├── experimental.d.ts
    │   │   │   │   ├── global.d.ts
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── jsx-dev-runtime.d.ts
    │   │   │   │   └── jsx-runtime.d.ts
    │   │   │   ├── canary.d.ts
    │   │   │   ├── compiler-runtime.d.ts
    │   │   │   ├── experimental.d.ts
    │   │   │   ├── global.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── jsx-dev-runtime.d.ts
    │   │   │   ├── jsx-runtime.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── react-dom/
    │   │   │   ├── test-utils/
    │   │   │   │   └── index.d.ts
    │   │   │   ├── canary.d.ts
    │   │   │   ├── client.d.ts
    │   │   │   ├── experimental.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── LICENSE
    │   │   │   ├── package.json
    │   │   │   ├── README.md
    │   │   │   ├── server.browser.d.ts
    │   │   │   ├── server.bun.d.ts
    │   │   │   ├── server.d.ts
    │   │   │   ├── server.edge.d.ts
    │   │   │   ├── server.node.d.ts
    │   │   │   ├── static.browser.d.ts
    │   │   │   ├── static.d.ts
    │   │   │   ├── static.edge.d.ts
    │   │   │   └── static.node.d.ts
    │   │   └── use-sync-external-store/
    │   │       ├── shim/
    │   │       │   ├── index.d.ts
    │   │       │   └── with-selector.d.ts
    │   │       ├── index.d.ts
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       ├── README.md
    │   │       └── with-selector.d.ts
    │   ├── @vitejs/
    │   │   └── plugin-react/
    │   │       ├── dist/
    │   │       │   ├── index.cjs
    │   │       │   ├── index.d.cts
    │   │       │   ├── index.d.mts
    │   │       │   ├── index.d.ts
    │   │       │   ├── index.mjs
    │   │       │   └── refresh-runtime.js
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── acorn/
    │   │   ├── bin/
    │   │   │   └── acorn
    │   │   ├── dist/
    │   │   │   ├── acorn.d.mts
    │   │   │   ├── acorn.d.ts
    │   │   │   ├── acorn.js
    │   │   │   ├── acorn.mjs
    │   │   │   └── bin.js
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── acorn-jsx/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── xhtml.js
    │   ├── ajv/
    │   │   ├── dist/
    │   │   │   ├── ajv.bundle.js
    │   │   │   ├── ajv.min.js
    │   │   │   └── ajv.min.js.map
    │   │   ├── lib/
    │   │   │   ├── compile/
    │   │   │   │   ├── async.js
    │   │   │   │   ├── equal.js
    │   │   │   │   ├── error_classes.js
    │   │   │   │   ├── formats.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── resolve.js
    │   │   │   │   ├── rules.js
    │   │   │   │   ├── schema_obj.js
    │   │   │   │   ├── ucs2length.js
    │   │   │   │   └── util.js
    │   │   │   ├── dot/
    │   │   │   │   ├── _limit.jst
    │   │   │   │   ├── _limitItems.jst
    │   │   │   │   ├── _limitLength.jst
    │   │   │   │   ├── _limitProperties.jst
    │   │   │   │   ├── allOf.jst
    │   │   │   │   ├── anyOf.jst
    │   │   │   │   ├── coerce.def
    │   │   │   │   ├── comment.jst
    │   │   │   │   ├── const.jst
    │   │   │   │   ├── contains.jst
    │   │   │   │   ├── custom.jst
    │   │   │   │   ├── defaults.def
    │   │   │   │   ├── definitions.def
    │   │   │   │   ├── dependencies.jst
    │   │   │   │   ├── enum.jst
    │   │   │   │   ├── errors.def
    │   │   │   │   ├── format.jst
    │   │   │   │   ├── if.jst
    │   │   │   │   ├── items.jst
    │   │   │   │   ├── missing.def
    │   │   │   │   ├── multipleOf.jst
    │   │   │   │   ├── not.jst
    │   │   │   │   ├── oneOf.jst
    │   │   │   │   ├── pattern.jst
    │   │   │   │   ├── properties.jst
    │   │   │   │   ├── propertyNames.jst
    │   │   │   │   ├── ref.jst
    │   │   │   │   ├── required.jst
    │   │   │   │   ├── uniqueItems.jst
    │   │   │   │   └── validate.jst
    │   │   │   ├── dotjs/
    │   │   │   │   ├── _limit.js
    │   │   │   │   ├── _limitItems.js
    │   │   │   │   ├── _limitLength.js
    │   │   │   │   ├── _limitProperties.js
    │   │   │   │   ├── allOf.js
    │   │   │   │   ├── anyOf.js
    │   │   │   │   ├── comment.js
    │   │   │   │   ├── const.js
    │   │   │   │   ├── contains.js
    │   │   │   │   ├── custom.js
    │   │   │   │   ├── dependencies.js
    │   │   │   │   ├── enum.js
    │   │   │   │   ├── format.js
    │   │   │   │   ├── if.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── items.js
    │   │   │   │   ├── multipleOf.js
    │   │   │   │   ├── not.js
    │   │   │   │   ├── oneOf.js
    │   │   │   │   ├── pattern.js
    │   │   │   │   ├── properties.js
    │   │   │   │   ├── propertyNames.js
    │   │   │   │   ├── README.md
    │   │   │   │   ├── ref.js
    │   │   │   │   ├── required.js
    │   │   │   │   ├── uniqueItems.js
    │   │   │   │   └── validate.js
    │   │   │   ├── refs/
    │   │   │   │   ├── data.json
    │   │   │   │   ├── json-schema-draft-04.json
    │   │   │   │   ├── json-schema-draft-06.json
    │   │   │   │   ├── json-schema-draft-07.json
    │   │   │   │   └── json-schema-secure.json
    │   │   │   ├── ajv.d.ts
    │   │   │   ├── ajv.js
    │   │   │   ├── cache.js
    │   │   │   ├── data.js
    │   │   │   ├── definition_schema.js
    │   │   │   └── keyword.js
    │   │   ├── scripts/
    │   │   │   ├── .eslintrc.yml
    │   │   │   ├── bundle.js
    │   │   │   ├── compile-dots.js
    │   │   │   ├── info
    │   │   │   ├── prepare-tests
    │   │   │   ├── publish-built-version
    │   │   │   └── travis-gh-pages
    │   │   ├── .tonic_example.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── ansi-regex/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── ansi-styles/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── any-promise/
    │   │   ├── register/
    │   │   │   ├── bluebird.d.ts
    │   │   │   ├── bluebird.js
    │   │   │   ├── es6-promise.d.ts
    │   │   │   ├── es6-promise.js
    │   │   │   ├── lie.d.ts
    │   │   │   ├── lie.js
    │   │   │   ├── native-promise-only.d.ts
    │   │   │   ├── native-promise-only.js
    │   │   │   ├── pinkie.d.ts
    │   │   │   ├── pinkie.js
    │   │   │   ├── promise.d.ts
    │   │   │   ├── promise.js
    │   │   │   ├── q.d.ts
    │   │   │   ├── q.js
    │   │   │   ├── rsvp.d.ts
    │   │   │   ├── rsvp.js
    │   │   │   ├── vow.d.ts
    │   │   │   ├── vow.js
    │   │   │   ├── when.d.ts
    │   │   │   └── when.js
    │   │   ├── .jshintrc
    │   │   ├── .npmignore
    │   │   ├── implementation.d.ts
    │   │   ├── implementation.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── loader.js
    │   │   ├── optional.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── register-shim.js
    │   │   ├── register.d.ts
    │   │   └── register.js
    │   ├── anymatch/
    │   │   ├── node_modules/
    │   │   │   └── picomatch/
    │   │   │       ├── lib/
    │   │   │       │   ├── constants.js
    │   │   │       │   ├── parse.js
    │   │   │       │   ├── picomatch.js
    │   │   │       │   ├── scan.js
    │   │   │       │   └── utils.js
    │   │   │       ├── CHANGELOG.md
    │   │   │       ├── index.js
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── arg/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── argparse/
    │   │   ├── lib/
    │   │   │   ├── sub.js
    │   │   │   └── textwrap.js
    │   │   ├── argparse.js
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── asynckit/
    │   │   ├── lib/
    │   │   │   ├── abort.js
    │   │   │   ├── async.js
    │   │   │   ├── defer.js
    │   │   │   ├── iterate.js
    │   │   │   ├── readable_asynckit.js
    │   │   │   ├── readable_parallel.js
    │   │   │   ├── readable_serial_ordered.js
    │   │   │   ├── readable_serial.js
    │   │   │   ├── state.js
    │   │   │   ├── streamify.js
    │   │   │   └── terminator.js
    │   │   ├── bench.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── parallel.js
    │   │   ├── README.md
    │   │   ├── serial.js
    │   │   ├── serialOrdered.js
    │   │   └── stream.js
    │   ├── autoprefixer/
    │   │   ├── bin/
    │   │   │   └── autoprefixer
    │   │   ├── data/
    │   │   │   └── prefixes.js
    │   │   ├── lib/
    │   │   │   ├── hacks/
    │   │   │   │   ├── align-content.js
    │   │   │   │   ├── align-items.js
    │   │   │   │   ├── align-self.js
    │   │   │   │   ├── animation.js
    │   │   │   │   ├── appearance.js
    │   │   │   │   ├── autofill.js
    │   │   │   │   ├── backdrop-filter.js
    │   │   │   │   ├── background-clip.js
    │   │   │   │   ├── background-size.js
    │   │   │   │   ├── block-logical.js
    │   │   │   │   ├── border-image.js
    │   │   │   │   ├── border-radius.js
    │   │   │   │   ├── break-props.js
    │   │   │   │   ├── cross-fade.js
    │   │   │   │   ├── display-flex.js
    │   │   │   │   ├── display-grid.js
    │   │   │   │   ├── file-selector-button.js
    │   │   │   │   ├── filter-value.js
    │   │   │   │   ├── filter.js
    │   │   │   │   ├── flex-basis.js
    │   │   │   │   ├── flex-direction.js
    │   │   │   │   ├── flex-flow.js
    │   │   │   │   ├── flex-grow.js
    │   │   │   │   ├── flex-shrink.js
    │   │   │   │   ├── flex-spec.js
    │   │   │   │   ├── flex-wrap.js
    │   │   │   │   ├── flex.js
    │   │   │   │   ├── fullscreen.js
    │   │   │   │   ├── gradient.js
    │   │   │   │   ├── grid-area.js
    │   │   │   │   ├── grid-column-align.js
    │   │   │   │   ├── grid-end.js
    │   │   │   │   ├── grid-row-align.js
    │   │   │   │   ├── grid-row-column.js
    │   │   │   │   ├── grid-rows-columns.js
    │   │   │   │   ├── grid-start.js
    │   │   │   │   ├── grid-template-areas.js
    │   │   │   │   ├── grid-template.js
    │   │   │   │   ├── grid-utils.js
    │   │   │   │   ├── image-rendering.js
    │   │   │   │   ├── image-set.js
    │   │   │   │   ├── inline-logical.js
    │   │   │   │   ├── intrinsic.js
    │   │   │   │   ├── justify-content.js
    │   │   │   │   ├── mask-border.js
    │   │   │   │   ├── mask-composite.js
    │   │   │   │   ├── order.js
    │   │   │   │   ├── overscroll-behavior.js
    │   │   │   │   ├── pixelated.js
    │   │   │   │   ├── place-self.js
    │   │   │   │   ├── placeholder-shown.js
    │   │   │   │   ├── placeholder.js
    │   │   │   │   ├── print-color-adjust.js
    │   │   │   │   ├── text-decoration-skip-ink.js
    │   │   │   │   ├── text-decoration.js
    │   │   │   │   ├── text-emphasis-position.js
    │   │   │   │   ├── transform-decl.js
    │   │   │   │   ├── user-select.js
    │   │   │   │   └── writing-mode.js
    │   │   │   ├── at-rule.js
    │   │   │   ├── autoprefixer.d.ts
    │   │   │   ├── autoprefixer.js
    │   │   │   ├── brackets.js
    │   │   │   ├── browsers.js
    │   │   │   ├── declaration.js
    │   │   │   ├── info.js
    │   │   │   ├── old-selector.js
    │   │   │   ├── old-value.js
    │   │   │   ├── prefixer.js
    │   │   │   ├── prefixes.js
    │   │   │   ├── processor.js
    │   │   │   ├── resolution.js
    │   │   │   ├── selector.js
    │   │   │   ├── supports.js
    │   │   │   ├── transition.js
    │   │   │   ├── utils.js
    │   │   │   ├── value.js
    │   │   │   └── vendor.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── axios/
    │   │   ├── dist/
    │   │   │   ├── browser/
    │   │   │   │   ├── axios.cjs
    │   │   │   │   └── axios.cjs.map
    │   │   │   ├── esm/
    │   │   │   │   ├── axios.js
    │   │   │   │   ├── axios.js.map
    │   │   │   │   ├── axios.min.js
    │   │   │   │   └── axios.min.js.map
    │   │   │   ├── node/
    │   │   │   │   ├── axios.cjs
    │   │   │   │   └── axios.cjs.map
    │   │   │   ├── axios.js
    │   │   │   ├── axios.js.map
    │   │   │   ├── axios.min.js
    │   │   │   └── axios.min.js.map
    │   │   ├── lib/
    │   │   │   ├── adapters/
    │   │   │   │   ├── adapters.js
    │   │   │   │   ├── fetch.js
    │   │   │   │   ├── http.js
    │   │   │   │   ├── README.md
    │   │   │   │   └── xhr.js
    │   │   │   ├── cancel/
    │   │   │   │   ├── CanceledError.js
    │   │   │   │   ├── CancelToken.js
    │   │   │   │   └── isCancel.js
    │   │   │   ├── core/
    │   │   │   │   ├── Axios.js
    │   │   │   │   ├── AxiosError.js
    │   │   │   │   ├── AxiosHeaders.js
    │   │   │   │   ├── buildFullPath.js
    │   │   │   │   ├── dispatchRequest.js
    │   │   │   │   ├── InterceptorManager.js
    │   │   │   │   ├── mergeConfig.js
    │   │   │   │   ├── README.md
    │   │   │   │   ├── settle.js
    │   │   │   │   └── transformData.js
    │   │   │   ├── defaults/
    │   │   │   │   ├── index.js
    │   │   │   │   └── transitional.js
    │   │   │   ├── env/
    │   │   │   │   ├── classes/
    │   │   │   │   │   └── FormData.js
    │   │   │   │   ├── data.js
    │   │   │   │   └── README.md
    │   │   │   ├── helpers/
    │   │   │   │   ├── AxiosTransformStream.js
    │   │   │   │   ├── AxiosURLSearchParams.js
    │   │   │   │   ├── bind.js
    │   │   │   │   ├── buildURL.js
    │   │   │   │   ├── callbackify.js
    │   │   │   │   ├── combineURLs.js
    │   │   │   │   ├── composeSignals.js
    │   │   │   │   ├── cookies.js
    │   │   │   │   ├── deprecatedMethod.js
    │   │   │   │   ├── formDataToJSON.js
    │   │   │   │   ├── formDataToStream.js
    │   │   │   │   ├── fromDataURI.js
    │   │   │   │   ├── HttpStatusCode.js
    │   │   │   │   ├── isAbsoluteURL.js
    │   │   │   │   ├── isAxiosError.js
    │   │   │   │   ├── isURLSameOrigin.js
    │   │   │   │   ├── null.js
    │   │   │   │   ├── parseHeaders.js
    │   │   │   │   ├── parseProtocol.js
    │   │   │   │   ├── progressEventReducer.js
    │   │   │   │   ├── readBlob.js
    │   │   │   │   ├── README.md
    │   │   │   │   ├── resolveConfig.js
    │   │   │   │   ├── speedometer.js
    │   │   │   │   ├── spread.js
    │   │   │   │   ├── throttle.js
    │   │   │   │   ├── toFormData.js
    │   │   │   │   ├── toURLEncodedForm.js
    │   │   │   │   ├── trackStream.js
    │   │   │   │   ├── validator.js
    │   │   │   │   └── ZlibHeaderTransformStream.js
    │   │   │   ├── platform/
    │   │   │   │   ├── browser/
    │   │   │   │   │   ├── classes/
    │   │   │   │   │   │   ├── Blob.js
    │   │   │   │   │   │   ├── FormData.js
    │   │   │   │   │   │   └── URLSearchParams.js
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── common/
    │   │   │   │   │   └── utils.js
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── classes/
    │   │   │   │   │   │   ├── FormData.js
    │   │   │   │   │   │   └── URLSearchParams.js
    │   │   │   │   │   └── index.js
    │   │   │   │   └── index.js
    │   │   │   ├── axios.js
    │   │   │   └── utils.js
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.cts
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── MIGRATION_GUIDE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── balanced-match/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── index.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── binary-extensions/
    │   │   ├── binary-extensions.json
    │   │   ├── binary-extensions.json.d.ts
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── brace-expansion/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── braces/
    │   │   ├── lib/
    │   │   │   ├── compile.js
    │   │   │   ├── constants.js
    │   │   │   ├── expand.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   └── utils.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── browserslist/
    │   │   ├── browser.js
    │   │   ├── cli.js
    │   │   ├── error.d.ts
    │   │   ├── error.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── node.js
    │   │   ├── package.json
    │   │   ├── parse.js
    │   │   └── README.md
    │   ├── call-bind-apply-helpers/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── actualApply.d.ts
    │   │   ├── actualApply.js
    │   │   ├── applyBind.d.ts
    │   │   ├── applyBind.js
    │   │   ├── CHANGELOG.md
    │   │   ├── functionApply.d.ts
    │   │   ├── functionApply.js
    │   │   ├── functionCall.d.ts
    │   │   ├── functionCall.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── reflectApply.d.ts
    │   │   ├── reflectApply.js
    │   │   └── tsconfig.json
    │   ├── callsites/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── camelcase-css/
    │   │   ├── index-es5.js
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── caniuse-lite/
    │   │   ├── data/
    │   │   │   ├── features/
    │   │   │   │   ├── aac.js
    │   │   │   │   ├── abortcontroller.js
    │   │   │   │   ├── ac3-ec3.js
    │   │   │   │   ├── accelerometer.js
    │   │   │   │   ├── addeventlistener.js
    │   │   │   │   ├── alternate-stylesheet.js
    │   │   │   │   ├── ambient-light.js
    │   │   │   │   ├── apng.js
    │   │   │   │   ├── array-find-index.js
    │   │   │   │   ├── array-find.js
    │   │   │   │   ├── array-flat.js
    │   │   │   │   ├── array-includes.js
    │   │   │   │   ├── arrow-functions.js
    │   │   │   │   ├── asmjs.js
    │   │   │   │   ├── async-clipboard.js
    │   │   │   │   ├── async-functions.js
    │   │   │   │   ├── atob-btoa.js
    │   │   │   │   ├── audio-api.js
    │   │   │   │   ├── audio.js
    │   │   │   │   ├── audiotracks.js
    │   │   │   │   ├── autofocus.js
    │   │   │   │   ├── auxclick.js
    │   │   │   │   ├── av1.js
    │   │   │   │   ├── avif.js
    │   │   │   │   ├── background-attachment.js
    │   │   │   │   ├── background-clip-text.js
    │   │   │   │   ├── background-img-opts.js
    │   │   │   │   ├── background-position-x-y.js
    │   │   │   │   ├── background-repeat-round-space.js
    │   │   │   │   ├── background-sync.js
    │   │   │   │   ├── battery-status.js
    │   │   │   │   ├── beacon.js
    │   │   │   │   ├── beforeafterprint.js
    │   │   │   │   ├── bigint.js
    │   │   │   │   ├── blobbuilder.js
    │   │   │   │   ├── bloburls.js
    │   │   │   │   ├── border-image.js
    │   │   │   │   ├── border-radius.js
    │   │   │   │   ├── broadcastchannel.js
    │   │   │   │   ├── brotli.js
    │   │   │   │   ├── calc.js
    │   │   │   │   ├── canvas-blending.js
    │   │   │   │   ├── canvas-text.js
    │   │   │   │   ├── canvas.js
    │   │   │   │   ├── ch-unit.js
    │   │   │   │   ├── chacha20-poly1305.js
    │   │   │   │   ├── channel-messaging.js
    │   │   │   │   ├── childnode-remove.js
    │   │   │   │   ├── classlist.js
    │   │   │   │   ├── client-hints-dpr-width-viewport.js
    │   │   │   │   ├── clipboard.js
    │   │   │   │   ├── colr-v1.js
    │   │   │   │   ├── colr.js
    │   │   │   │   ├── comparedocumentposition.js
    │   │   │   │   ├── console-basic.js
    │   │   │   │   ├── console-time.js
    │   │   │   │   ├── const.js
    │   │   │   │   ├── constraint-validation.js
    │   │   │   │   ├── contenteditable.js
    │   │   │   │   ├── contentsecuritypolicy.js
    │   │   │   │   ├── contentsecuritypolicy2.js
    │   │   │   │   ├── cookie-store-api.js
    │   │   │   │   ├── cors.js
    │   │   │   │   ├── createimagebitmap.js
    │   │   │   │   ├── credential-management.js
    │   │   │   │   ├── cross-document-view-transitions.js
    │   │   │   │   ├── cryptography.js
    │   │   │   │   ├── css-all.js
    │   │   │   │   ├── css-anchor-positioning.js
    │   │   │   │   ├── css-animation.js
    │   │   │   │   ├── css-any-link.js
    │   │   │   │   ├── css-appearance.js
    │   │   │   │   ├── css-at-counter-style.js
    │   │   │   │   ├── css-autofill.js
    │   │   │   │   ├── css-backdrop-filter.js
    │   │   │   │   ├── css-background-offsets.js
    │   │   │   │   ├── css-backgroundblendmode.js
    │   │   │   │   ├── css-boxdecorationbreak.js
    │   │   │   │   ├── css-boxshadow.js
    │   │   │   │   ├── css-canvas.js
    │   │   │   │   ├── css-caret-color.js
    │   │   │   │   ├── css-cascade-layers.js
    │   │   │   │   ├── css-cascade-scope.js
    │   │   │   │   ├── css-case-insensitive.js
    │   │   │   │   ├── css-clip-path.js
    │   │   │   │   ├── css-color-adjust.js
    │   │   │   │   ├── css-color-function.js
    │   │   │   │   ├── css-conic-gradients.js
    │   │   │   │   ├── css-container-queries-style.js
    │   │   │   │   ├── css-container-queries.js
    │   │   │   │   ├── css-container-query-units.js
    │   │   │   │   ├── css-containment.js
    │   │   │   │   ├── css-content-visibility.js
    │   │   │   │   ├── css-counters.js
    │   │   │   │   ├── css-crisp-edges.js
    │   │   │   │   ├── css-cross-fade.js
    │   │   │   │   ├── css-default-pseudo.js
    │   │   │   │   ├── css-descendant-gtgt.js
    │   │   │   │   ├── css-deviceadaptation.js
    │   │   │   │   ├── css-dir-pseudo.js
    │   │   │   │   ├── css-display-contents.js
    │   │   │   │   ├── css-element-function.js
    │   │   │   │   ├── css-env-function.js
    │   │   │   │   ├── css-exclusions.js
    │   │   │   │   ├── css-featurequeries.js
    │   │   │   │   ├── css-file-selector-button.js
    │   │   │   │   ├── css-filter-function.js
    │   │   │   │   ├── css-filters.js
    │   │   │   │   ├── css-first-letter.js
    │   │   │   │   ├── css-first-line.js
    │   │   │   │   ├── css-fixed.js
    │   │   │   │   ├── css-focus-visible.js
    │   │   │   │   ├── css-focus-within.js
    │   │   │   │   ├── css-font-palette.js
    │   │   │   │   ├── css-font-rendering-controls.js
    │   │   │   │   ├── css-font-stretch.js
    │   │   │   │   ├── css-gencontent.js
    │   │   │   │   ├── css-gradients.js
    │   │   │   │   ├── css-grid-animation.js
    │   │   │   │   ├── css-grid.js
    │   │   │   │   ├── css-hanging-punctuation.js
    │   │   │   │   ├── css-has.js
    │   │   │   │   ├── css-hyphens.js
    │   │   │   │   ├── css-image-orientation.js
    │   │   │   │   ├── css-image-set.js
    │   │   │   │   ├── css-in-out-of-range.js
    │   │   │   │   ├── css-indeterminate-pseudo.js
    │   │   │   │   ├── css-initial-letter.js
    │   │   │   │   ├── css-initial-value.js
    │   │   │   │   ├── css-lch-lab.js
    │   │   │   │   ├── css-letter-spacing.js
    │   │   │   │   ├── css-line-clamp.js
    │   │   │   │   ├── css-logical-props.js
    │   │   │   │   ├── css-marker-pseudo.js
    │   │   │   │   ├── css-masks.js
    │   │   │   │   ├── css-matches-pseudo.js
    │   │   │   │   ├── css-math-functions.js
    │   │   │   │   ├── css-media-interaction.js
    │   │   │   │   ├── css-media-range-syntax.js
    │   │   │   │   ├── css-media-resolution.js
    │   │   │   │   ├── css-media-scripting.js
    │   │   │   │   ├── css-mediaqueries.js
    │   │   │   │   ├── css-mixblendmode.js
    │   │   │   │   ├── css-module-scripts.js
    │   │   │   │   ├── css-motion-paths.js
    │   │   │   │   ├── css-namespaces.js
    │   │   │   │   ├── css-nesting.js
    │   │   │   │   ├── css-not-sel-list.js
    │   │   │   │   ├── css-nth-child-of.js
    │   │   │   │   ├── css-opacity.js
    │   │   │   │   ├── css-optional-pseudo.js
    │   │   │   │   ├── css-overflow-anchor.js
    │   │   │   │   ├── css-overflow-overlay.js
    │   │   │   │   ├── css-overflow.js
    │   │   │   │   ├── css-overscroll-behavior.js
    │   │   │   │   ├── css-page-break.js
    │   │   │   │   ├── css-paged-media.js
    │   │   │   │   ├── css-paint-api.js
    │   │   │   │   ├── css-placeholder-shown.js
    │   │   │   │   ├── css-placeholder.js
    │   │   │   │   ├── css-print-color-adjust.js
    │   │   │   │   ├── css-read-only-write.js
    │   │   │   │   ├── css-rebeccapurple.js
    │   │   │   │   ├── css-reflections.js
    │   │   │   │   ├── css-regions.js
    │   │   │   │   ├── css-relative-colors.js
    │   │   │   │   ├── css-repeating-gradients.js
    │   │   │   │   ├── css-resize.js
    │   │   │   │   ├── css-revert-value.js
    │   │   │   │   ├── css-rrggbbaa.js
    │   │   │   │   ├── css-scroll-behavior.js
    │   │   │   │   ├── css-scrollbar.js
    │   │   │   │   ├── css-sel2.js
    │   │   │   │   ├── css-sel3.js
    │   │   │   │   ├── css-selection.js
    │   │   │   │   ├── css-shapes.js
    │   │   │   │   ├── css-snappoints.js
    │   │   │   │   ├── css-sticky.js
    │   │   │   │   ├── css-subgrid.js
    │   │   │   │   ├── css-supports-api.js
    │   │   │   │   ├── css-table.js
    │   │   │   │   ├── css-text-align-last.js
    │   │   │   │   ├── css-text-box-trim.js
    │   │   │   │   ├── css-text-indent.js
    │   │   │   │   ├── css-text-justify.js
    │   │   │   │   ├── css-text-orientation.js
    │   │   │   │   ├── css-text-spacing.js
    │   │   │   │   ├── css-text-wrap-balance.js
    │   │   │   │   ├── css-textshadow.js
    │   │   │   │   ├── css-touch-action.js
    │   │   │   │   ├── css-transitions.js
    │   │   │   │   ├── css-unicode-bidi.js
    │   │   │   │   ├── css-unset-value.js
    │   │   │   │   ├── css-variables.js
    │   │   │   │   ├── css-when-else.js
    │   │   │   │   ├── css-widows-orphans.js
    │   │   │   │   ├── css-width-stretch.js
    │   │   │   │   ├── css-writing-mode.js
    │   │   │   │   ├── css-zoom.js
    │   │   │   │   ├── css3-attr.js
    │   │   │   │   ├── css3-boxsizing.js
    │   │   │   │   ├── css3-colors.js
    │   │   │   │   ├── css3-cursors-grab.js
    │   │   │   │   ├── css3-cursors-newer.js
    │   │   │   │   ├── css3-cursors.js
    │   │   │   │   ├── css3-tabsize.js
    │   │   │   │   ├── currentcolor.js
    │   │   │   │   ├── custom-elements.js
    │   │   │   │   ├── custom-elementsv1.js
    │   │   │   │   ├── customevent.js
    │   │   │   │   ├── datalist.js
    │   │   │   │   ├── dataset.js
    │   │   │   │   ├── datauri.js
    │   │   │   │   ├── date-tolocaledatestring.js
    │   │   │   │   ├── declarative-shadow-dom.js
    │   │   │   │   ├── decorators.js
    │   │   │   │   ├── details.js
    │   │   │   │   ├── deviceorientation.js
    │   │   │   │   ├── devicepixelratio.js
    │   │   │   │   ├── dialog.js
    │   │   │   │   ├── dispatchevent.js
    │   │   │   │   ├── dnssec.js
    │   │   │   │   ├── do-not-track.js
    │   │   │   │   ├── document-currentscript.js
    │   │   │   │   ├── document-evaluate-xpath.js
    │   │   │   │   ├── document-execcommand.js
    │   │   │   │   ├── document-policy.js
    │   │   │   │   ├── document-scrollingelement.js
    │   │   │   │   ├── documenthead.js
    │   │   │   │   ├── dom-manip-convenience.js
    │   │   │   │   ├── dom-range.js
    │   │   │   │   ├── domcontentloaded.js
    │   │   │   │   ├── dommatrix.js
    │   │   │   │   ├── download.js
    │   │   │   │   ├── dragndrop.js
    │   │   │   │   ├── element-closest.js
    │   │   │   │   ├── element-from-point.js
    │   │   │   │   ├── element-scroll-methods.js
    │   │   │   │   ├── eme.js
    │   │   │   │   ├── eot.js
    │   │   │   │   ├── es5.js
    │   │   │   │   ├── es6-class.js
    │   │   │   │   ├── es6-generators.js
    │   │   │   │   ├── es6-module-dynamic-import.js
    │   │   │   │   ├── es6-module.js
    │   │   │   │   ├── es6-number.js
    │   │   │   │   ├── es6-string-includes.js
    │   │   │   │   ├── es6.js
    │   │   │   │   ├── eventsource.js
    │   │   │   │   ├── extended-system-fonts.js
    │   │   │   │   ├── feature-policy.js
    │   │   │   │   ├── fetch.js
    │   │   │   │   ├── fieldset-disabled.js
    │   │   │   │   ├── fileapi.js
    │   │   │   │   ├── filereader.js
    │   │   │   │   ├── filereadersync.js
    │   │   │   │   ├── filesystem.js
    │   │   │   │   ├── flac.js
    │   │   │   │   ├── flexbox-gap.js
    │   │   │   │   ├── flexbox.js
    │   │   │   │   ├── flow-root.js
    │   │   │   │   ├── focusin-focusout-events.js
    │   │   │   │   ├── font-family-system-ui.js
    │   │   │   │   ├── font-feature.js
    │   │   │   │   ├── font-kerning.js
    │   │   │   │   ├── font-loading.js
    │   │   │   │   ├── font-size-adjust.js
    │   │   │   │   ├── font-smooth.js
    │   │   │   │   ├── font-unicode-range.js
    │   │   │   │   ├── font-variant-alternates.js
    │   │   │   │   ├── font-variant-numeric.js
    │   │   │   │   ├── fontface.js
    │   │   │   │   ├── form-attribute.js
    │   │   │   │   ├── form-submit-attributes.js
    │   │   │   │   ├── form-validation.js
    │   │   │   │   ├── forms.js
    │   │   │   │   ├── fullscreen.js
    │   │   │   │   ├── gamepad.js
    │   │   │   │   ├── geolocation.js
    │   │   │   │   ├── getboundingclientrect.js
    │   │   │   │   ├── getcomputedstyle.js
    │   │   │   │   ├── getelementsbyclassname.js
    │   │   │   │   ├── getrandomvalues.js
    │   │   │   │   ├── gyroscope.js
    │   │   │   │   ├── hardwareconcurrency.js
    │   │   │   │   ├── hashchange.js
    │   │   │   │   ├── heif.js
    │   │   │   │   ├── hevc.js
    │   │   │   │   ├── hidden.js
    │   │   │   │   ├── high-resolution-time.js
    │   │   │   │   ├── history.js
    │   │   │   │   ├── html-media-capture.js
    │   │   │   │   ├── html5semantic.js
    │   │   │   │   ├── http-live-streaming.js
    │   │   │   │   ├── http2.js
    │   │   │   │   ├── http3.js
    │   │   │   │   ├── iframe-sandbox.js
    │   │   │   │   ├── iframe-seamless.js
    │   │   │   │   ├── iframe-srcdoc.js
    │   │   │   │   ├── imagecapture.js
    │   │   │   │   ├── ime.js
    │   │   │   │   ├── img-naturalwidth-naturalheight.js
    │   │   │   │   ├── import-maps.js
    │   │   │   │   ├── imports.js
    │   │   │   │   ├── indeterminate-checkbox.js
    │   │   │   │   ├── indexeddb.js
    │   │   │   │   ├── indexeddb2.js
    │   │   │   │   ├── inline-block.js
    │   │   │   │   ├── innertext.js
    │   │   │   │   ├── input-autocomplete-onoff.js
    │   │   │   │   ├── input-color.js
    │   │   │   │   ├── input-datetime.js
    │   │   │   │   ├── input-email-tel-url.js
    │   │   │   │   ├── input-event.js
    │   │   │   │   ├── input-file-accept.js
    │   │   │   │   ├── input-file-directory.js
    │   │   │   │   ├── input-file-multiple.js
    │   │   │   │   ├── input-inputmode.js
    │   │   │   │   ├── input-minlength.js
    │   │   │   │   ├── input-number.js
    │   │   │   │   ├── input-pattern.js
    │   │   │   │   ├── input-placeholder.js
    │   │   │   │   ├── input-range.js
    │   │   │   │   ├── input-search.js
    │   │   │   │   ├── input-selection.js
    │   │   │   │   ├── insert-adjacent.js
    │   │   │   │   ├── insertadjacenthtml.js
    │   │   │   │   ├── internationalization.js
    │   │   │   │   ├── intersectionobserver-v2.js
    │   │   │   │   ├── intersectionobserver.js
    │   │   │   │   ├── intl-pluralrules.js
    │   │   │   │   ├── intrinsic-width.js
    │   │   │   │   ├── jpeg2000.js
    │   │   │   │   ├── jpegxl.js
    │   │   │   │   ├── jpegxr.js
    │   │   │   │   ├── js-regexp-lookbehind.js
    │   │   │   │   ├── json.js
    │   │   │   │   ├── justify-content-space-evenly.js
    │   │   │   │   ├── kerning-pairs-ligatures.js
    │   │   │   │   ├── keyboardevent-charcode.js
    │   │   │   │   ├── keyboardevent-code.js
    │   │   │   │   ├── keyboardevent-getmodifierstate.js
    │   │   │   │   ├── keyboardevent-key.js
    │   │   │   │   ├── keyboardevent-location.js
    │   │   │   │   ├── keyboardevent-which.js
    │   │   │   │   ├── lazyload.js
    │   │   │   │   ├── let.js
    │   │   │   │   ├── link-icon-png.js
    │   │   │   │   ├── link-icon-svg.js
    │   │   │   │   ├── link-rel-dns-prefetch.js
    │   │   │   │   ├── link-rel-modulepreload.js
    │   │   │   │   ├── link-rel-preconnect.js
    │   │   │   │   ├── link-rel-prefetch.js
    │   │   │   │   ├── link-rel-preload.js
    │   │   │   │   ├── link-rel-prerender.js
    │   │   │   │   ├── loading-lazy-attr.js
    │   │   │   │   ├── localecompare.js
    │   │   │   │   ├── magnetometer.js
    │   │   │   │   ├── matchesselector.js
    │   │   │   │   ├── matchmedia.js
    │   │   │   │   ├── mathml.js
    │   │   │   │   ├── maxlength.js
    │   │   │   │   ├── mdn-css-backdrop-pseudo-element.js
    │   │   │   │   ├── mdn-css-unicode-bidi-isolate-override.js
    │   │   │   │   ├── mdn-css-unicode-bidi-isolate.js
    │   │   │   │   ├── mdn-css-unicode-bidi-plaintext.js
    │   │   │   │   ├── mdn-text-decoration-color.js
    │   │   │   │   ├── mdn-text-decoration-line.js
    │   │   │   │   ├── mdn-text-decoration-shorthand.js
    │   │   │   │   ├── mdn-text-decoration-style.js
    │   │   │   │   ├── media-fragments.js
    │   │   │   │   ├── mediacapture-fromelement.js
    │   │   │   │   ├── mediarecorder.js
    │   │   │   │   ├── mediasource.js
    │   │   │   │   ├── menu.js
    │   │   │   │   ├── meta-theme-color.js
    │   │   │   │   ├── meter.js
    │   │   │   │   ├── midi.js
    │   │   │   │   ├── minmaxwh.js
    │   │   │   │   ├── mp3.js
    │   │   │   │   ├── mpeg-dash.js
    │   │   │   │   ├── mpeg4.js
    │   │   │   │   ├── multibackgrounds.js
    │   │   │   │   ├── multicolumn.js
    │   │   │   │   ├── mutation-events.js
    │   │   │   │   ├── mutationobserver.js
    │   │   │   │   ├── namevalue-storage.js
    │   │   │   │   ├── native-filesystem-api.js
    │   │   │   │   ├── nav-timing.js
    │   │   │   │   ├── netinfo.js
    │   │   │   │   ├── notifications.js
    │   │   │   │   ├── object-entries.js
    │   │   │   │   ├── object-fit.js
    │   │   │   │   ├── object-observe.js
    │   │   │   │   ├── object-values.js
    │   │   │   │   ├── objectrtc.js
    │   │   │   │   ├── offline-apps.js
    │   │   │   │   ├── offscreencanvas.js
    │   │   │   │   ├── ogg-vorbis.js
    │   │   │   │   ├── ogv.js
    │   │   │   │   ├── ol-reversed.js
    │   │   │   │   ├── once-event-listener.js
    │   │   │   │   ├── online-status.js
    │   │   │   │   ├── opus.js
    │   │   │   │   ├── orientation-sensor.js
    │   │   │   │   ├── outline.js
    │   │   │   │   ├── pad-start-end.js
    │   │   │   │   ├── page-transition-events.js
    │   │   │   │   ├── pagevisibility.js
    │   │   │   │   ├── passive-event-listener.js
    │   │   │   │   ├── passkeys.js
    │   │   │   │   ├── passwordrules.js
    │   │   │   │   ├── path2d.js
    │   │   │   │   ├── payment-request.js
    │   │   │   │   ├── pdf-viewer.js
    │   │   │   │   ├── permissions-api.js
    │   │   │   │   ├── permissions-policy.js
    │   │   │   │   ├── picture-in-picture.js
    │   │   │   │   ├── picture.js
    │   │   │   │   ├── ping.js
    │   │   │   │   ├── png-alpha.js
    │   │   │   │   ├── pointer-events.js
    │   │   │   │   ├── pointer.js
    │   │   │   │   ├── pointerlock.js
    │   │   │   │   ├── portals.js
    │   │   │   │   ├── prefers-color-scheme.js
    │   │   │   │   ├── prefers-reduced-motion.js
    │   │   │   │   ├── progress.js
    │   │   │   │   ├── promise-finally.js
    │   │   │   │   ├── promises.js
    │   │   │   │   ├── proximity.js
    │   │   │   │   ├── proxy.js
    │   │   │   │   ├── publickeypinning.js
    │   │   │   │   ├── push-api.js
    │   │   │   │   ├── queryselector.js
    │   │   │   │   ├── readonly-attr.js
    │   │   │   │   ├── referrer-policy.js
    │   │   │   │   ├── registerprotocolhandler.js
    │   │   │   │   ├── rel-noopener.js
    │   │   │   │   ├── rel-noreferrer.js
    │   │   │   │   ├── rellist.js
    │   │   │   │   ├── rem.js
    │   │   │   │   ├── requestanimationframe.js
    │   │   │   │   ├── requestidlecallback.js
    │   │   │   │   ├── resizeobserver.js
    │   │   │   │   ├── resource-timing.js
    │   │   │   │   ├── rest-parameters.js
    │   │   │   │   ├── rtcpeerconnection.js
    │   │   │   │   ├── ruby.js
    │   │   │   │   ├── run-in.js
    │   │   │   │   ├── same-site-cookie-attribute.js
    │   │   │   │   ├── screen-orientation.js
    │   │   │   │   ├── script-async.js
    │   │   │   │   ├── script-defer.js
    │   │   │   │   ├── scrollintoview.js
    │   │   │   │   ├── scrollintoviewifneeded.js
    │   │   │   │   ├── sdch.js
    │   │   │   │   ├── selection-api.js
    │   │   │   │   ├── selectlist.js
    │   │   │   │   ├── server-timing.js
    │   │   │   │   ├── serviceworkers.js
    │   │   │   │   ├── setimmediate.js
    │   │   │   │   ├── shadowdom.js
    │   │   │   │   ├── shadowdomv1.js
    │   │   │   │   ├── sharedarraybuffer.js
    │   │   │   │   ├── sharedworkers.js
    │   │   │   │   ├── sni.js
    │   │   │   │   ├── spdy.js
    │   │   │   │   ├── speech-recognition.js
    │   │   │   │   ├── speech-synthesis.js
    │   │   │   │   ├── spellcheck-attribute.js
    │   │   │   │   ├── sql-storage.js
    │   │   │   │   ├── srcset.js
    │   │   │   │   ├── stream.js
    │   │   │   │   ├── streams.js
    │   │   │   │   ├── stricttransportsecurity.js
    │   │   │   │   ├── style-scoped.js
    │   │   │   │   ├── subresource-bundling.js
    │   │   │   │   ├── subresource-integrity.js
    │   │   │   │   ├── svg-css.js
    │   │   │   │   ├── svg-filters.js
    │   │   │   │   ├── svg-fonts.js
    │   │   │   │   ├── svg-fragment.js
    │   │   │   │   ├── svg-html.js
    │   │   │   │   ├── svg-html5.js
    │   │   │   │   ├── svg-img.js
    │   │   │   │   ├── svg-smil.js
    │   │   │   │   ├── svg.js
    │   │   │   │   ├── sxg.js
    │   │   │   │   ├── tabindex-attr.js
    │   │   │   │   ├── template-literals.js
    │   │   │   │   ├── template.js
    │   │   │   │   ├── temporal.js
    │   │   │   │   ├── testfeat.js
    │   │   │   │   ├── text-decoration.js
    │   │   │   │   ├── text-emphasis.js
    │   │   │   │   ├── text-overflow.js
    │   │   │   │   ├── text-size-adjust.js
    │   │   │   │   ├── text-stroke.js
    │   │   │   │   ├── textcontent.js
    │   │   │   │   ├── textencoder.js
    │   │   │   │   ├── tls1-1.js
    │   │   │   │   ├── tls1-2.js
    │   │   │   │   ├── tls1-3.js
    │   │   │   │   ├── touch.js
    │   │   │   │   ├── transforms2d.js
    │   │   │   │   ├── transforms3d.js
    │   │   │   │   ├── trusted-types.js
    │   │   │   │   ├── ttf.js
    │   │   │   │   ├── typedarrays.js
    │   │   │   │   ├── u2f.js
    │   │   │   │   ├── unhandledrejection.js
    │   │   │   │   ├── upgradeinsecurerequests.js
    │   │   │   │   ├── url-scroll-to-text-fragment.js
    │   │   │   │   ├── url.js
    │   │   │   │   ├── urlsearchparams.js
    │   │   │   │   ├── use-strict.js
    │   │   │   │   ├── user-select-none.js
    │   │   │   │   ├── user-timing.js
    │   │   │   │   ├── variable-fonts.js
    │   │   │   │   ├── vector-effect.js
    │   │   │   │   ├── vibration.js
    │   │   │   │   ├── video.js
    │   │   │   │   ├── videotracks.js
    │   │   │   │   ├── view-transitions.js
    │   │   │   │   ├── viewport-unit-variants.js
    │   │   │   │   ├── viewport-units.js
    │   │   │   │   ├── wai-aria.js
    │   │   │   │   ├── wake-lock.js
    │   │   │   │   ├── wasm-bigint.js
    │   │   │   │   ├── wasm-bulk-memory.js
    │   │   │   │   ├── wasm-extended-const.js
    │   │   │   │   ├── wasm-gc.js
    │   │   │   │   ├── wasm-multi-memory.js
    │   │   │   │   ├── wasm-multi-value.js
    │   │   │   │   ├── wasm-mutable-globals.js
    │   │   │   │   ├── wasm-nontrapping-fptoint.js
    │   │   │   │   ├── wasm-reference-types.js
    │   │   │   │   ├── wasm-relaxed-simd.js
    │   │   │   │   ├── wasm-signext.js
    │   │   │   │   ├── wasm-simd.js
    │   │   │   │   ├── wasm-tail-calls.js
    │   │   │   │   ├── wasm-threads.js
    │   │   │   │   ├── wasm.js
    │   │   │   │   ├── wav.js
    │   │   │   │   ├── wbr-element.js
    │   │   │   │   ├── web-animation.js
    │   │   │   │   ├── web-app-manifest.js
    │   │   │   │   ├── web-bluetooth.js
    │   │   │   │   ├── web-serial.js
    │   │   │   │   ├── web-share.js
    │   │   │   │   ├── webauthn.js
    │   │   │   │   ├── webcodecs.js
    │   │   │   │   ├── webgl.js
    │   │   │   │   ├── webgl2.js
    │   │   │   │   ├── webgpu.js
    │   │   │   │   ├── webhid.js
    │   │   │   │   ├── webkit-user-drag.js
    │   │   │   │   ├── webm.js
    │   │   │   │   ├── webnfc.js
    │   │   │   │   ├── webp.js
    │   │   │   │   ├── websockets.js
    │   │   │   │   ├── webtransport.js
    │   │   │   │   ├── webusb.js
    │   │   │   │   ├── webvr.js
    │   │   │   │   ├── webvtt.js
    │   │   │   │   ├── webworkers.js
    │   │   │   │   ├── webxr.js
    │   │   │   │   ├── will-change.js
    │   │   │   │   ├── woff.js
    │   │   │   │   ├── woff2.js
    │   │   │   │   ├── word-break.js
    │   │   │   │   ├── wordwrap.js
    │   │   │   │   ├── x-doc-messaging.js
    │   │   │   │   ├── x-frame-options.js
    │   │   │   │   ├── xhr2.js
    │   │   │   │   ├── xhtml.js
    │   │   │   │   ├── xhtmlsmil.js
    │   │   │   │   ├── xml-serializer.js
    │   │   │   │   └── zstd.js
    │   │   │   ├── regions/
    │   │   │   │   ├── AD.js
    │   │   │   │   ├── AE.js
    │   │   │   │   ├── AF.js
    │   │   │   │   ├── AG.js
    │   │   │   │   ├── AI.js
    │   │   │   │   ├── AL.js
    │   │   │   │   ├── alt-af.js
    │   │   │   │   ├── alt-an.js
    │   │   │   │   ├── alt-as.js
    │   │   │   │   ├── alt-eu.js
    │   │   │   │   ├── alt-na.js
    │   │   │   │   ├── alt-oc.js
    │   │   │   │   ├── alt-sa.js
    │   │   │   │   ├── alt-ww.js
    │   │   │   │   ├── AM.js
    │   │   │   │   ├── AO.js
    │   │   │   │   ├── AR.js
    │   │   │   │   ├── AS.js
    │   │   │   │   ├── AT.js
    │   │   │   │   ├── AU.js
    │   │   │   │   ├── AW.js
    │   │   │   │   ├── AX.js
    │   │   │   │   ├── AZ.js
    │   │   │   │   ├── BA.js
    │   │   │   │   ├── BB.js
    │   │   │   │   ├── BD.js
    │   │   │   │   ├── BE.js
    │   │   │   │   ├── BF.js
    │   │   │   │   ├── BG.js
    │   │   │   │   ├── BH.js
    │   │   │   │   ├── BI.js
    │   │   │   │   ├── BJ.js
    │   │   │   │   ├── BM.js
    │   │   │   │   ├── BN.js
    │   │   │   │   ├── BO.js
    │   │   │   │   ├── BR.js
    │   │   │   │   ├── BS.js
    │   │   │   │   ├── BT.js
    │   │   │   │   ├── BW.js
    │   │   │   │   ├── BY.js
    │   │   │   │   ├── BZ.js
    │   │   │   │   ├── CA.js
    │   │   │   │   ├── CD.js
    │   │   │   │   ├── CF.js
    │   │   │   │   ├── CG.js
    │   │   │   │   ├── CH.js
    │   │   │   │   ├── CI.js
    │   │   │   │   ├── CK.js
    │   │   │   │   ├── CL.js
    │   │   │   │   ├── CM.js
    │   │   │   │   ├── CN.js
    │   │   │   │   ├── CO.js
    │   │   │   │   ├── CR.js
    │   │   │   │   ├── CU.js
    │   │   │   │   ├── CV.js
    │   │   │   │   ├── CX.js
    │   │   │   │   ├── CY.js
    │   │   │   │   ├── CZ.js
    │   │   │   │   ├── DE.js
    │   │   │   │   ├── DJ.js
    │   │   │   │   ├── DK.js
    │   │   │   │   ├── DM.js
    │   │   │   │   ├── DO.js
    │   │   │   │   ├── DZ.js
    │   │   │   │   ├── EC.js
    │   │   │   │   ├── EE.js
    │   │   │   │   ├── EG.js
    │   │   │   │   ├── ER.js
    │   │   │   │   ├── ES.js
    │   │   │   │   ├── ET.js
    │   │   │   │   ├── FI.js
    │   │   │   │   ├── FJ.js
    │   │   │   │   ├── FK.js
    │   │   │   │   ├── FM.js
    │   │   │   │   ├── FO.js
    │   │   │   │   ├── FR.js
    │   │   │   │   ├── GA.js
    │   │   │   │   ├── GB.js
    │   │   │   │   ├── GD.js
    │   │   │   │   ├── GE.js
    │   │   │   │   ├── GF.js
    │   │   │   │   ├── GG.js
    │   │   │   │   ├── GH.js
    │   │   │   │   ├── GI.js
    │   │   │   │   ├── GL.js
    │   │   │   │   ├── GM.js
    │   │   │   │   ├── GN.js
    │   │   │   │   ├── GP.js
    │   │   │   │   ├── GQ.js
    │   │   │   │   ├── GR.js
    │   │   │   │   ├── GT.js
    │   │   │   │   ├── GU.js
    │   │   │   │   ├── GW.js
    │   │   │   │   ├── GY.js
    │   │   │   │   ├── HK.js
    │   │   │   │   ├── HN.js
    │   │   │   │   ├── HR.js
    │   │   │   │   ├── HT.js
    │   │   │   │   ├── HU.js
    │   │   │   │   ├── ID.js
    │   │   │   │   ├── IE.js
    │   │   │   │   ├── IL.js
    │   │   │   │   ├── IM.js
    │   │   │   │   ├── IN.js
    │   │   │   │   ├── IQ.js
    │   │   │   │   ├── IR.js
    │   │   │   │   ├── IS.js
    │   │   │   │   ├── IT.js
    │   │   │   │   ├── JE.js
    │   │   │   │   ├── JM.js
    │   │   │   │   ├── JO.js
    │   │   │   │   ├── JP.js
    │   │   │   │   ├── KE.js
    │   │   │   │   ├── KG.js
    │   │   │   │   ├── KH.js
    │   │   │   │   ├── KI.js
    │   │   │   │   ├── KM.js
    │   │   │   │   ├── KN.js
    │   │   │   │   ├── KP.js
    │   │   │   │   ├── KR.js
    │   │   │   │   ├── KW.js
    │   │   │   │   ├── KY.js
    │   │   │   │   ├── KZ.js
    │   │   │   │   ├── LA.js
    │   │   │   │   ├── LB.js
    │   │   │   │   ├── LC.js
    │   │   │   │   ├── LI.js
    │   │   │   │   ├── LK.js
    │   │   │   │   ├── LR.js
    │   │   │   │   ├── LS.js
    │   │   │   │   ├── LT.js
    │   │   │   │   ├── LU.js
    │   │   │   │   ├── LV.js
    │   │   │   │   ├── LY.js
    │   │   │   │   ├── MA.js
    │   │   │   │   ├── MC.js
    │   │   │   │   ├── MD.js
    │   │   │   │   ├── ME.js
    │   │   │   │   ├── MG.js
    │   │   │   │   ├── MH.js
    │   │   │   │   ├── MK.js
    │   │   │   │   ├── ML.js
    │   │   │   │   ├── MM.js
    │   │   │   │   ├── MN.js
    │   │   │   │   ├── MO.js
    │   │   │   │   ├── MP.js
    │   │   │   │   ├── MQ.js
    │   │   │   │   ├── MR.js
    │   │   │   │   ├── MS.js
    │   │   │   │   ├── MT.js
    │   │   │   │   ├── MU.js
    │   │   │   │   ├── MV.js
    │   │   │   │   ├── MW.js
    │   │   │   │   ├── MX.js
    │   │   │   │   ├── MY.js
    │   │   │   │   ├── MZ.js
    │   │   │   │   ├── NA.js
    │   │   │   │   ├── NC.js
    │   │   │   │   ├── NE.js
    │   │   │   │   ├── NF.js
    │   │   │   │   ├── NG.js
    │   │   │   │   ├── NI.js
    │   │   │   │   ├── NL.js
    │   │   │   │   ├── NO.js
    │   │   │   │   ├── NP.js
    │   │   │   │   ├── NR.js
    │   │   │   │   ├── NU.js
    │   │   │   │   ├── NZ.js
    │   │   │   │   ├── OM.js
    │   │   │   │   ├── PA.js
    │   │   │   │   ├── PE.js
    │   │   │   │   ├── PF.js
    │   │   │   │   ├── PG.js
    │   │   │   │   ├── PH.js
    │   │   │   │   ├── PK.js
    │   │   │   │   ├── PL.js
    │   │   │   │   ├── PM.js
    │   │   │   │   ├── PN.js
    │   │   │   │   ├── PR.js
    │   │   │   │   ├── PS.js
    │   │   │   │   ├── PT.js
    │   │   │   │   ├── PW.js
    │   │   │   │   ├── PY.js
    │   │   │   │   ├── QA.js
    │   │   │   │   ├── RE.js
    │   │   │   │   ├── RO.js
    │   │   │   │   ├── RS.js
    │   │   │   │   ├── RU.js
    │   │   │   │   ├── RW.js
    │   │   │   │   ├── SA.js
    │   │   │   │   ├── SB.js
    │   │   │   │   ├── SC.js
    │   │   │   │   ├── SD.js
    │   │   │   │   ├── SE.js
    │   │   │   │   ├── SG.js
    │   │   │   │   ├── SH.js
    │   │   │   │   ├── SI.js
    │   │   │   │   ├── SK.js
    │   │   │   │   ├── SL.js
    │   │   │   │   ├── SM.js
    │   │   │   │   ├── SN.js
    │   │   │   │   ├── SO.js
    │   │   │   │   ├── SR.js
    │   │   │   │   ├── ST.js
    │   │   │   │   ├── SV.js
    │   │   │   │   ├── SY.js
    │   │   │   │   ├── SZ.js
    │   │   │   │   ├── TC.js
    │   │   │   │   ├── TD.js
    │   │   │   │   ├── TG.js
    │   │   │   │   ├── TH.js
    │   │   │   │   ├── TJ.js
    │   │   │   │   ├── TL.js
    │   │   │   │   ├── TM.js
    │   │   │   │   ├── TN.js
    │   │   │   │   ├── TO.js
    │   │   │   │   ├── TR.js
    │   │   │   │   ├── TT.js
    │   │   │   │   ├── TV.js
    │   │   │   │   ├── TW.js
    │   │   │   │   ├── TZ.js
    │   │   │   │   ├── UA.js
    │   │   │   │   ├── UG.js
    │   │   │   │   ├── US.js
    │   │   │   │   ├── UY.js
    │   │   │   │   ├── UZ.js
    │   │   │   │   ├── VA.js
    │   │   │   │   ├── VC.js
    │   │   │   │   ├── VE.js
    │   │   │   │   ├── VG.js
    │   │   │   │   ├── VI.js
    │   │   │   │   ├── VN.js
    │   │   │   │   ├── VU.js
    │   │   │   │   ├── WF.js
    │   │   │   │   ├── WS.js
    │   │   │   │   ├── YE.js
    │   │   │   │   ├── YT.js
    │   │   │   │   ├── ZA.js
    │   │   │   │   ├── ZM.js
    │   │   │   │   └── ZW.js
    │   │   │   ├── agents.js
    │   │   │   ├── browsers.js
    │   │   │   ├── browserVersions.js
    │   │   │   └── features.js
    │   │   ├── dist/
    │   │   │   ├── lib/
    │   │   │   │   ├── statuses.js
    │   │   │   │   └── supported.js
    │   │   │   └── unpacker/
    │   │   │       ├── agents.js
    │   │   │       ├── browsers.js
    │   │   │       ├── browserVersions.js
    │   │   │       ├── feature.js
    │   │   │       ├── features.js
    │   │   │       ├── index.js
    │   │   │       └── region.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── chalk/
    │   │   ├── source/
    │   │   │   ├── index.js
    │   │   │   ├── templates.js
    │   │   │   └── util.js
    │   │   ├── index.d.ts
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── chokidar/
    │   │   ├── lib/
    │   │   │   ├── constants.js
    │   │   │   ├── fsevents-handler.js
    │   │   │   └── nodefs-handler.js
    │   │   ├── node_modules/
    │   │   │   └── glob-parent/
    │   │   │       ├── CHANGELOG.md
    │   │   │       ├── index.js
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── types/
    │   │   │   └── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── clsx/
    │   │   ├── dist/
    │   │   │   ├── clsx.js
    │   │   │   ├── clsx.min.js
    │   │   │   ├── clsx.mjs
    │   │   │   ├── lite.js
    │   │   │   └── lite.mjs
    │   │   ├── clsx.d.mts
    │   │   ├── clsx.d.ts
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── color-convert/
    │   │   ├── CHANGELOG.md
    │   │   ├── conversions.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── route.js
    │   ├── color-name/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── combined-stream/
    │   │   ├── lib/
    │   │   │   └── combined_stream.js
    │   │   ├── License
    │   │   ├── package.json
    │   │   ├── Readme.md
    │   │   └── yarn.lock
    │   ├── commander/
    │   │   ├── typings/
    │   │   │   └── index.d.ts
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── concat-map/
    │   │   ├── example/
    │   │   │   └── map.js
    │   │   ├── test/
    │   │   │   └── map.js
    │   │   ├── .travis.yml
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.markdown
    │   ├── convert-source-map/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── cookie/
    │   │   ├── dist/
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── index.js.map
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── cross-spawn/
    │   │   ├── lib/
    │   │   │   ├── util/
    │   │   │   │   ├── escape.js
    │   │   │   │   ├── readShebang.js
    │   │   │   │   └── resolveCommand.js
    │   │   │   ├── enoent.js
    │   │   │   └── parse.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── cssesc/
    │   │   ├── bin/
    │   │   │   └── cssesc
    │   │   ├── man/
    │   │   │   └── cssesc.1
    │   │   ├── cssesc.js
    │   │   ├── LICENSE-MIT.txt
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── csstype/
    │   │   ├── index.d.ts
    │   │   ├── index.js.flow
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── debug/
    │   │   ├── src/
    │   │   │   ├── browser.js
    │   │   │   ├── common.js
    │   │   │   ├── index.js
    │   │   │   └── node.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── deep-is/
    │   │   ├── example/
    │   │   │   └── cmp.js
    │   │   ├── test/
    │   │   │   ├── cmp.js
    │   │   │   ├── NaN.js
    │   │   │   └── neg-vs-pos-0.js
    │   │   ├── .travis.yml
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.markdown
    │   ├── delayed-stream/
    │   │   ├── lib/
    │   │   │   └── delayed_stream.js
    │   │   ├── .npmignore
    │   │   ├── License
    │   │   ├── Makefile
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── didyoumean/
    │   │   ├── didYouMean-1.2.1.js
    │   │   ├── didYouMean-1.2.1.min.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── dlv/
    │   │   ├── dist/
    │   │   │   ├── dlv.es.js
    │   │   │   ├── dlv.es.js.map
    │   │   │   ├── dlv.js
    │   │   │   ├── dlv.js.map
    │   │   │   ├── dlv.umd.js
    │   │   │   └── dlv.umd.js.map
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── dunder-proto/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   ├── get.js
    │   │   │   ├── index.js
    │   │   │   └── set.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── get.d.ts
    │   │   ├── get.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── set.d.ts
    │   │   ├── set.js
    │   │   └── tsconfig.json
    │   ├── eastasianwidth/
    │   │   ├── eastasianwidth.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── electron-to-chromium/
    │   │   ├── chromium-versions.js
    │   │   ├── chromium-versions.json
    │   │   ├── full-chromium-versions.js
    │   │   ├── full-chromium-versions.json
    │   │   ├── full-versions.js
    │   │   ├── full-versions.json
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── versions.js
    │   │   └── versions.json
    │   ├── emoji-regex/
    │   │   ├── es2015/
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── RGI_Emoji.d.ts
    │   │   │   ├── RGI_Emoji.js
    │   │   │   ├── text.d.ts
    │   │   │   └── text.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE-MIT.txt
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── RGI_Emoji.d.ts
    │   │   ├── RGI_Emoji.js
    │   │   ├── text.d.ts
    │   │   └── text.js
    │   ├── es-define-property/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── tsconfig.json
    │   ├── es-errors/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── CHANGELOG.md
    │   │   ├── eval.d.ts
    │   │   ├── eval.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── range.d.ts
    │   │   ├── range.js
    │   │   ├── README.md
    │   │   ├── ref.d.ts
    │   │   ├── ref.js
    │   │   ├── syntax.d.ts
    │   │   ├── syntax.js
    │   │   ├── tsconfig.json
    │   │   ├── type.d.ts
    │   │   ├── type.js
    │   │   ├── uri.d.ts
    │   │   └── uri.js
    │   ├── es-object-atoms/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── isObject.d.ts
    │   │   ├── isObject.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── RequireObjectCoercible.d.ts
    │   │   ├── RequireObjectCoercible.js
    │   │   ├── ToObject.d.ts
    │   │   ├── ToObject.js
    │   │   └── tsconfig.json
    │   ├── es-set-tostringtag/
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── tsconfig.json
    │   ├── esbuild/
    │   │   ├── bin/
    │   │   │   └── esbuild
    │   │   ├── lib/
    │   │   │   ├── main.d.ts
    │   │   │   └── main.js
    │   │   ├── install.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── escalade/
    │   │   ├── dist/
    │   │   │   ├── index.js
    │   │   │   └── index.mjs
    │   │   ├── sync/
    │   │   │   ├── index.d.mts
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── index.mjs
    │   │   ├── index.d.mts
    │   │   ├── index.d.ts
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── escape-string-regexp/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── eslint/
    │   │   ├── bin/
    │   │   │   └── eslint.js
    │   │   ├── conf/
    │   │   │   ├── default-cli-options.js
    │   │   │   ├── ecma-version.js
    │   │   │   ├── globals.js
    │   │   │   ├── replacements.json
    │   │   │   └── rule-type-list.json
    │   │   ├── lib/
    │   │   │   ├── cli-engine/
    │   │   │   │   ├── formatters/
    │   │   │   │   │   ├── formatters-meta.json
    │   │   │   │   │   ├── html.js
    │   │   │   │   │   ├── json-with-metadata.js
    │   │   │   │   │   ├── json.js
    │   │   │   │   │   └── stylish.js
    │   │   │   │   ├── cli-engine.js
    │   │   │   │   ├── file-enumerator.js
    │   │   │   │   ├── hash.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── lint-result-cache.js
    │   │   │   │   └── load-rules.js
    │   │   │   ├── config/
    │   │   │   │   ├── config-loader.js
    │   │   │   │   ├── config.js
    │   │   │   │   ├── default-config.js
    │   │   │   │   ├── flat-config-array.js
    │   │   │   │   └── flat-config-schema.js
    │   │   │   ├── eslint/
    │   │   │   │   ├── eslint-helpers.js
    │   │   │   │   ├── eslint.js
    │   │   │   │   ├── index.js
    │   │   │   │   └── legacy-eslint.js
    │   │   │   ├── languages/
    │   │   │   │   └── js/
    │   │   │   │       ├── source-code/
    │   │   │   │       │   ├── token-store/
    │   │   │   │       │   │   ├── backward-token-comment-cursor.js
    │   │   │   │       │   │   ├── backward-token-cursor.js
    │   │   │   │       │   │   ├── cursor.js
    │   │   │   │       │   │   ├── cursors.js
    │   │   │   │       │   │   ├── decorative-cursor.js
    │   │   │   │       │   │   ├── filter-cursor.js
    │   │   │   │       │   │   ├── forward-token-comment-cursor.js
    │   │   │   │       │   │   ├── forward-token-cursor.js
    │   │   │   │       │   │   ├── index.js
    │   │   │   │       │   │   ├── limit-cursor.js
    │   │   │   │       │   │   ├── padded-token-cursor.js
    │   │   │   │       │   │   ├── skip-cursor.js
    │   │   │   │       │   │   └── utils.js
    │   │   │   │       │   ├── index.js
    │   │   │   │       │   └── source-code.js
    │   │   │   │       ├── index.js
    │   │   │   │       └── validate-language-options.js
    │   │   │   ├── linter/
    │   │   │   │   ├── code-path-analysis/
    │   │   │   │   │   ├── code-path-analyzer.js
    │   │   │   │   │   ├── code-path-segment.js
    │   │   │   │   │   ├── code-path-state.js
    │   │   │   │   │   ├── code-path.js
    │   │   │   │   │   ├── debug-helpers.js
    │   │   │   │   │   ├── fork-context.js
    │   │   │   │   │   └── id-generator.js
    │   │   │   │   ├── apply-disable-directives.js
    │   │   │   │   ├── esquery.js
    │   │   │   │   ├── file-context.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── interpolate.js
    │   │   │   │   ├── linter.js
    │   │   │   │   ├── report-translator.js
    │   │   │   │   ├── rule-fixer.js
    │   │   │   │   ├── rules.js
    │   │   │   │   ├── source-code-fixer.js
    │   │   │   │   ├── source-code-traverser.js
    │   │   │   │   ├── source-code-visitor.js
    │   │   │   │   ├── timing.js
    │   │   │   │   └── vfile.js
    │   │   │   ├── rule-tester/
    │   │   │   │   ├── index.js
    │   │   │   │   └── rule-tester.js
    │   │   │   ├── rules/
    │   │   │   │   ├── utils/
    │   │   │   │   │   ├── unicode/
    │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   ├── is-combining-character.js
    │   │   │   │   │   │   ├── is-emoji-modifier.js
    │   │   │   │   │   │   ├── is-regional-indicator-symbol.js
    │   │   │   │   │   │   └── is-surrogate-pair.js
    │   │   │   │   │   ├── ast-utils.js
    │   │   │   │   │   ├── char-source.js
    │   │   │   │   │   ├── fix-tracker.js
    │   │   │   │   │   ├── keywords.js
    │   │   │   │   │   ├── lazy-loading-rule-map.js
    │   │   │   │   │   └── regular-expressions.js
    │   │   │   │   ├── accessor-pairs.js
    │   │   │   │   ├── array-bracket-newline.js
    │   │   │   │   ├── array-bracket-spacing.js
    │   │   │   │   ├── array-callback-return.js
    │   │   │   │   ├── array-element-newline.js
    │   │   │   │   ├── arrow-body-style.js
    │   │   │   │   ├── arrow-parens.js
    │   │   │   │   ├── arrow-spacing.js
    │   │   │   │   ├── block-scoped-var.js
    │   │   │   │   ├── block-spacing.js
    │   │   │   │   ├── brace-style.js
    │   │   │   │   ├── callback-return.js
    │   │   │   │   ├── camelcase.js
    │   │   │   │   ├── capitalized-comments.js
    │   │   │   │   ├── class-methods-use-this.js
    │   │   │   │   ├── comma-dangle.js
    │   │   │   │   ├── comma-spacing.js
    │   │   │   │   ├── comma-style.js
    │   │   │   │   ├── complexity.js
    │   │   │   │   ├── computed-property-spacing.js
    │   │   │   │   ├── consistent-return.js
    │   │   │   │   ├── consistent-this.js
    │   │   │   │   ├── constructor-super.js
    │   │   │   │   ├── curly.js
    │   │   │   │   ├── default-case-last.js
    │   │   │   │   ├── default-case.js
    │   │   │   │   ├── default-param-last.js
    │   │   │   │   ├── dot-location.js
    │   │   │   │   ├── dot-notation.js
    │   │   │   │   ├── eol-last.js
    │   │   │   │   ├── eqeqeq.js
    │   │   │   │   ├── for-direction.js
    │   │   │   │   ├── func-call-spacing.js
    │   │   │   │   ├── func-name-matching.js
    │   │   │   │   ├── func-names.js
    │   │   │   │   ├── func-style.js
    │   │   │   │   ├── function-call-argument-newline.js
    │   │   │   │   ├── function-paren-newline.js
    │   │   │   │   ├── generator-star-spacing.js
    │   │   │   │   ├── getter-return.js
    │   │   │   │   ├── global-require.js
    │   │   │   │   ├── grouped-accessor-pairs.js
    │   │   │   │   ├── guard-for-in.js
    │   │   │   │   ├── handle-callback-err.js
    │   │   │   │   ├── id-blacklist.js
    │   │   │   │   ├── id-denylist.js
    │   │   │   │   ├── id-length.js
    │   │   │   │   ├── id-match.js
    │   │   │   │   ├── implicit-arrow-linebreak.js
    │   │   │   │   ├── indent-legacy.js
    │   │   │   │   ├── indent.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── init-declarations.js
    │   │   │   │   ├── jsx-quotes.js
    │   │   │   │   ├── key-spacing.js
    │   │   │   │   ├── keyword-spacing.js
    │   │   │   │   ├── line-comment-position.js
    │   │   │   │   ├── linebreak-style.js
    │   │   │   │   ├── lines-around-comment.js
    │   │   │   │   ├── lines-around-directive.js
    │   │   │   │   ├── lines-between-class-members.js
    │   │   │   │   ├── logical-assignment-operators.js
    │   │   │   │   ├── max-classes-per-file.js
    │   │   │   │   ├── max-depth.js
    │   │   │   │   ├── max-len.js
    │   │   │   │   ├── max-lines-per-function.js
    │   │   │   │   ├── max-lines.js
    │   │   │   │   ├── max-nested-callbacks.js
    │   │   │   │   ├── max-params.js
    │   │   │   │   ├── max-statements-per-line.js
    │   │   │   │   ├── max-statements.js
    │   │   │   │   ├── multiline-comment-style.js
    │   │   │   │   ├── multiline-ternary.js
    │   │   │   │   ├── new-cap.js
    │   │   │   │   ├── new-parens.js
    │   │   │   │   ├── newline-after-var.js
    │   │   │   │   ├── newline-before-return.js
    │   │   │   │   ├── newline-per-chained-call.js
    │   │   │   │   ├── no-alert.js
    │   │   │   │   ├── no-array-constructor.js
    │   │   │   │   ├── no-async-promise-executor.js
    │   │   │   │   ├── no-await-in-loop.js
    │   │   │   │   ├── no-bitwise.js
    │   │   │   │   ├── no-buffer-constructor.js
    │   │   │   │   ├── no-caller.js
    │   │   │   │   ├── no-case-declarations.js
    │   │   │   │   ├── no-catch-shadow.js
    │   │   │   │   ├── no-class-assign.js
    │   │   │   │   ├── no-compare-neg-zero.js
    │   │   │   │   ├── no-cond-assign.js
    │   │   │   │   ├── no-confusing-arrow.js
    │   │   │   │   ├── no-console.js
    │   │   │   │   ├── no-const-assign.js
    │   │   │   │   ├── no-constant-binary-expression.js
    │   │   │   │   ├── no-constant-condition.js
    │   │   │   │   ├── no-constructor-return.js
    │   │   │   │   ├── no-continue.js
    │   │   │   │   ├── no-control-regex.js
    │   │   │   │   ├── no-debugger.js
    │   │   │   │   ├── no-delete-var.js
    │   │   │   │   ├── no-div-regex.js
    │   │   │   │   ├── no-dupe-args.js
    │   │   │   │   ├── no-dupe-class-members.js
    │   │   │   │   ├── no-dupe-else-if.js
    │   │   │   │   ├── no-dupe-keys.js
    │   │   │   │   ├── no-duplicate-case.js
    │   │   │   │   ├── no-duplicate-imports.js
    │   │   │   │   ├── no-else-return.js
    │   │   │   │   ├── no-empty-character-class.js
    │   │   │   │   ├── no-empty-function.js
    │   │   │   │   ├── no-empty-pattern.js
    │   │   │   │   ├── no-empty-static-block.js
    │   │   │   │   ├── no-empty.js
    │   │   │   │   ├── no-eq-null.js
    │   │   │   │   ├── no-eval.js
    │   │   │   │   ├── no-ex-assign.js
    │   │   │   │   ├── no-extend-native.js
    │   │   │   │   ├── no-extra-bind.js
    │   │   │   │   ├── no-extra-boolean-cast.js
    │   │   │   │   ├── no-extra-label.js
    │   │   │   │   ├── no-extra-parens.js
    │   │   │   │   ├── no-extra-semi.js
    │   │   │   │   ├── no-fallthrough.js
    │   │   │   │   ├── no-floating-decimal.js
    │   │   │   │   ├── no-func-assign.js
    │   │   │   │   ├── no-global-assign.js
    │   │   │   │   ├── no-implicit-coercion.js
    │   │   │   │   ├── no-implicit-globals.js
    │   │   │   │   ├── no-implied-eval.js
    │   │   │   │   ├── no-import-assign.js
    │   │   │   │   ├── no-inline-comments.js
    │   │   │   │   ├── no-inner-declarations.js
    │   │   │   │   ├── no-invalid-regexp.js
    │   │   │   │   ├── no-invalid-this.js
    │   │   │   │   ├── no-irregular-whitespace.js
    │   │   │   │   ├── no-iterator.js
    │   │   │   │   ├── no-label-var.js
    │   │   │   │   ├── no-labels.js
    │   │   │   │   ├── no-lone-blocks.js
    │   │   │   │   ├── no-lonely-if.js
    │   │   │   │   ├── no-loop-func.js
    │   │   │   │   ├── no-loss-of-precision.js
    │   │   │   │   ├── no-magic-numbers.js
    │   │   │   │   ├── no-misleading-character-class.js
    │   │   │   │   ├── no-mixed-operators.js
    │   │   │   │   ├── no-mixed-requires.js
    │   │   │   │   ├── no-mixed-spaces-and-tabs.js
    │   │   │   │   ├── no-multi-assign.js
    │   │   │   │   ├── no-multi-spaces.js
    │   │   │   │   ├── no-multi-str.js
    │   │   │   │   ├── no-multiple-empty-lines.js
    │   │   │   │   ├── no-native-reassign.js
    │   │   │   │   ├── no-negated-condition.js
    │   │   │   │   ├── no-negated-in-lhs.js
    │   │   │   │   ├── no-nested-ternary.js
    │   │   │   │   ├── no-new-func.js
    │   │   │   │   ├── no-new-native-nonconstructor.js
    │   │   │   │   ├── no-new-object.js
    │   │   │   │   ├── no-new-require.js
    │   │   │   │   ├── no-new-symbol.js
    │   │   │   │   ├── no-new-wrappers.js
    │   │   │   │   ├── no-new.js
    │   │   │   │   ├── no-nonoctal-decimal-escape.js
    │   │   │   │   ├── no-obj-calls.js
    │   │   │   │   ├── no-object-constructor.js
    │   │   │   │   ├── no-octal-escape.js
    │   │   │   │   ├── no-octal.js
    │   │   │   │   ├── no-param-reassign.js
    │   │   │   │   ├── no-path-concat.js
    │   │   │   │   ├── no-plusplus.js
    │   │   │   │   ├── no-process-env.js
    │   │   │   │   ├── no-process-exit.js
    │   │   │   │   ├── no-promise-executor-return.js
    │   │   │   │   ├── no-proto.js
    │   │   │   │   ├── no-prototype-builtins.js
    │   │   │   │   ├── no-redeclare.js
    │   │   │   │   ├── no-regex-spaces.js
    │   │   │   │   ├── no-restricted-exports.js
    │   │   │   │   ├── no-restricted-globals.js
    │   │   │   │   ├── no-restricted-imports.js
    │   │   │   │   ├── no-restricted-modules.js
    │   │   │   │   ├── no-restricted-properties.js
    │   │   │   │   ├── no-restricted-syntax.js
    │   │   │   │   ├── no-return-assign.js
    │   │   │   │   ├── no-return-await.js
    │   │   │   │   ├── no-script-url.js
    │   │   │   │   ├── no-self-assign.js
    │   │   │   │   ├── no-self-compare.js
    │   │   │   │   ├── no-sequences.js
    │   │   │   │   ├── no-setter-return.js
    │   │   │   │   ├── no-shadow-restricted-names.js
    │   │   │   │   ├── no-shadow.js
    │   │   │   │   ├── no-spaced-func.js
    │   │   │   │   ├── no-sparse-arrays.js
    │   │   │   │   ├── no-sync.js
    │   │   │   │   ├── no-tabs.js
    │   │   │   │   ├── no-template-curly-in-string.js
    │   │   │   │   ├── no-ternary.js
    │   │   │   │   ├── no-this-before-super.js
    │   │   │   │   ├── no-throw-literal.js
    │   │   │   │   ├── no-trailing-spaces.js
    │   │   │   │   ├── no-unassigned-vars.js
    │   │   │   │   ├── no-undef-init.js
    │   │   │   │   ├── no-undef.js
    │   │   │   │   ├── no-undefined.js
    │   │   │   │   ├── no-underscore-dangle.js
    │   │   │   │   ├── no-unexpected-multiline.js
    │   │   │   │   ├── no-unmodified-loop-condition.js
    │   │   │   │   ├── no-unneeded-ternary.js
    │   │   │   │   ├── no-unreachable-loop.js
    │   │   │   │   ├── no-unreachable.js
    │   │   │   │   ├── no-unsafe-finally.js
    │   │   │   │   ├── no-unsafe-negation.js
    │   │   │   │   ├── no-unsafe-optional-chaining.js
    │   │   │   │   ├── no-unused-expressions.js
    │   │   │   │   ├── no-unused-labels.js
    │   │   │   │   ├── no-unused-private-class-members.js
    │   │   │   │   ├── no-unused-vars.js
    │   │   │   │   ├── no-use-before-define.js
    │   │   │   │   ├── no-useless-assignment.js
    │   │   │   │   ├── no-useless-backreference.js
    │   │   │   │   ├── no-useless-call.js
    │   │   │   │   ├── no-useless-catch.js
    │   │   │   │   ├── no-useless-computed-key.js
    │   │   │   │   ├── no-useless-concat.js
    │   │   │   │   ├── no-useless-constructor.js
    │   │   │   │   ├── no-useless-escape.js
    │   │   │   │   ├── no-useless-rename.js
    │   │   │   │   ├── no-useless-return.js
    │   │   │   │   ├── no-var.js
    │   │   │   │   ├── no-void.js
    │   │   │   │   ├── no-warning-comments.js
    │   │   │   │   ├── no-whitespace-before-property.js
    │   │   │   │   ├── no-with.js
    │   │   │   │   ├── nonblock-statement-body-position.js
    │   │   │   │   ├── object-curly-newline.js
    │   │   │   │   ├── object-curly-spacing.js
    │   │   │   │   ├── object-property-newline.js
    │   │   │   │   ├── object-shorthand.js
    │   │   │   │   ├── one-var-declaration-per-line.js
    │   │   │   │   ├── one-var.js
    │   │   │   │   ├── operator-assignment.js
    │   │   │   │   ├── operator-linebreak.js
    │   │   │   │   ├── padded-blocks.js
    │   │   │   │   ├── padding-line-between-statements.js
    │   │   │   │   ├── prefer-arrow-callback.js
    │   │   │   │   ├── prefer-const.js
    │   │   │   │   ├── prefer-destructuring.js
    │   │   │   │   ├── prefer-exponentiation-operator.js
    │   │   │   │   ├── prefer-named-capture-group.js
    │   │   │   │   ├── prefer-numeric-literals.js
    │   │   │   │   ├── prefer-object-has-own.js
    │   │   │   │   ├── prefer-object-spread.js
    │   │   │   │   ├── prefer-promise-reject-errors.js
    │   │   │   │   ├── prefer-reflect.js
    │   │   │   │   ├── prefer-regex-literals.js
    │   │   │   │   ├── prefer-rest-params.js
    │   │   │   │   ├── prefer-spread.js
    │   │   │   │   ├── prefer-template.js
    │   │   │   │   ├── quote-props.js
    │   │   │   │   ├── quotes.js
    │   │   │   │   ├── radix.js
    │   │   │   │   ├── require-atomic-updates.js
    │   │   │   │   ├── require-await.js
    │   │   │   │   ├── require-unicode-regexp.js
    │   │   │   │   ├── require-yield.js
    │   │   │   │   ├── rest-spread-spacing.js
    │   │   │   │   ├── semi-spacing.js
    │   │   │   │   ├── semi-style.js
    │   │   │   │   ├── semi.js
    │   │   │   │   ├── sort-imports.js
    │   │   │   │   ├── sort-keys.js
    │   │   │   │   ├── sort-vars.js
    │   │   │   │   ├── space-before-blocks.js
    │   │   │   │   ├── space-before-function-paren.js
    │   │   │   │   ├── space-in-parens.js
    │   │   │   │   ├── space-infix-ops.js
    │   │   │   │   ├── space-unary-ops.js
    │   │   │   │   ├── spaced-comment.js
    │   │   │   │   ├── strict.js
    │   │   │   │   ├── switch-colon-spacing.js
    │   │   │   │   ├── symbol-description.js
    │   │   │   │   ├── template-curly-spacing.js
    │   │   │   │   ├── template-tag-spacing.js
    │   │   │   │   ├── unicode-bom.js
    │   │   │   │   ├── use-isnan.js
    │   │   │   │   ├── valid-typeof.js
    │   │   │   │   ├── vars-on-top.js
    │   │   │   │   ├── wrap-iife.js
    │   │   │   │   ├── wrap-regex.js
    │   │   │   │   ├── yield-star-spacing.js
    │   │   │   │   └── yoda.js
    │   │   │   ├── services/
    │   │   │   │   ├── parser-service.js
    │   │   │   │   ├── processor-service.js
    │   │   │   │   ├── suppressions-service.js
    │   │   │   │   └── warning-service.js
    │   │   │   ├── shared/
    │   │   │   │   ├── ajv.js
    │   │   │   │   ├── assert.js
    │   │   │   │   ├── ast-utils.js
    │   │   │   │   ├── deep-merge-arrays.js
    │   │   │   │   ├── directives.js
    │   │   │   │   ├── flags.js
    │   │   │   │   ├── logging.js
    │   │   │   │   ├── naming.js
    │   │   │   │   ├── option-utils.js
    │   │   │   │   ├── relative-module-resolver.js
    │   │   │   │   ├── runtime-info.js
    │   │   │   │   ├── serialization.js
    │   │   │   │   ├── severity.js
    │   │   │   │   ├── stats.js
    │   │   │   │   ├── string-utils.js
    │   │   │   │   ├── text-table.js
    │   │   │   │   └── traverser.js
    │   │   │   ├── types/
    │   │   │   │   ├── config-api.d.ts
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── rules.d.ts
    │   │   │   │   ├── universal.d.ts
    │   │   │   │   └── use-at-your-own-risk.d.ts
    │   │   │   ├── api.js
    │   │   │   ├── cli.js
    │   │   │   ├── config-api.js
    │   │   │   ├── options.js
    │   │   │   ├── universal.js
    │   │   │   └── unsupported-api.js
    │   │   ├── messages/
    │   │   │   ├── all-files-ignored.js
    │   │   │   ├── all-matched-files-ignored.js
    │   │   │   ├── config-file-missing.js
    │   │   │   ├── config-plugin-missing.js
    │   │   │   ├── config-serialize-function.js
    │   │   │   ├── eslintrc-incompat.js
    │   │   │   ├── eslintrc-plugins.js
    │   │   │   ├── extend-config-missing.js
    │   │   │   ├── failed-to-read-json.js
    │   │   │   ├── file-not-found.js
    │   │   │   ├── invalid-rule-options.js
    │   │   │   ├── invalid-rule-severity.js
    │   │   │   ├── no-config-found.js
    │   │   │   ├── plugin-conflict.js
    │   │   │   ├── plugin-invalid.js
    │   │   │   ├── plugin-missing.js
    │   │   │   ├── print-config-with-directory-path.js
    │   │   │   ├── shared.js
    │   │   │   └── whitespace-found.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── eslint-plugin-react-hooks/
    │   │   ├── cjs/
    │   │   │   ├── eslint-plugin-react-hooks.d.ts
    │   │   │   ├── eslint-plugin-react-hooks.development.js
    │   │   │   └── eslint-plugin-react-hooks.production.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── eslint-plugin-react-refresh/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── eslint-scope/
    │   │   ├── dist/
    │   │   │   └── eslint-scope.cjs
    │   │   ├── lib/
    │   │   │   ├── assert.js
    │   │   │   ├── definition.js
    │   │   │   ├── index.js
    │   │   │   ├── pattern-visitor.js
    │   │   │   ├── reference.js
    │   │   │   ├── referencer.js
    │   │   │   ├── scope-manager.js
    │   │   │   ├── scope.js
    │   │   │   ├── variable.js
    │   │   │   └── version.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── eslint-visitor-keys/
    │   │   ├── dist/
    │   │   │   ├── eslint-visitor-keys.cjs
    │   │   │   ├── eslint-visitor-keys.d.cts
    │   │   │   ├── index.d.ts
    │   │   │   └── visitor-keys.d.ts
    │   │   ├── lib/
    │   │   │   ├── index.js
    │   │   │   └── visitor-keys.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── espree/
    │   │   ├── dist/
    │   │   │   └── espree.cjs
    │   │   ├── lib/
    │   │   │   ├── espree.js
    │   │   │   ├── features.js
    │   │   │   ├── options.js
    │   │   │   ├── token-translator.js
    │   │   │   └── version.js
    │   │   ├── espree.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── esquery/
    │   │   ├── dist/
    │   │   │   ├── esquery.esm.js
    │   │   │   ├── esquery.esm.min.js
    │   │   │   ├── esquery.esm.min.js.map
    │   │   │   ├── esquery.js
    │   │   │   ├── esquery.lite.js
    │   │   │   ├── esquery.lite.min.js
    │   │   │   ├── esquery.lite.min.js.map
    │   │   │   ├── esquery.min.js
    │   │   │   └── esquery.min.js.map
    │   │   ├── license.txt
    │   │   ├── package.json
    │   │   ├── parser.js
    │   │   └── README.md
    │   ├── esrecurse/
    │   │   ├── .babelrc
    │   │   ├── esrecurse.js
    │   │   ├── gulpfile.babel.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── estraverse/
    │   │   ├── .jshintrc
    │   │   ├── estraverse.js
    │   │   ├── gulpfile.js
    │   │   ├── LICENSE.BSD
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── esutils/
    │   │   ├── lib/
    │   │   │   ├── ast.js
    │   │   │   ├── code.js
    │   │   │   ├── keyword.js
    │   │   │   └── utils.js
    │   │   ├── LICENSE.BSD
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fast-deep-equal/
    │   │   ├── es6/
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── react.d.ts
    │   │   │   └── react.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── react.d.ts
    │   │   ├── react.js
    │   │   └── README.md
    │   ├── fast-glob/
    │   │   ├── node_modules/
    │   │   │   └── glob-parent/
    │   │   │       ├── CHANGELOG.md
    │   │   │       ├── index.js
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── out/
    │   │   │   ├── managers/
    │   │   │   │   ├── tasks.d.ts
    │   │   │   │   └── tasks.js
    │   │   │   ├── providers/
    │   │   │   │   ├── filters/
    │   │   │   │   │   ├── deep.d.ts
    │   │   │   │   │   ├── deep.js
    │   │   │   │   │   ├── entry.d.ts
    │   │   │   │   │   ├── entry.js
    │   │   │   │   │   ├── error.d.ts
    │   │   │   │   │   └── error.js
    │   │   │   │   ├── matchers/
    │   │   │   │   │   ├── matcher.d.ts
    │   │   │   │   │   ├── matcher.js
    │   │   │   │   │   ├── partial.d.ts
    │   │   │   │   │   └── partial.js
    │   │   │   │   ├── transformers/
    │   │   │   │   │   ├── entry.d.ts
    │   │   │   │   │   └── entry.js
    │   │   │   │   ├── async.d.ts
    │   │   │   │   ├── async.js
    │   │   │   │   ├── provider.d.ts
    │   │   │   │   ├── provider.js
    │   │   │   │   ├── stream.d.ts
    │   │   │   │   ├── stream.js
    │   │   │   │   ├── sync.d.ts
    │   │   │   │   └── sync.js
    │   │   │   ├── readers/
    │   │   │   │   ├── async.d.ts
    │   │   │   │   ├── async.js
    │   │   │   │   ├── reader.d.ts
    │   │   │   │   ├── reader.js
    │   │   │   │   ├── stream.d.ts
    │   │   │   │   ├── stream.js
    │   │   │   │   ├── sync.d.ts
    │   │   │   │   └── sync.js
    │   │   │   ├── types/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   └── index.js
    │   │   │   ├── utils/
    │   │   │   │   ├── array.d.ts
    │   │   │   │   ├── array.js
    │   │   │   │   ├── errno.d.ts
    │   │   │   │   ├── errno.js
    │   │   │   │   ├── fs.d.ts
    │   │   │   │   ├── fs.js
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── path.d.ts
    │   │   │   │   ├── path.js
    │   │   │   │   ├── pattern.d.ts
    │   │   │   │   ├── pattern.js
    │   │   │   │   ├── stream.d.ts
    │   │   │   │   ├── stream.js
    │   │   │   │   ├── string.d.ts
    │   │   │   │   └── string.js
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── settings.d.ts
    │   │   │   └── settings.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fast-json-stable-stringify/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── benchmark/
    │   │   │   ├── index.js
    │   │   │   └── test.json
    │   │   ├── example/
    │   │   │   ├── key_cmp.js
    │   │   │   ├── nested.js
    │   │   │   ├── str.js
    │   │   │   └── value_cmp.js
    │   │   ├── test/
    │   │   │   ├── cmp.js
    │   │   │   ├── nested.js
    │   │   │   ├── str.js
    │   │   │   └── to-json.js
    │   │   ├── .eslintrc.yml
    │   │   ├── .travis.yml
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fast-levenshtein/
    │   │   ├── levenshtein.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fastq/
    │   │   ├── .github/
    │   │   │   ├── workflows/
    │   │   │   │   └── ci.yml
    │   │   │   └── dependabot.yml
    │   │   ├── test/
    │   │   │   ├── example.ts
    │   │   │   ├── promise.js
    │   │   │   ├── test.js
    │   │   │   └── tsconfig.json
    │   │   ├── bench.js
    │   │   ├── example.js
    │   │   ├── example.mjs
    │   │   ├── index.d.ts
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── queue.js
    │   │   ├── README.md
    │   │   └── SECURITY.md
    │   ├── fdir/
    │   │   ├── dist/
    │   │   │   ├── api/
    │   │   │   │   ├── functions/
    │   │   │   │   │   ├── get-array.d.ts
    │   │   │   │   │   ├── get-array.js
    │   │   │   │   │   ├── group-files.d.ts
    │   │   │   │   │   ├── group-files.js
    │   │   │   │   │   ├── invoke-callback.d.ts
    │   │   │   │   │   ├── invoke-callback.js
    │   │   │   │   │   ├── join-path.d.ts
    │   │   │   │   │   ├── join-path.js
    │   │   │   │   │   ├── push-directory.d.ts
    │   │   │   │   │   ├── push-directory.js
    │   │   │   │   │   ├── push-file.d.ts
    │   │   │   │   │   ├── push-file.js
    │   │   │   │   │   ├── resolve-symlink.d.ts
    │   │   │   │   │   ├── resolve-symlink.js
    │   │   │   │   │   ├── walk-directory.d.ts
    │   │   │   │   │   └── walk-directory.js
    │   │   │   │   ├── async.d.ts
    │   │   │   │   ├── async.js
    │   │   │   │   ├── counter.d.ts
    │   │   │   │   ├── counter.js
    │   │   │   │   ├── queue.d.ts
    │   │   │   │   ├── queue.js
    │   │   │   │   ├── sync.d.ts
    │   │   │   │   ├── sync.js
    │   │   │   │   ├── walker.d.ts
    │   │   │   │   └── walker.js
    │   │   │   ├── builder/
    │   │   │   │   ├── api-builder.d.ts
    │   │   │   │   ├── api-builder.js
    │   │   │   │   ├── index.d.ts
    │   │   │   │   └── index.js
    │   │   │   ├── index.cjs
    │   │   │   ├── index.d.cts
    │   │   │   ├── index.d.mts
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.mjs
    │   │   │   ├── types.d.ts
    │   │   │   ├── types.js
    │   │   │   ├── utils.d.ts
    │   │   │   └── utils.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── file-entry-cache/
    │   │   ├── cache.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fill-range/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── find-up/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── flat-cache/
    │   │   ├── src/
    │   │   │   ├── cache.js
    │   │   │   ├── del.js
    │   │   │   └── utils.js
    │   │   ├── changelog.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── flatted/
    │   │   ├── cjs/
    │   │   │   ├── index.js
    │   │   │   └── package.json
    │   │   ├── esm/
    │   │   │   └── index.js
    │   │   ├── php/
    │   │   │   └── flatted.php
    │   │   ├── python/
    │   │   │   └── flatted.py
    │   │   ├── types/
    │   │   │   └── index.d.ts
    │   │   ├── es.js
    │   │   ├── esm.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── min.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── follow-redirects/
    │   │   ├── debug.js
    │   │   ├── http.js
    │   │   ├── https.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── foreground-child/
    │   │   ├── dist/
    │   │   │   ├── commonjs/
    │   │   │   │   ├── all-signals.d.ts
    │   │   │   │   ├── all-signals.d.ts.map
    │   │   │   │   ├── all-signals.js
    │   │   │   │   ├── all-signals.js.map
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── package.json
    │   │   │   │   ├── proxy-signals.d.ts
    │   │   │   │   ├── proxy-signals.d.ts.map
    │   │   │   │   ├── proxy-signals.js
    │   │   │   │   ├── proxy-signals.js.map
    │   │   │   │   ├── watchdog.d.ts
    │   │   │   │   ├── watchdog.d.ts.map
    │   │   │   │   ├── watchdog.js
    │   │   │   │   └── watchdog.js.map
    │   │   │   └── esm/
    │   │   │       ├── all-signals.d.ts
    │   │   │       ├── all-signals.d.ts.map
    │   │   │       ├── all-signals.js
    │   │   │       ├── all-signals.js.map
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── package.json
    │   │   │       ├── proxy-signals.d.ts
    │   │   │       ├── proxy-signals.d.ts.map
    │   │   │       ├── proxy-signals.js
    │   │   │       ├── proxy-signals.js.map
    │   │   │       ├── watchdog.d.ts
    │   │   │       ├── watchdog.d.ts.map
    │   │   │       ├── watchdog.js
    │   │   │       └── watchdog.js.map
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── form-data/
    │   │   ├── lib/
    │   │   │   ├── browser.js
    │   │   │   ├── form_data.js
    │   │   │   └── populate.js
    │   │   ├── index.d.ts
    │   │   ├── License
    │   │   ├── package.json
    │   │   ├── Readme.md
    │   │   └── README.md.bak
    │   ├── fraction.js/
    │   │   ├── bigfraction.js
    │   │   ├── fraction.cjs
    │   │   ├── fraction.d.ts
    │   │   ├── fraction.js
    │   │   ├── fraction.min.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── framer-motion/
    │   │   ├── client/
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   ├── client.js
    │   │   │   │   ├── create-C4jfsA_8.js
    │   │   │   │   ├── debug.js
    │   │   │   │   ├── dom-mini.js
    │   │   │   │   ├── dom.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── m.js
    │   │   │   │   └── mini.js
    │   │   │   ├── es/
    │   │   │   │   ├── animation/
    │   │   │   │   │   ├── animate/
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   ├── resolve-subjects.mjs
    │   │   │   │   │   │   ├── sequence.mjs
    │   │   │   │   │   │   ├── single-value.mjs
    │   │   │   │   │   │   └── subject.mjs
    │   │   │   │   │   ├── animators/
    │   │   │   │   │   │   └── waapi/
    │   │   │   │   │   │       ├── utils/
    │   │   │   │   │   │       │   └── get-final-keyframe.mjs
    │   │   │   │   │   │       ├── animate-elements.mjs
    │   │   │   │   │   │       ├── animate-sequence.mjs
    │   │   │   │   │   │       └── animate-style.mjs
    │   │   │   │   │   ├── hooks/
    │   │   │   │   │   │   ├── animation-controls.mjs
    │   │   │   │   │   │   ├── use-animate-style.mjs
    │   │   │   │   │   │   ├── use-animate.mjs
    │   │   │   │   │   │   ├── use-animated-state.mjs
    │   │   │   │   │   │   └── use-animation.mjs
    │   │   │   │   │   ├── interfaces/
    │   │   │   │   │   │   ├── motion-value.mjs
    │   │   │   │   │   │   ├── visual-element-target.mjs
    │   │   │   │   │   │   ├── visual-element-variant.mjs
    │   │   │   │   │   │   └── visual-element.mjs
    │   │   │   │   │   ├── optimized-appear/
    │   │   │   │   │   │   ├── data-id.mjs
    │   │   │   │   │   │   ├── get-appear-id.mjs
    │   │   │   │   │   │   ├── handoff.mjs
    │   │   │   │   │   │   ├── start.mjs
    │   │   │   │   │   │   ├── store-id.mjs
    │   │   │   │   │   │   └── store.mjs
    │   │   │   │   │   ├── sequence/
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── calc-repeat-duration.mjs
    │   │   │   │   │   │   │   ├── calc-time.mjs
    │   │   │   │   │   │   │   ├── edit.mjs
    │   │   │   │   │   │   │   ├── normalize-times.mjs
    │   │   │   │   │   │   │   └── sort.mjs
    │   │   │   │   │   │   └── create.mjs
    │   │   │   │   │   └── utils/
    │   │   │   │   │       ├── create-visual-element.mjs
    │   │   │   │   │       ├── default-transitions.mjs
    │   │   │   │   │       ├── is-animation-controls.mjs
    │   │   │   │   │       ├── is-dom-keyframes.mjs
    │   │   │   │   │       ├── is-keyframes-target.mjs
    │   │   │   │   │       ├── is-transition-defined.mjs
    │   │   │   │   │       └── stagger.mjs
    │   │   │   │   ├── components/
    │   │   │   │   │   ├── AnimatePresence/
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   ├── PopChild.mjs
    │   │   │   │   │   │   ├── PresenceChild.mjs
    │   │   │   │   │   │   ├── use-presence-data.mjs
    │   │   │   │   │   │   ├── use-presence.mjs
    │   │   │   │   │   │   └── utils.mjs
    │   │   │   │   │   ├── LayoutGroup/
    │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   ├── LazyMotion/
    │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   ├── MotionConfig/
    │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   ├── Reorder/
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   └── check-reorder.mjs
    │   │   │   │   │   │   ├── Group.mjs
    │   │   │   │   │   │   ├── Item.mjs
    │   │   │   │   │   │   └── namespace.mjs
    │   │   │   │   │   └── AnimateSharedLayout.mjs
    │   │   │   │   ├── context/
    │   │   │   │   │   ├── MotionContext/
    │   │   │   │   │   │   ├── create.mjs
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   └── utils.mjs
    │   │   │   │   │   ├── DeprecatedLayoutGroupContext.mjs
    │   │   │   │   │   ├── LayoutGroupContext.mjs
    │   │   │   │   │   ├── LazyContext.mjs
    │   │   │   │   │   ├── MotionConfigContext.mjs
    │   │   │   │   │   ├── PresenceContext.mjs
    │   │   │   │   │   ├── ReorderContext.mjs
    │   │   │   │   │   └── SwitchLayoutGroupContext.mjs
    │   │   │   │   ├── events/
    │   │   │   │   │   ├── add-dom-event.mjs
    │   │   │   │   │   ├── add-pointer-event.mjs
    │   │   │   │   │   ├── event-info.mjs
    │   │   │   │   │   └── use-dom-event.mjs
    │   │   │   │   ├── gestures/
    │   │   │   │   │   ├── drag/
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   └── constraints.mjs
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   ├── use-drag-controls.mjs
    │   │   │   │   │   │   └── VisualElementDragControls.mjs
    │   │   │   │   │   ├── pan/
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   └── PanSession.mjs
    │   │   │   │   │   ├── focus.mjs
    │   │   │   │   │   ├── hover.mjs
    │   │   │   │   │   └── press.mjs
    │   │   │   │   ├── motion/
    │   │   │   │   │   ├── features/
    │   │   │   │   │   │   ├── animation/
    │   │   │   │   │   │   │   ├── exit.mjs
    │   │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   │   ├── layout/
    │   │   │   │   │   │   │   └── MeasureLayout.mjs
    │   │   │   │   │   │   ├── viewport/
    │   │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   │   └── observers.mjs
    │   │   │   │   │   │   ├── animations.mjs
    │   │   │   │   │   │   ├── definitions.mjs
    │   │   │   │   │   │   ├── drag.mjs
    │   │   │   │   │   │   ├── Feature.mjs
    │   │   │   │   │   │   ├── gestures.mjs
    │   │   │   │   │   │   ├── layout.mjs
    │   │   │   │   │   │   └── load-features.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── is-forced-motion-value.mjs
    │   │   │   │   │   │   ├── is-motion-component.mjs
    │   │   │   │   │   │   ├── symbol.mjs
    │   │   │   │   │   │   ├── unwrap-motion-component.mjs
    │   │   │   │   │   │   ├── use-motion-ref.mjs
    │   │   │   │   │   │   ├── use-visual-element.mjs
    │   │   │   │   │   │   ├── use-visual-state.mjs
    │   │   │   │   │   │   └── valid-prop.mjs
    │   │   │   │   │   └── index.mjs
    │   │   │   │   ├── projection/
    │   │   │   │   │   ├── animation/
    │   │   │   │   │   │   └── mix-values.mjs
    │   │   │   │   │   ├── geometry/
    │   │   │   │   │   │   ├── conversion.mjs
    │   │   │   │   │   │   ├── copy.mjs
    │   │   │   │   │   │   ├── delta-apply.mjs
    │   │   │   │   │   │   ├── delta-calc.mjs
    │   │   │   │   │   │   ├── delta-remove.mjs
    │   │   │   │   │   │   ├── models.mjs
    │   │   │   │   │   │   └── utils.mjs
    │   │   │   │   │   ├── node/
    │   │   │   │   │   │   ├── create-projection-node.mjs
    │   │   │   │   │   │   ├── DocumentProjectionNode.mjs
    │   │   │   │   │   │   ├── group.mjs
    │   │   │   │   │   │   ├── HTMLProjectionNode.mjs
    │   │   │   │   │   │   └── state.mjs
    │   │   │   │   │   ├── shared/
    │   │   │   │   │   │   └── stack.mjs
    │   │   │   │   │   ├── styles/
    │   │   │   │   │   │   ├── scale-border-radius.mjs
    │   │   │   │   │   │   ├── scale-box-shadow.mjs
    │   │   │   │   │   │   ├── scale-correction.mjs
    │   │   │   │   │   │   └── transform.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── each-axis.mjs
    │   │   │   │   │   │   ├── has-transform.mjs
    │   │   │   │   │   │   └── measure.mjs
    │   │   │   │   │   ├── use-instant-layout-transition.mjs
    │   │   │   │   │   └── use-reset-projection.mjs
    │   │   │   │   ├── render/
    │   │   │   │   │   ├── components/
    │   │   │   │   │   │   ├── m/
    │   │   │   │   │   │   │   ├── create.mjs
    │   │   │   │   │   │   │   ├── elements.mjs
    │   │   │   │   │   │   │   └── proxy.mjs
    │   │   │   │   │   │   ├── motion/
    │   │   │   │   │   │   │   ├── create.mjs
    │   │   │   │   │   │   │   ├── elements.mjs
    │   │   │   │   │   │   │   └── proxy.mjs
    │   │   │   │   │   │   ├── create-factory.mjs
    │   │   │   │   │   │   └── create-proxy.mjs
    │   │   │   │   │   ├── dom/
    │   │   │   │   │   │   ├── scroll/
    │   │   │   │   │   │   │   ├── offsets/
    │   │   │   │   │   │   │   │   ├── edge.mjs
    │   │   │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   │   │   ├── inset.mjs
    │   │   │   │   │   │   │   │   ├── offset.mjs
    │   │   │   │   │   │   │   │   └── presets.mjs
    │   │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   │   └── get-timeline.mjs
    │   │   │   │   │   │   │   ├── attach-animation.mjs
    │   │   │   │   │   │   │   ├── attach-function.mjs
    │   │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   │   ├── info.mjs
    │   │   │   │   │   │   │   ├── on-scroll-handler.mjs
    │   │   │   │   │   │   │   └── track.mjs
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── camel-to-dash.mjs
    │   │   │   │   │   │   │   ├── filter-props.mjs
    │   │   │   │   │   │   │   └── is-svg-component.mjs
    │   │   │   │   │   │   ├── viewport/
    │   │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   │   ├── create-visual-element.mjs
    │   │   │   │   │   │   ├── DOMVisualElement.mjs
    │   │   │   │   │   │   ├── features-animation.mjs
    │   │   │   │   │   │   ├── features-max.mjs
    │   │   │   │   │   │   ├── features-min.mjs
    │   │   │   │   │   │   └── use-render.mjs
    │   │   │   │   │   ├── html/
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── build-styles.mjs
    │   │   │   │   │   │   │   ├── build-transform.mjs
    │   │   │   │   │   │   │   ├── create-render-state.mjs
    │   │   │   │   │   │   │   ├── render.mjs
    │   │   │   │   │   │   │   └── scrape-motion-values.mjs
    │   │   │   │   │   │   ├── config-motion.mjs
    │   │   │   │   │   │   ├── HTMLVisualElement.mjs
    │   │   │   │   │   │   └── use-props.mjs
    │   │   │   │   │   ├── object/
    │   │   │   │   │   │   └── ObjectVisualElement.mjs
    │   │   │   │   │   ├── svg/
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── build-attrs.mjs
    │   │   │   │   │   │   │   ├── camel-case-attrs.mjs
    │   │   │   │   │   │   │   ├── create-render-state.mjs
    │   │   │   │   │   │   │   ├── is-svg-tag.mjs
    │   │   │   │   │   │   │   ├── path.mjs
    │   │   │   │   │   │   │   ├── render.mjs
    │   │   │   │   │   │   │   └── scrape-motion-values.mjs
    │   │   │   │   │   │   ├── config-motion.mjs
    │   │   │   │   │   │   ├── lowercase-elements.mjs
    │   │   │   │   │   │   ├── SVGVisualElement.mjs
    │   │   │   │   │   │   └── use-props.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── animation-state.mjs
    │   │   │   │   │   │   ├── compare-by-depth.mjs
    │   │   │   │   │   │   ├── flat-tree.mjs
    │   │   │   │   │   │   ├── get-variant-context.mjs
    │   │   │   │   │   │   ├── is-controlling-variants.mjs
    │   │   │   │   │   │   ├── is-variant-label.mjs
    │   │   │   │   │   │   ├── motion-values.mjs
    │   │   │   │   │   │   ├── resolve-dynamic-variants.mjs
    │   │   │   │   │   │   ├── resolve-variants.mjs
    │   │   │   │   │   │   ├── setters.mjs
    │   │   │   │   │   │   └── variant-props.mjs
    │   │   │   │   │   ├── store.mjs
    │   │   │   │   │   └── VisualElement.mjs
    │   │   │   │   ├── utils/
    │   │   │   │   │   ├── reduced-motion/
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   ├── state.mjs
    │   │   │   │   │   │   ├── use-reduced-motion-config.mjs
    │   │   │   │   │   │   └── use-reduced-motion.mjs
    │   │   │   │   │   ├── delay.mjs
    │   │   │   │   │   ├── distance.mjs
    │   │   │   │   │   ├── get-context-window.mjs
    │   │   │   │   │   ├── is-browser.mjs
    │   │   │   │   │   ├── is-ref-object.mjs
    │   │   │   │   │   ├── shallow-compare.mjs
    │   │   │   │   │   ├── use-animation-frame.mjs
    │   │   │   │   │   ├── use-constant.mjs
    │   │   │   │   │   ├── use-cycle.mjs
    │   │   │   │   │   ├── use-force-update.mjs
    │   │   │   │   │   ├── use-in-view.mjs
    │   │   │   │   │   ├── use-instant-transition.mjs
    │   │   │   │   │   ├── use-is-mounted.mjs
    │   │   │   │   │   ├── use-isomorphic-effect.mjs
    │   │   │   │   │   ├── use-motion-value-event.mjs
    │   │   │   │   │   ├── use-page-in-view.mjs
    │   │   │   │   │   └── use-unmount-effect.mjs
    │   │   │   │   ├── value/
    │   │   │   │   │   ├── scroll/
    │   │   │   │   │   │   ├── use-element-scroll.mjs
    │   │   │   │   │   │   └── use-viewport-scroll.mjs
    │   │   │   │   │   ├── use-will-change/
    │   │   │   │   │   │   ├── add-will-change.mjs
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   ├── is.mjs
    │   │   │   │   │   │   └── WillChangeMotionValue.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   └── resolve-motion-value.mjs
    │   │   │   │   │   ├── use-combine-values.mjs
    │   │   │   │   │   ├── use-computed.mjs
    │   │   │   │   │   ├── use-inverted-scale.mjs
    │   │   │   │   │   ├── use-motion-template.mjs
    │   │   │   │   │   ├── use-motion-value.mjs
    │   │   │   │   │   ├── use-scroll.mjs
    │   │   │   │   │   ├── use-spring.mjs
    │   │   │   │   │   ├── use-time.mjs
    │   │   │   │   │   ├── use-transform.mjs
    │   │   │   │   │   └── use-velocity.mjs
    │   │   │   │   ├── client.mjs
    │   │   │   │   ├── debug.mjs
    │   │   │   │   ├── dom-mini.mjs
    │   │   │   │   ├── dom.mjs
    │   │   │   │   ├── index.mjs
    │   │   │   │   ├── m.mjs
    │   │   │   │   ├── mini.mjs
    │   │   │   │   └── projection.mjs
    │   │   │   ├── types/
    │   │   │   │   ├── client.d.ts
    │   │   │   │   └── index.d.ts
    │   │   │   ├── debug.d.ts
    │   │   │   ├── dom-mini.d.ts
    │   │   │   ├── dom-mini.js
    │   │   │   ├── dom.d.ts
    │   │   │   ├── dom.js
    │   │   │   ├── framer-motion.dev.js
    │   │   │   ├── framer-motion.js
    │   │   │   ├── m.d.ts
    │   │   │   ├── mini.d.ts
    │   │   │   ├── mini.js
    │   │   │   ├── size-rollup-animate.js
    │   │   │   ├── size-rollup-dom-animation-assets.js
    │   │   │   ├── size-rollup-dom-animation-m.js
    │   │   │   ├── size-rollup-dom-animation.js
    │   │   │   ├── size-rollup-dom-max-assets.js
    │   │   │   ├── size-rollup-dom-max.js
    │   │   │   ├── size-rollup-m.js
    │   │   │   ├── size-rollup-motion.js
    │   │   │   ├── size-rollup-scroll.js
    │   │   │   ├── size-rollup-waapi-animate.js
    │   │   │   └── types.d-BSoEx4Ea.d.ts
    │   │   ├── dom/
    │   │   │   ├── mini/
    │   │   │   │   └── package.json
    │   │   │   ├── package.json
    │   │   │   └── README.md
    │   │   ├── m/
    │   │   │   └── package.json
    │   │   ├── mini/
    │   │   │   └── package.json
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── function-bind/
    │   │   ├── .github/
    │   │   │   ├── FUNDING.yml
    │   │   │   └── SECURITY.md
    │   │   ├── test/
    │   │   │   ├── .eslintrc
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── implementation.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── gensync/
    │   │   ├── test/
    │   │   │   ├── .babelrc
    │   │   │   └── index.test.js
    │   │   ├── index.js
    │   │   ├── index.js.flow
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── get-intrinsic/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── GetIntrinsic.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── get-proto/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── Object.getPrototypeOf.d.ts
    │   │   ├── Object.getPrototypeOf.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── Reflect.getPrototypeOf.d.ts
    │   │   ├── Reflect.getPrototypeOf.js
    │   │   └── tsconfig.json
    │   ├── glob/
    │   │   ├── dist/
    │   │   │   ├── commonjs/
    │   │   │   │   ├── glob.d.ts
    │   │   │   │   ├── glob.d.ts.map
    │   │   │   │   ├── glob.js
    │   │   │   │   ├── glob.js.map
    │   │   │   │   ├── has-magic.d.ts
    │   │   │   │   ├── has-magic.d.ts.map
    │   │   │   │   ├── has-magic.js
    │   │   │   │   ├── has-magic.js.map
    │   │   │   │   ├── ignore.d.ts
    │   │   │   │   ├── ignore.d.ts.map
    │   │   │   │   ├── ignore.js
    │   │   │   │   ├── ignore.js.map
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── package.json
    │   │   │   │   ├── pattern.d.ts
    │   │   │   │   ├── pattern.d.ts.map
    │   │   │   │   ├── pattern.js
    │   │   │   │   ├── pattern.js.map
    │   │   │   │   ├── processor.d.ts
    │   │   │   │   ├── processor.d.ts.map
    │   │   │   │   ├── processor.js
    │   │   │   │   ├── processor.js.map
    │   │   │   │   ├── walker.d.ts
    │   │   │   │   ├── walker.d.ts.map
    │   │   │   │   ├── walker.js
    │   │   │   │   └── walker.js.map
    │   │   │   └── esm/
    │   │   │       ├── bin.d.mts
    │   │   │       ├── bin.d.mts.map
    │   │   │       ├── bin.mjs
    │   │   │       ├── bin.mjs.map
    │   │   │       ├── glob.d.ts
    │   │   │       ├── glob.d.ts.map
    │   │   │       ├── glob.js
    │   │   │       ├── glob.js.map
    │   │   │       ├── has-magic.d.ts
    │   │   │       ├── has-magic.d.ts.map
    │   │   │       ├── has-magic.js
    │   │   │       ├── has-magic.js.map
    │   │   │       ├── ignore.d.ts
    │   │   │       ├── ignore.d.ts.map
    │   │   │       ├── ignore.js
    │   │   │       ├── ignore.js.map
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── package.json
    │   │   │       ├── pattern.d.ts
    │   │   │       ├── pattern.d.ts.map
    │   │   │       ├── pattern.js
    │   │   │       ├── pattern.js.map
    │   │   │       ├── processor.d.ts
    │   │   │       ├── processor.d.ts.map
    │   │   │       ├── processor.js
    │   │   │       ├── processor.js.map
    │   │   │       ├── walker.d.ts
    │   │   │       ├── walker.d.ts.map
    │   │   │       ├── walker.js
    │   │   │       └── walker.js.map
    │   │   ├── node_modules/
    │   │   │   ├── brace-expansion/
    │   │   │   │   ├── .github/
    │   │   │   │   │   └── FUNDING.yml
    │   │   │   │   ├── index.js
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── package.json
    │   │   │   │   └── README.md
    │   │   │   └── minimatch/
    │   │   │       ├── dist/
    │   │   │       │   ├── commonjs/
    │   │   │       │   │   ├── assert-valid-pattern.d.ts
    │   │   │       │   │   ├── assert-valid-pattern.d.ts.map
    │   │   │       │   │   ├── assert-valid-pattern.js
    │   │   │       │   │   ├── assert-valid-pattern.js.map
    │   │   │       │   │   ├── ast.d.ts
    │   │   │       │   │   ├── ast.d.ts.map
    │   │   │       │   │   ├── ast.js
    │   │   │       │   │   ├── ast.js.map
    │   │   │       │   │   ├── brace-expressions.d.ts
    │   │   │       │   │   ├── brace-expressions.d.ts.map
    │   │   │       │   │   ├── brace-expressions.js
    │   │   │       │   │   ├── brace-expressions.js.map
    │   │   │       │   │   ├── escape.d.ts
    │   │   │       │   │   ├── escape.d.ts.map
    │   │   │       │   │   ├── escape.js
    │   │   │       │   │   ├── escape.js.map
    │   │   │       │   │   ├── index.d.ts
    │   │   │       │   │   ├── index.d.ts.map
    │   │   │       │   │   ├── index.js
    │   │   │       │   │   ├── index.js.map
    │   │   │       │   │   ├── package.json
    │   │   │       │   │   ├── unescape.d.ts
    │   │   │       │   │   ├── unescape.d.ts.map
    │   │   │       │   │   ├── unescape.js
    │   │   │       │   │   └── unescape.js.map
    │   │   │       │   └── esm/
    │   │   │       │       ├── assert-valid-pattern.d.ts
    │   │   │       │       ├── assert-valid-pattern.d.ts.map
    │   │   │       │       ├── assert-valid-pattern.js
    │   │   │       │       ├── assert-valid-pattern.js.map
    │   │   │       │       ├── ast.d.ts
    │   │   │       │       ├── ast.d.ts.map
    │   │   │       │       ├── ast.js
    │   │   │       │       ├── ast.js.map
    │   │   │       │       ├── brace-expressions.d.ts
    │   │   │       │       ├── brace-expressions.d.ts.map
    │   │   │       │       ├── brace-expressions.js
    │   │   │       │       ├── brace-expressions.js.map
    │   │   │       │       ├── escape.d.ts
    │   │   │       │       ├── escape.d.ts.map
    │   │   │       │       ├── escape.js
    │   │   │       │       ├── escape.js.map
    │   │   │       │       ├── index.d.ts
    │   │   │       │       ├── index.d.ts.map
    │   │   │       │       ├── index.js
    │   │   │       │       ├── index.js.map
    │   │   │       │       ├── package.json
    │   │   │       │       ├── unescape.d.ts
    │   │   │       │       ├── unescape.d.ts.map
    │   │   │       │       ├── unescape.js
    │   │   │       │       └── unescape.js.map
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── glob-parent/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── globals/
    │   │   ├── globals.json
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── gopd/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── CHANGELOG.md
    │   │   ├── gOPD.d.ts
    │   │   ├── gOPD.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── tsconfig.json
    │   ├── gsap/
    │   │   ├── dist/
    │   │   │   ├── all.js
    │   │   │   ├── CSSRulePlugin.js
    │   │   │   ├── CSSRulePlugin.min.js
    │   │   │   ├── CSSRulePlugin.min.js.map
    │   │   │   ├── CustomBounce.js
    │   │   │   ├── CustomBounce.min.js
    │   │   │   ├── CustomBounce.min.js.map
    │   │   │   ├── CustomEase.js
    │   │   │   ├── CustomEase.min.js
    │   │   │   ├── CustomEase.min.js.map
    │   │   │   ├── CustomWiggle.js
    │   │   │   ├── CustomWiggle.min.js
    │   │   │   ├── CustomWiggle.min.js.map
    │   │   │   ├── Draggable.js
    │   │   │   ├── Draggable.min.js
    │   │   │   ├── Draggable.min.js.map
    │   │   │   ├── DrawSVGPlugin.js
    │   │   │   ├── DrawSVGPlugin.min.js
    │   │   │   ├── DrawSVGPlugin.min.js.map
    │   │   │   ├── EaselPlugin.js
    │   │   │   ├── EaselPlugin.min.js
    │   │   │   ├── EaselPlugin.min.js.map
    │   │   │   ├── EasePack.js
    │   │   │   ├── EasePack.min.js
    │   │   │   ├── EasePack.min.js.map
    │   │   │   ├── Flip.js
    │   │   │   ├── Flip.min.js
    │   │   │   ├── Flip.min.js.map
    │   │   │   ├── gsap.js
    │   │   │   ├── gsap.min.js
    │   │   │   ├── gsap.min.js.map
    │   │   │   ├── GSDevTools.js
    │   │   │   ├── GSDevTools.min.js
    │   │   │   ├── GSDevTools.min.js.map
    │   │   │   ├── InertiaPlugin.js
    │   │   │   ├── InertiaPlugin.min.js
    │   │   │   ├── InertiaPlugin.min.js.map
    │   │   │   ├── MorphSVGPlugin.js
    │   │   │   ├── MorphSVGPlugin.min.js
    │   │   │   ├── MorphSVGPlugin.min.js.map
    │   │   │   ├── MotionPathHelper.js
    │   │   │   ├── MotionPathHelper.min.js
    │   │   │   ├── MotionPathHelper.min.js.map
    │   │   │   ├── MotionPathPlugin.js
    │   │   │   ├── MotionPathPlugin.min.js
    │   │   │   ├── MotionPathPlugin.min.js.map
    │   │   │   ├── Observer.js
    │   │   │   ├── Observer.min.js
    │   │   │   ├── Observer.min.js.map
    │   │   │   ├── Physics2DPlugin.js
    │   │   │   ├── Physics2DPlugin.min.js
    │   │   │   ├── Physics2DPlugin.min.js.map
    │   │   │   ├── PhysicsPropsPlugin.js
    │   │   │   ├── PhysicsPropsPlugin.min.js
    │   │   │   ├── PhysicsPropsPlugin.min.js.map
    │   │   │   ├── PixiPlugin.js
    │   │   │   ├── PixiPlugin.min.js
    │   │   │   ├── PixiPlugin.min.js.map
    │   │   │   ├── ScrambleTextPlugin.js
    │   │   │   ├── ScrambleTextPlugin.min.js
    │   │   │   ├── ScrambleTextPlugin.min.js.map
    │   │   │   ├── ScrollSmoother.js
    │   │   │   ├── ScrollSmoother.min.js
    │   │   │   ├── ScrollSmoother.min.js.map
    │   │   │   ├── ScrollToPlugin.js
    │   │   │   ├── ScrollToPlugin.min.js
    │   │   │   ├── ScrollToPlugin.min.js.map
    │   │   │   ├── ScrollTrigger.js
    │   │   │   ├── ScrollTrigger.min.js
    │   │   │   ├── ScrollTrigger.min.js.map
    │   │   │   ├── SplitText.js
    │   │   │   ├── SplitText.min.js
    │   │   │   ├── TextPlugin.js
    │   │   │   ├── TextPlugin.min.js
    │   │   │   └── TextPlugin.min.js.map
    │   │   ├── src/
    │   │   │   ├── utils/
    │   │   │   │   ├── matrix.js
    │   │   │   │   ├── PathEditor.js
    │   │   │   │   ├── paths.js
    │   │   │   │   ├── strings.js
    │   │   │   │   └── VelocityTracker.js
    │   │   │   ├── all.js
    │   │   │   ├── CSSPlugin.js
    │   │   │   ├── CSSRulePlugin.js
    │   │   │   ├── CustomBounce.js
    │   │   │   ├── CustomEase.js
    │   │   │   ├── CustomWiggle.js
    │   │   │   ├── Draggable.js
    │   │   │   ├── DrawSVGPlugin.js
    │   │   │   ├── EaselPlugin.js
    │   │   │   ├── EasePack.js
    │   │   │   ├── Flip.js
    │   │   │   ├── gsap-core.js
    │   │   │   ├── GSDevTools.js
    │   │   │   ├── index.js
    │   │   │   ├── InertiaPlugin.js
    │   │   │   ├── MorphSVGPlugin.js
    │   │   │   ├── MotionPathHelper.js
    │   │   │   ├── MotionPathPlugin.js
    │   │   │   ├── Observer.js
    │   │   │   ├── Physics2DPlugin.js
    │   │   │   ├── PhysicsPropsPlugin.js
    │   │   │   ├── PixiPlugin.js
    │   │   │   ├── ScrambleTextPlugin.js
    │   │   │   ├── ScrollSmoother.js
    │   │   │   ├── ScrollToPlugin.js
    │   │   │   ├── ScrollTrigger.js
    │   │   │   ├── SplitText.js
    │   │   │   ├── SplitText.ts
    │   │   │   └── TextPlugin.js
    │   │   ├── types/
    │   │   │   ├── utils/
    │   │   │   │   └── velocity-tracker.d.ts
    │   │   │   ├── animation.d.ts
    │   │   │   ├── css-plugin.d.ts
    │   │   │   ├── css-rule-plugin.d.ts
    │   │   │   ├── custom-bounce.d.ts
    │   │   │   ├── custom-ease.d.ts
    │   │   │   ├── custom-wiggle.d.ts
    │   │   │   ├── draggable.d.ts
    │   │   │   ├── draw-svg-plugin.d.ts
    │   │   │   ├── ease.d.ts
    │   │   │   ├── easel-plugin.d.ts
    │   │   │   ├── flip.d.ts
    │   │   │   ├── gs-dev-tools.d.ts
    │   │   │   ├── gsap-core.d.ts
    │   │   │   ├── gsap-plugins.d.ts
    │   │   │   ├── gsap-utils.d.ts
    │   │   │   ├── index.d.ts
    │   │   │   ├── inertia-plugin.d.ts
    │   │   │   ├── morph-svg-plugin.d.ts
    │   │   │   ├── motion-path-helper.d.ts
    │   │   │   ├── motion-path-plugin.d.ts
    │   │   │   ├── observer.d.ts
    │   │   │   ├── physics-2d-plugin.d.ts
    │   │   │   ├── physics-props-plugin.d.ts
    │   │   │   ├── pixi-plugin.d.ts
    │   │   │   ├── scramble-text-plugin.d.ts
    │   │   │   ├── scroll-smoother.d.ts
    │   │   │   ├── scroll-to-plugin.d.ts
    │   │   │   ├── scroll-trigger.d.ts
    │   │   │   ├── split-text.d.ts
    │   │   │   ├── text-plugin.d.ts
    │   │   │   ├── timeline.d.ts
    │   │   │   └── tween.d.ts
    │   │   ├── utils/
    │   │   │   ├── matrix.js
    │   │   │   ├── PathEditor.js
    │   │   │   ├── paths.js
    │   │   │   ├── strings.js
    │   │   │   └── VelocityTracker.js
    │   │   ├── all.js
    │   │   ├── CSSPlugin.js
    │   │   ├── CSSRulePlugin.js
    │   │   ├── CustomBounce.js
    │   │   ├── CustomEase.js
    │   │   ├── CustomWiggle.js
    │   │   ├── Draggable.js
    │   │   ├── DrawSVGPlugin.js
    │   │   ├── EaselPlugin.js
    │   │   ├── EasePack.js
    │   │   ├── Flip.js
    │   │   ├── gsap-core.js
    │   │   ├── GSDevTools.js
    │   │   ├── index.js
    │   │   ├── InertiaPlugin.js
    │   │   ├── MorphSVGPlugin.js
    │   │   ├── MotionPathHelper.js
    │   │   ├── MotionPathPlugin.js
    │   │   ├── Observer.js
    │   │   ├── package.json
    │   │   ├── Physics2DPlugin.js
    │   │   ├── PhysicsPropsPlugin.js
    │   │   ├── PixiPlugin.js
    │   │   ├── README.md
    │   │   ├── ScrambleTextPlugin.js
    │   │   ├── ScrollSmoother.js
    │   │   ├── ScrollToPlugin.js
    │   │   ├── ScrollTrigger.js
    │   │   ├── SECURITY.md
    │   │   ├── SplitText.js
    │   │   └── TextPlugin.js
    │   ├── has-flag/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── has-symbols/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   ├── shams/
    │   │   │   │   ├── core-js.js
    │   │   │   │   └── get-own-property-symbols.js
    │   │   │   ├── index.js
    │   │   │   └── tests.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── shams.d.ts
    │   │   ├── shams.js
    │   │   └── tsconfig.json
    │   ├── has-tostringtag/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   ├── shams/
    │   │   │   │   ├── core-js.js
    │   │   │   │   └── get-own-property-symbols.js
    │   │   │   ├── index.js
    │   │   │   └── tests.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── shams.d.ts
    │   │   ├── shams.js
    │   │   └── tsconfig.json
    │   ├── hasown/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── tsconfig.json
    │   ├── ignore/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── legacy.js
    │   │   ├── LICENSE-MIT
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── immer/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   ├── immer.cjs.development.js
    │   │   │   │   ├── immer.cjs.development.js.map
    │   │   │   │   ├── immer.cjs.production.js
    │   │   │   │   ├── immer.cjs.production.js.map
    │   │   │   │   ├── index.js
    │   │   │   │   └── index.js.flow
    │   │   │   ├── immer.d.ts
    │   │   │   ├── immer.legacy-esm.js
    │   │   │   ├── immer.legacy-esm.js.map
    │   │   │   ├── immer.mjs
    │   │   │   ├── immer.mjs.map
    │   │   │   ├── immer.production.mjs
    │   │   │   └── immer.production.mjs.map
    │   │   ├── src/
    │   │   │   ├── core/
    │   │   │   │   ├── current.ts
    │   │   │   │   ├── finalize.ts
    │   │   │   │   ├── immerClass.ts
    │   │   │   │   ├── proxy.ts
    │   │   │   │   └── scope.ts
    │   │   │   ├── plugins/
    │   │   │   │   ├── mapset.ts
    │   │   │   │   └── patches.ts
    │   │   │   ├── types/
    │   │   │   │   ├── globals.d.ts
    │   │   │   │   ├── index.js.flow
    │   │   │   │   ├── types-external.ts
    │   │   │   │   └── types-internal.ts
    │   │   │   ├── utils/
    │   │   │   │   ├── common.ts
    │   │   │   │   ├── env.ts
    │   │   │   │   ├── errors.ts
    │   │   │   │   └── plugins.ts
    │   │   │   ├── immer.ts
    │   │   │   └── internal.ts
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── import-fresh/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── imurmurhash/
    │   │   ├── imurmurhash.js
    │   │   ├── imurmurhash.min.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── is-binary-path/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── is-core-module/
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── CHANGELOG.md
    │   │   ├── core.json
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── is-extglob/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── is-fullwidth-code-point/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── is-glob/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── is-number/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── isexe/
    │   │   ├── test/
    │   │   │   └── basic.js
    │   │   ├── .npmignore
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── mode.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── windows.js
    │   ├── jackspeak/
    │   │   ├── dist/
    │   │   │   ├── commonjs/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── package.json
    │   │   │   │   ├── parse-args-cjs.cjs.map
    │   │   │   │   ├── parse-args-cjs.d.cts.map
    │   │   │   │   ├── parse-args.d.ts
    │   │   │   │   └── parse-args.js
    │   │   │   └── esm/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── package.json
    │   │   │       ├── parse-args.d.ts
    │   │   │       ├── parse-args.d.ts.map
    │   │   │       ├── parse-args.js
    │   │   │       └── parse-args.js.map
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── jiti/
    │   │   ├── bin/
    │   │   │   └── jiti.js
    │   │   ├── dist/
    │   │   │   ├── plugins/
    │   │   │   │   ├── babel-plugin-transform-import-meta.d.ts
    │   │   │   │   └── import-meta-env.d.ts
    │   │   │   ├── babel.d.ts
    │   │   │   ├── babel.js
    │   │   │   ├── jiti.d.ts
    │   │   │   ├── jiti.js
    │   │   │   ├── types.d.ts
    │   │   │   └── utils.d.ts
    │   │   ├── lib/
    │   │   │   └── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── register.js
    │   ├── js-tokens/
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── js-yaml/
    │   │   ├── bin/
    │   │   │   └── js-yaml.js
    │   │   ├── dist/
    │   │   │   ├── js-yaml.js
    │   │   │   ├── js-yaml.min.js
    │   │   │   └── js-yaml.mjs
    │   │   ├── lib/
    │   │   │   ├── schema/
    │   │   │   │   ├── core.js
    │   │   │   │   ├── default.js
    │   │   │   │   ├── failsafe.js
    │   │   │   │   └── json.js
    │   │   │   ├── type/
    │   │   │   │   ├── binary.js
    │   │   │   │   ├── bool.js
    │   │   │   │   ├── float.js
    │   │   │   │   ├── int.js
    │   │   │   │   ├── map.js
    │   │   │   │   ├── merge.js
    │   │   │   │   ├── null.js
    │   │   │   │   ├── omap.js
    │   │   │   │   ├── pairs.js
    │   │   │   │   ├── seq.js
    │   │   │   │   ├── set.js
    │   │   │   │   ├── str.js
    │   │   │   │   └── timestamp.js
    │   │   │   ├── common.js
    │   │   │   ├── dumper.js
    │   │   │   ├── exception.js
    │   │   │   ├── loader.js
    │   │   │   ├── schema.js
    │   │   │   ├── snippet.js
    │   │   │   └── type.js
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── jsesc/
    │   │   ├── bin/
    │   │   │   └── jsesc
    │   │   ├── man/
    │   │   │   └── jsesc.1
    │   │   ├── jsesc.js
    │   │   ├── LICENSE-MIT.txt
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── json-buffer/
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .travis.yml
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── json-schema-traverse/
    │   │   ├── spec/
    │   │   │   ├── fixtures/
    │   │   │   │   └── schema.js
    │   │   │   ├── .eslintrc.yml
    │   │   │   └── index.spec.js
    │   │   ├── .eslintrc.yml
    │   │   ├── .travis.yml
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── json-stable-stringify-without-jsonify/
    │   │   ├── example/
    │   │   │   ├── key_cmp.js
    │   │   │   ├── nested.js
    │   │   │   ├── str.js
    │   │   │   └── value_cmp.js
    │   │   ├── test/
    │   │   │   ├── cmp.js
    │   │   │   ├── nested.js
    │   │   │   ├── replacer.js
    │   │   │   ├── space.js
    │   │   │   ├── str.js
    │   │   │   └── to-json.js
    │   │   ├── .npmignore
    │   │   ├── .travis.yml
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── readme.markdown
    │   ├── json5/
    │   │   ├── dist/
    │   │   │   ├── index.js
    │   │   │   ├── index.min.js
    │   │   │   ├── index.min.mjs
    │   │   │   └── index.mjs
    │   │   ├── lib/
    │   │   │   ├── cli.js
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── parse.d.ts
    │   │   │   ├── parse.js
    │   │   │   ├── register.js
    │   │   │   ├── require.js
    │   │   │   ├── stringify.d.ts
    │   │   │   ├── stringify.js
    │   │   │   ├── unicode.d.ts
    │   │   │   ├── unicode.js
    │   │   │   ├── util.d.ts
    │   │   │   └── util.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── keyv/
    │   │   ├── src/
    │   │   │   ├── index.d.ts
    │   │   │   └── index.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── levn/
    │   │   ├── lib/
    │   │   │   ├── cast.js
    │   │   │   ├── index.js
    │   │   │   └── parse-string.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── lilconfig/
    │   │   ├── src/
    │   │   │   ├── index.d.ts
    │   │   │   └── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── lines-and-columns/
    │   │   ├── build/
    │   │   │   ├── index.d.ts
    │   │   │   └── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── locate-path/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── lodash.merge/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── lru-cache/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── math-intrinsics/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── constants/
    │   │   │   ├── maxArrayLength.d.ts
    │   │   │   ├── maxArrayLength.js
    │   │   │   ├── maxSafeInteger.d.ts
    │   │   │   ├── maxSafeInteger.js
    │   │   │   ├── maxValue.d.ts
    │   │   │   └── maxValue.js
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── abs.d.ts
    │   │   ├── abs.js
    │   │   ├── CHANGELOG.md
    │   │   ├── floor.d.ts
    │   │   ├── floor.js
    │   │   ├── isFinite.d.ts
    │   │   ├── isFinite.js
    │   │   ├── isInteger.d.ts
    │   │   ├── isInteger.js
    │   │   ├── isNaN.d.ts
    │   │   ├── isNaN.js
    │   │   ├── isNegativeZero.d.ts
    │   │   ├── isNegativeZero.js
    │   │   ├── LICENSE
    │   │   ├── max.d.ts
    │   │   ├── max.js
    │   │   ├── min.d.ts
    │   │   ├── min.js
    │   │   ├── mod.d.ts
    │   │   ├── mod.js
    │   │   ├── package.json
    │   │   ├── pow.d.ts
    │   │   ├── pow.js
    │   │   ├── README.md
    │   │   ├── round.d.ts
    │   │   ├── round.js
    │   │   ├── sign.d.ts
    │   │   ├── sign.js
    │   │   └── tsconfig.json
    │   ├── merge2/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── micromatch/
    │   │   ├── node_modules/
    │   │   │   └── picomatch/
    │   │   │       ├── lib/
    │   │   │       │   ├── constants.js
    │   │   │       │   ├── parse.js
    │   │   │       │   ├── picomatch.js
    │   │   │       │   ├── scan.js
    │   │   │       │   └── utils.js
    │   │   │       ├── CHANGELOG.md
    │   │   │       ├── index.js
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── mime-db/
    │   │   ├── db.json
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── mime-types/
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── minimatch/
    │   │   ├── LICENSE
    │   │   ├── minimatch.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── minipass/
    │   │   ├── dist/
    │   │   │   ├── commonjs/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   └── package.json
    │   │   │   └── esm/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       └── package.json
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── motion-dom/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   └── index.js
    │   │   │   ├── es/
    │   │   │   │   ├── animation/
    │   │   │   │   │   ├── drivers/
    │   │   │   │   │   │   └── frame.mjs
    │   │   │   │   │   ├── generators/
    │   │   │   │   │   │   ├── spring/
    │   │   │   │   │   │   │   ├── defaults.mjs
    │   │   │   │   │   │   │   ├── find.mjs
    │   │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── calc-duration.mjs
    │   │   │   │   │   │   │   ├── create-generator-easing.mjs
    │   │   │   │   │   │   │   ├── is-generator.mjs
    │   │   │   │   │   │   │   └── velocity.mjs
    │   │   │   │   │   │   ├── inertia.mjs
    │   │   │   │   │   │   └── keyframes.mjs
    │   │   │   │   │   ├── keyframes/
    │   │   │   │   │   │   ├── offsets/
    │   │   │   │   │   │   │   ├── default.mjs
    │   │   │   │   │   │   │   ├── fill.mjs
    │   │   │   │   │   │   │   └── time.mjs
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── apply-px-defaults.mjs
    │   │   │   │   │   │   │   ├── fill-wildcards.mjs
    │   │   │   │   │   │   │   ├── is-none.mjs
    │   │   │   │   │   │   │   ├── make-none-animatable.mjs
    │   │   │   │   │   │   │   └── unit-conversion.mjs
    │   │   │   │   │   │   ├── DOMKeyframesResolver.mjs
    │   │   │   │   │   │   ├── get-final.mjs
    │   │   │   │   │   │   └── KeyframesResolver.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── active-animations.mjs
    │   │   │   │   │   │   ├── can-animate.mjs
    │   │   │   │   │   │   ├── css-variables-conversion.mjs
    │   │   │   │   │   │   ├── get-value-transition.mjs
    │   │   │   │   │   │   ├── is-animatable.mjs
    │   │   │   │   │   │   ├── is-css-variable.mjs
    │   │   │   │   │   │   ├── replace-transition-type.mjs
    │   │   │   │   │   │   └── WithPromise.mjs
    │   │   │   │   │   ├── waapi/
    │   │   │   │   │   │   ├── easing/
    │   │   │   │   │   │   │   ├── cubic-bezier.mjs
    │   │   │   │   │   │   │   ├── is-supported.mjs
    │   │   │   │   │   │   │   ├── map-easing.mjs
    │   │   │   │   │   │   │   └── supported.mjs
    │   │   │   │   │   │   ├── supports/
    │   │   │   │   │   │   │   ├── partial-keyframes.mjs
    │   │   │   │   │   │   │   └── waapi.mjs
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── accelerated-values.mjs
    │   │   │   │   │   │   │   ├── apply-generator.mjs
    │   │   │   │   │   │   │   ├── linear.mjs
    │   │   │   │   │   │   │   ├── px-values.mjs
    │   │   │   │   │   │   │   └── unsupported-easing.mjs
    │   │   │   │   │   │   └── start-waapi-animation.mjs
    │   │   │   │   │   ├── AsyncMotionValueAnimation.mjs
    │   │   │   │   │   ├── GroupAnimation.mjs
    │   │   │   │   │   ├── GroupAnimationWithThen.mjs
    │   │   │   │   │   ├── JSAnimation.mjs
    │   │   │   │   │   ├── NativeAnimation.mjs
    │   │   │   │   │   ├── NativeAnimationExtended.mjs
    │   │   │   │   │   └── NativeAnimationWrapper.mjs
    │   │   │   │   ├── effects/
    │   │   │   │   │   ├── attr/
    │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   ├── prop/
    │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   ├── style/
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   └── transform.mjs
    │   │   │   │   │   ├── svg/
    │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── create-dom-effect.mjs
    │   │   │   │   │   │   └── create-effect.mjs
    │   │   │   │   │   └── MotionValueState.mjs
    │   │   │   │   ├── frameloop/
    │   │   │   │   │   ├── batcher.mjs
    │   │   │   │   │   ├── frame.mjs
    │   │   │   │   │   ├── index-legacy.mjs
    │   │   │   │   │   ├── microtask.mjs
    │   │   │   │   │   ├── order.mjs
    │   │   │   │   │   ├── render-step.mjs
    │   │   │   │   │   └── sync-time.mjs
    │   │   │   │   ├── gestures/
    │   │   │   │   │   ├── drag/
    │   │   │   │   │   │   └── state/
    │   │   │   │   │   │       ├── is-active.mjs
    │   │   │   │   │   │       └── set-active.mjs
    │   │   │   │   │   ├── press/
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── is-keyboard-accessible.mjs
    │   │   │   │   │   │   │   ├── keyboard.mjs
    │   │   │   │   │   │   │   └── state.mjs
    │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── is-node-or-child.mjs
    │   │   │   │   │   │   ├── is-primary-pointer.mjs
    │   │   │   │   │   │   └── setup.mjs
    │   │   │   │   │   └── hover.mjs
    │   │   │   │   ├── render/
    │   │   │   │   │   ├── dom/
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   └── camel-to-dash.mjs
    │   │   │   │   │   │   ├── is-css-var.mjs
    │   │   │   │   │   │   ├── parse-transform.mjs
    │   │   │   │   │   │   ├── style-computed.mjs
    │   │   │   │   │   │   └── style-set.mjs
    │   │   │   │   │   └── utils/
    │   │   │   │   │       ├── keys-position.mjs
    │   │   │   │   │       └── keys-transform.mjs
    │   │   │   │   ├── resize/
    │   │   │   │   │   ├── handle-element.mjs
    │   │   │   │   │   ├── handle-window.mjs
    │   │   │   │   │   └── index.mjs
    │   │   │   │   ├── scroll/
    │   │   │   │   │   └── observe.mjs
    │   │   │   │   ├── stats/
    │   │   │   │   │   ├── animation-count.mjs
    │   │   │   │   │   ├── buffer.mjs
    │   │   │   │   │   └── index.mjs
    │   │   │   │   ├── utils/
    │   │   │   │   │   ├── mix/
    │   │   │   │   │   │   ├── color.mjs
    │   │   │   │   │   │   ├── complex.mjs
    │   │   │   │   │   │   ├── immediate.mjs
    │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   ├── number.mjs
    │   │   │   │   │   │   └── visibility.mjs
    │   │   │   │   │   ├── supports/
    │   │   │   │   │   │   ├── flags.mjs
    │   │   │   │   │   │   ├── linear-easing.mjs
    │   │   │   │   │   │   ├── memo.mjs
    │   │   │   │   │   │   └── scroll-timeline.mjs
    │   │   │   │   │   ├── interpolate.mjs
    │   │   │   │   │   ├── is-html-element.mjs
    │   │   │   │   │   ├── is-svg-element.mjs
    │   │   │   │   │   ├── is-svg-svg-element.mjs
    │   │   │   │   │   ├── resolve-elements.mjs
    │   │   │   │   │   └── transform.mjs
    │   │   │   │   ├── value/
    │   │   │   │   │   ├── types/
    │   │   │   │   │   │   ├── color/
    │   │   │   │   │   │   │   ├── hex.mjs
    │   │   │   │   │   │   │   ├── hsla-to-rgba.mjs
    │   │   │   │   │   │   │   ├── hsla.mjs
    │   │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   │   ├── rgba.mjs
    │   │   │   │   │   │   │   └── utils.mjs
    │   │   │   │   │   │   ├── complex/
    │   │   │   │   │   │   │   ├── filter.mjs
    │   │   │   │   │   │   │   └── index.mjs
    │   │   │   │   │   │   ├── maps/
    │   │   │   │   │   │   │   ├── defaults.mjs
    │   │   │   │   │   │   │   ├── number.mjs
    │   │   │   │   │   │   │   └── transform.mjs
    │   │   │   │   │   │   ├── numbers/
    │   │   │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   │   │   └── units.mjs
    │   │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   │   ├── animatable-none.mjs
    │   │   │   │   │   │   │   ├── color-regex.mjs
    │   │   │   │   │   │   │   ├── find.mjs
    │   │   │   │   │   │   │   ├── float-regex.mjs
    │   │   │   │   │   │   │   ├── get-as-type.mjs
    │   │   │   │   │   │   │   ├── is-nullish.mjs
    │   │   │   │   │   │   │   ├── sanitize.mjs
    │   │   │   │   │   │   │   └── single-color-regex.mjs
    │   │   │   │   │   │   ├── auto.mjs
    │   │   │   │   │   │   ├── dimensions.mjs
    │   │   │   │   │   │   ├── int.mjs
    │   │   │   │   │   │   └── test.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   └── is-motion-value.mjs
    │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   ├── map-value.mjs
    │   │   │   │   │   ├── spring-value.mjs
    │   │   │   │   │   ├── subscribe-value.mjs
    │   │   │   │   │   └── transform-value.mjs
    │   │   │   │   ├── view/
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── choose-layer-type.mjs
    │   │   │   │   │   │   ├── css.mjs
    │   │   │   │   │   │   ├── get-layer-name.mjs
    │   │   │   │   │   │   ├── get-view-animations.mjs
    │   │   │   │   │   │   └── has-target.mjs
    │   │   │   │   │   ├── index.mjs
    │   │   │   │   │   ├── queue.mjs
    │   │   │   │   │   └── start.mjs
    │   │   │   │   └── index.mjs
    │   │   │   ├── index.d.ts
    │   │   │   ├── motion-dom.dev.js
    │   │   │   ├── motion-dom.js
    │   │   │   ├── size-rollup-motion-value.js
    │   │   │   └── size-rollup-style-effect.js
    │   │   ├── LICENSE.md
    │   │   └── package.json
    │   ├── motion-utils/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   └── index.js
    │   │   │   ├── es/
    │   │   │   │   ├── easing/
    │   │   │   │   │   ├── modifiers/
    │   │   │   │   │   │   ├── mirror.mjs
    │   │   │   │   │   │   └── reverse.mjs
    │   │   │   │   │   ├── utils/
    │   │   │   │   │   │   ├── get-easing-for-segment.mjs
    │   │   │   │   │   │   ├── is-bezier-definition.mjs
    │   │   │   │   │   │   ├── is-easing-array.mjs
    │   │   │   │   │   │   └── map.mjs
    │   │   │   │   │   ├── anticipate.mjs
    │   │   │   │   │   ├── back.mjs
    │   │   │   │   │   ├── circ.mjs
    │   │   │   │   │   ├── cubic-bezier.mjs
    │   │   │   │   │   ├── ease.mjs
    │   │   │   │   │   └── steps.mjs
    │   │   │   │   ├── array.mjs
    │   │   │   │   ├── clamp.mjs
    │   │   │   │   ├── errors.mjs
    │   │   │   │   ├── global-config.mjs
    │   │   │   │   ├── index.mjs
    │   │   │   │   ├── is-numerical-string.mjs
    │   │   │   │   ├── is-object.mjs
    │   │   │   │   ├── is-zero-value-string.mjs
    │   │   │   │   ├── memo.mjs
    │   │   │   │   ├── noop.mjs
    │   │   │   │   ├── pipe.mjs
    │   │   │   │   ├── progress.mjs
    │   │   │   │   ├── subscription-manager.mjs
    │   │   │   │   ├── time-conversion.mjs
    │   │   │   │   ├── velocity-per-second.mjs
    │   │   │   │   ├── warn-once.mjs
    │   │   │   │   └── wrap.mjs
    │   │   │   ├── index.d.ts
    │   │   │   ├── motion-utils.dev.js
    │   │   │   └── motion-utils.js
    │   │   ├── LICENSE.md
    │   │   └── package.json
    │   ├── ms/
    │   │   ├── index.js
    │   │   ├── license.md
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── mz/
    │   │   ├── child_process.js
    │   │   ├── crypto.js
    │   │   ├── dns.js
    │   │   ├── fs.js
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── readline.js
    │   │   ├── README.md
    │   │   └── zlib.js
    │   ├── nanoid/
    │   │   ├── async/
    │   │   │   ├── index.browser.cjs
    │   │   │   ├── index.browser.js
    │   │   │   ├── index.cjs
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.native.js
    │   │   │   └── package.json
    │   │   ├── bin/
    │   │   │   └── nanoid.cjs
    │   │   ├── non-secure/
    │   │   │   ├── index.cjs
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── package.json
    │   │   ├── url-alphabet/
    │   │   │   ├── index.cjs
    │   │   │   ├── index.js
    │   │   │   └── package.json
    │   │   ├── index.browser.cjs
    │   │   ├── index.browser.js
    │   │   ├── index.cjs
    │   │   ├── index.d.cts
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── nanoid.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── natural-compare/
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── node-releases/
    │   │   ├── data/
    │   │   │   ├── processed/
    │   │   │   │   └── envs.json
    │   │   │   └── release-schedule/
    │   │   │       └── release-schedule.json
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── normalize-path/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── normalize-range/
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── object-assign/
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── object-hash/
    │   │   ├── dist/
    │   │   │   └── object_hash.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── readme.markdown
    │   ├── ogl/
    │   │   ├── src/
    │   │   │   ├── core/
    │   │   │   │   ├── Camera.js
    │   │   │   │   ├── Geometry.js
    │   │   │   │   ├── Mesh.js
    │   │   │   │   ├── Program.js
    │   │   │   │   ├── Renderer.js
    │   │   │   │   ├── RenderTarget.js
    │   │   │   │   ├── Texture.js
    │   │   │   │   └── Transform.js
    │   │   │   ├── extras/
    │   │   │   │   ├── helpers/
    │   │   │   │   │   ├── AxesHelper.js
    │   │   │   │   │   ├── FaceNormalsHelper.js
    │   │   │   │   │   ├── GridHelper.js
    │   │   │   │   │   └── VertexNormalsHelper.js
    │   │   │   │   ├── path/
    │   │   │   │   │   ├── BaseSegment.js
    │   │   │   │   │   ├── CubicBezierSegment.js
    │   │   │   │   │   ├── LineSegment.js
    │   │   │   │   │   ├── Path.js
    │   │   │   │   │   ├── QuadraticBezierSegment.js
    │   │   │   │   │   └── utils.js
    │   │   │   │   ├── Animation.js
    │   │   │   │   ├── BasisManager.js
    │   │   │   │   ├── Box.js
    │   │   │   │   ├── Curve.js
    │   │   │   │   ├── Cylinder.js
    │   │   │   │   ├── DracoManager.js
    │   │   │   │   ├── Flowmap.js
    │   │   │   │   ├── GLTFAnimation.js
    │   │   │   │   ├── GLTFLoader.js
    │   │   │   │   ├── GLTFSkin.js
    │   │   │   │   ├── GPGPU.js
    │   │   │   │   ├── InstancedMesh.js
    │   │   │   │   ├── KTXTexture.js
    │   │   │   │   ├── NormalProgram.js
    │   │   │   │   ├── Orbit.js
    │   │   │   │   ├── Plane.js
    │   │   │   │   ├── Polyline.js
    │   │   │   │   ├── Post.js
    │   │   │   │   ├── Raycast.js
    │   │   │   │   ├── Shadow.js
    │   │   │   │   ├── Skin.js
    │   │   │   │   ├── Sphere.js
    │   │   │   │   ├── Text.js
    │   │   │   │   ├── Texture3D.js
    │   │   │   │   ├── TextureLoader.js
    │   │   │   │   ├── Torus.js
    │   │   │   │   ├── Triangle.js
    │   │   │   │   ├── Tube.js
    │   │   │   │   └── WireMesh.js
    │   │   │   ├── math/
    │   │   │   │   ├── functions/
    │   │   │   │   │   ├── ColorFunc.js
    │   │   │   │   │   ├── EulerFunc.js
    │   │   │   │   │   ├── Mat3Func.js
    │   │   │   │   │   ├── Mat4Func.js
    │   │   │   │   │   ├── QuatFunc.js
    │   │   │   │   │   ├── Vec2Func.js
    │   │   │   │   │   ├── Vec3Func.js
    │   │   │   │   │   └── Vec4Func.js
    │   │   │   │   ├── Color.js
    │   │   │   │   ├── Euler.js
    │   │   │   │   ├── Mat3.js
    │   │   │   │   ├── Mat4.js
    │   │   │   │   ├── Quat.js
    │   │   │   │   ├── Vec2.js
    │   │   │   │   ├── Vec3.js
    │   │   │   │   └── Vec4.js
    │   │   │   └── index.js
    │   │   ├── types/
    │   │   │   ├── core/
    │   │   │   │   ├── Camera.d.ts
    │   │   │   │   ├── Geometry.d.ts
    │   │   │   │   ├── Mesh.d.ts
    │   │   │   │   ├── Program.d.ts
    │   │   │   │   ├── Renderer.d.ts
    │   │   │   │   ├── RenderTarget.d.ts
    │   │   │   │   ├── Texture.d.ts
    │   │   │   │   └── Transform.d.ts
    │   │   │   ├── extras/
    │   │   │   │   ├── helpers/
    │   │   │   │   │   ├── AxesHelper.d.ts
    │   │   │   │   │   ├── FaceNormalsHelper.d.ts
    │   │   │   │   │   ├── GridHelper.d.ts
    │   │   │   │   │   └── VertexNormalsHelper.d.ts
    │   │   │   │   ├── path/
    │   │   │   │   │   ├── BaseSegment.d.ts
    │   │   │   │   │   ├── CubicBezierSegment.d.ts
    │   │   │   │   │   ├── LineSegment.d.ts
    │   │   │   │   │   ├── Path.d.ts
    │   │   │   │   │   └── QuadraticBezierSegment.d.ts
    │   │   │   │   ├── Animation.d.ts
    │   │   │   │   ├── BasisManager.d.ts
    │   │   │   │   ├── Box.d.ts
    │   │   │   │   ├── Curve.d.ts
    │   │   │   │   ├── Cylinder.d.ts
    │   │   │   │   ├── DracoManager.d.ts
    │   │   │   │   ├── Flowmap.d.ts
    │   │   │   │   ├── GLTFAnimation.d.ts
    │   │   │   │   ├── GLTFLoader.d.ts
    │   │   │   │   ├── GLTFSkin.d.ts
    │   │   │   │   ├── GPGPU.d.ts
    │   │   │   │   ├── InstancedMesh.d.ts
    │   │   │   │   ├── KTXTexture.d.ts
    │   │   │   │   ├── NormalProgram.d.ts
    │   │   │   │   ├── Orbit.d.ts
    │   │   │   │   ├── Plane.d.ts
    │   │   │   │   ├── Polyline.d.ts
    │   │   │   │   ├── Post.d.ts
    │   │   │   │   ├── Raycast.d.ts
    │   │   │   │   ├── Shadow.d.ts
    │   │   │   │   ├── Skin.d.ts
    │   │   │   │   ├── Sphere.d.ts
    │   │   │   │   ├── Text.d.ts
    │   │   │   │   ├── Texture3D.d.ts
    │   │   │   │   ├── TextureLoader.d.ts
    │   │   │   │   ├── Torus.d.ts
    │   │   │   │   ├── Triangle.d.ts
    │   │   │   │   ├── Tube.d.ts
    │   │   │   │   └── WireMesh.d.ts
    │   │   │   ├── math/
    │   │   │   │   ├── Color.d.ts
    │   │   │   │   ├── Euler.d.ts
    │   │   │   │   ├── Mat3.d.ts
    │   │   │   │   ├── Mat4.d.ts
    │   │   │   │   ├── Quat.d.ts
    │   │   │   │   ├── Vec2.d.ts
    │   │   │   │   ├── Vec3.d.ts
    │   │   │   │   └── Vec4.d.ts
    │   │   │   └── index.d.ts
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── optionator/
    │   │   ├── lib/
    │   │   │   ├── help.js
    │   │   │   ├── index.js
    │   │   │   └── util.js
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── p-limit/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── p-locate/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── package-json-from-dist/
    │   │   ├── dist/
    │   │   │   ├── commonjs/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   └── package.json
    │   │   │   └── esm/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       └── package.json
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── parent-module/
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── path-exists/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── path-key/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── path-parse/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── path-scurry/
    │   │   ├── dist/
    │   │   │   ├── commonjs/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   └── package.json
    │   │   │   └── esm/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       └── package.json
    │   │   ├── node_modules/
    │   │   │   └── lru-cache/
    │   │   │       ├── dist/
    │   │   │       │   ├── commonjs/
    │   │   │       │   │   ├── index.d.ts
    │   │   │       │   │   ├── index.d.ts.map
    │   │   │       │   │   ├── index.js
    │   │   │       │   │   ├── index.js.map
    │   │   │       │   │   ├── index.min.js
    │   │   │       │   │   ├── index.min.js.map
    │   │   │       │   │   └── package.json
    │   │   │       │   └── esm/
    │   │   │       │       ├── index.d.ts
    │   │   │       │       ├── index.d.ts.map
    │   │   │       │       ├── index.js
    │   │   │       │       ├── index.js.map
    │   │   │       │       ├── index.min.js
    │   │   │       │       ├── index.min.js.map
    │   │   │       │       └── package.json
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── picocolors/
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── picocolors.browser.js
    │   │   ├── picocolors.d.ts
    │   │   ├── picocolors.js
    │   │   ├── README.md
    │   │   └── types.d.ts
    │   ├── picomatch/
    │   │   ├── lib/
    │   │   │   ├── constants.js
    │   │   │   ├── parse.js
    │   │   │   ├── picomatch.js
    │   │   │   ├── scan.js
    │   │   │   └── utils.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── posix.js
    │   │   └── README.md
    │   ├── pify/
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── pirates/
    │   │   ├── lib/
    │   │   │   └── index.js
    │   │   ├── index.d.ts
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── postcss/
    │   │   ├── lib/
    │   │   │   ├── at-rule.d.ts
    │   │   │   ├── at-rule.js
    │   │   │   ├── comment.d.ts
    │   │   │   ├── comment.js
    │   │   │   ├── container.d.ts
    │   │   │   ├── container.js
    │   │   │   ├── css-syntax-error.d.ts
    │   │   │   ├── css-syntax-error.js
    │   │   │   ├── declaration.d.ts
    │   │   │   ├── declaration.js
    │   │   │   ├── document.d.ts
    │   │   │   ├── document.js
    │   │   │   ├── fromJSON.d.ts
    │   │   │   ├── fromJSON.js
    │   │   │   ├── input.d.ts
    │   │   │   ├── input.js
    │   │   │   ├── lazy-result.d.ts
    │   │   │   ├── lazy-result.js
    │   │   │   ├── list.d.ts
    │   │   │   ├── list.js
    │   │   │   ├── map-generator.js
    │   │   │   ├── no-work-result.d.ts
    │   │   │   ├── no-work-result.js
    │   │   │   ├── node.d.ts
    │   │   │   ├── node.js
    │   │   │   ├── parse.d.ts
    │   │   │   ├── parse.js
    │   │   │   ├── parser.js
    │   │   │   ├── postcss.d.mts
    │   │   │   ├── postcss.d.ts
    │   │   │   ├── postcss.js
    │   │   │   ├── postcss.mjs
    │   │   │   ├── previous-map.d.ts
    │   │   │   ├── previous-map.js
    │   │   │   ├── processor.d.ts
    │   │   │   ├── processor.js
    │   │   │   ├── result.d.ts
    │   │   │   ├── result.js
    │   │   │   ├── root.d.ts
    │   │   │   ├── root.js
    │   │   │   ├── rule.d.ts
    │   │   │   ├── rule.js
    │   │   │   ├── stringifier.d.ts
    │   │   │   ├── stringifier.js
    │   │   │   ├── stringify.d.ts
    │   │   │   ├── stringify.js
    │   │   │   ├── symbols.js
    │   │   │   ├── terminal-highlight.js
    │   │   │   ├── tokenize.js
    │   │   │   ├── warn-once.js
    │   │   │   ├── warning.d.ts
    │   │   │   └── warning.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── postcss-import/
    │   │   ├── lib/
    │   │   │   ├── assign-layer-names.js
    │   │   │   ├── data-url.js
    │   │   │   ├── join-layer.js
    │   │   │   ├── join-media.js
    │   │   │   ├── load-content.js
    │   │   │   ├── parse-statements.js
    │   │   │   ├── process-content.js
    │   │   │   └── resolve-id.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── postcss-js/
    │   │   ├── async.js
    │   │   ├── index.js
    │   │   ├── index.mjs
    │   │   ├── LICENSE
    │   │   ├── objectifier.js
    │   │   ├── package.json
    │   │   ├── parser.js
    │   │   ├── process-result.js
    │   │   ├── README.md
    │   │   └── sync.js
    │   ├── postcss-load-config/
    │   │   ├── src/
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── options.js
    │   │   │   ├── plugins.js
    │   │   │   └── req.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── postcss-nested/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── postcss-selector-parser/
    │   │   ├── dist/
    │   │   │   ├── selectors/
    │   │   │   │   ├── attribute.js
    │   │   │   │   ├── className.js
    │   │   │   │   ├── combinator.js
    │   │   │   │   ├── comment.js
    │   │   │   │   ├── constructors.js
    │   │   │   │   ├── container.js
    │   │   │   │   ├── guards.js
    │   │   │   │   ├── id.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── namespace.js
    │   │   │   │   ├── nesting.js
    │   │   │   │   ├── node.js
    │   │   │   │   ├── pseudo.js
    │   │   │   │   ├── root.js
    │   │   │   │   ├── selector.js
    │   │   │   │   ├── string.js
    │   │   │   │   ├── tag.js
    │   │   │   │   ├── types.js
    │   │   │   │   └── universal.js
    │   │   │   ├── util/
    │   │   │   │   ├── ensureObject.js
    │   │   │   │   ├── getProp.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── stripComments.js
    │   │   │   │   └── unesc.js
    │   │   │   ├── index.js
    │   │   │   ├── parser.js
    │   │   │   ├── processor.js
    │   │   │   ├── sortAscending.js
    │   │   │   ├── tokenize.js
    │   │   │   └── tokenTypes.js
    │   │   ├── API.md
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE-MIT
    │   │   ├── package.json
    │   │   ├── postcss-selector-parser.d.ts
    │   │   └── README.md
    │   ├── postcss-value-parser/
    │   │   ├── lib/
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   ├── unit.js
    │   │   │   └── walk.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── prelude-ls/
    │   │   ├── lib/
    │   │   │   ├── Func.js
    │   │   │   ├── index.js
    │   │   │   ├── List.js
    │   │   │   ├── Num.js
    │   │   │   ├── Obj.js
    │   │   │   └── Str.js
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── property-expr/
    │   │   ├── compiler.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE.txt
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── proxy-from-env/
    │   │   ├── .eslintrc
    │   │   ├── .travis.yml
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── test.js
    │   ├── punycode/
    │   │   ├── LICENSE-MIT.txt
    │   │   ├── package.json
    │   │   ├── punycode.es6.js
    │   │   ├── punycode.js
    │   │   └── README.md
    │   ├── queue-microtask/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── react/
    │   │   ├── cjs/
    │   │   │   ├── react-compiler-runtime.development.js
    │   │   │   ├── react-compiler-runtime.production.js
    │   │   │   ├── react-compiler-runtime.profiling.js
    │   │   │   ├── react-jsx-dev-runtime.development.js
    │   │   │   ├── react-jsx-dev-runtime.production.js
    │   │   │   ├── react-jsx-dev-runtime.profiling.js
    │   │   │   ├── react-jsx-dev-runtime.react-server.development.js
    │   │   │   ├── react-jsx-dev-runtime.react-server.production.js
    │   │   │   ├── react-jsx-runtime.development.js
    │   │   │   ├── react-jsx-runtime.production.js
    │   │   │   ├── react-jsx-runtime.profiling.js
    │   │   │   ├── react-jsx-runtime.react-server.development.js
    │   │   │   ├── react-jsx-runtime.react-server.production.js
    │   │   │   ├── react.development.js
    │   │   │   ├── react.production.js
    │   │   │   ├── react.react-server.development.js
    │   │   │   └── react.react-server.production.js
    │   │   ├── compiler-runtime.js
    │   │   ├── index.js
    │   │   ├── jsx-dev-runtime.js
    │   │   ├── jsx-dev-runtime.react-server.js
    │   │   ├── jsx-runtime.js
    │   │   ├── jsx-runtime.react-server.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── react.react-server.js
    │   │   └── README.md
    │   ├── react-dom/
    │   │   ├── cjs/
    │   │   │   ├── react-dom-client.development.js
    │   │   │   ├── react-dom-client.production.js
    │   │   │   ├── react-dom-profiling.development.js
    │   │   │   ├── react-dom-profiling.profiling.js
    │   │   │   ├── react-dom-server-legacy.browser.development.js
    │   │   │   ├── react-dom-server-legacy.browser.production.js
    │   │   │   ├── react-dom-server-legacy.node.development.js
    │   │   │   ├── react-dom-server-legacy.node.production.js
    │   │   │   ├── react-dom-server.browser.development.js
    │   │   │   ├── react-dom-server.browser.production.js
    │   │   │   ├── react-dom-server.bun.development.js
    │   │   │   ├── react-dom-server.bun.production.js
    │   │   │   ├── react-dom-server.edge.development.js
    │   │   │   ├── react-dom-server.edge.production.js
    │   │   │   ├── react-dom-server.node.development.js
    │   │   │   ├── react-dom-server.node.production.js
    │   │   │   ├── react-dom-test-utils.development.js
    │   │   │   ├── react-dom-test-utils.production.js
    │   │   │   ├── react-dom.development.js
    │   │   │   ├── react-dom.production.js
    │   │   │   ├── react-dom.react-server.development.js
    │   │   │   └── react-dom.react-server.production.js
    │   │   ├── client.js
    │   │   ├── client.react-server.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── profiling.js
    │   │   ├── profiling.react-server.js
    │   │   ├── react-dom.react-server.js
    │   │   ├── README.md
    │   │   ├── server.browser.js
    │   │   ├── server.bun.js
    │   │   ├── server.edge.js
    │   │   ├── server.js
    │   │   ├── server.node.js
    │   │   ├── server.react-server.js
    │   │   ├── static.browser.js
    │   │   ├── static.edge.js
    │   │   ├── static.js
    │   │   ├── static.node.js
    │   │   ├── static.react-server.js
    │   │   └── test-utils.js
    │   ├── react-hook-form/
    │   │   ├── dist/
    │   │   │   ├── __typetest__/
    │   │   │   │   ├── __fixtures__/
    │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   ├── index.d.ts.map
    │   │   │   │   │   ├── pathString.d.ts
    │   │   │   │   │   ├── pathString.d.ts.map
    │   │   │   │   │   ├── traversable.d.ts
    │   │   │   │   │   ├── traversable.d.ts.map
    │   │   │   │   │   ├── tuple.d.ts
    │   │   │   │   │   ├── tuple.d.ts.map
    │   │   │   │   │   ├── type.d.ts
    │   │   │   │   │   └── type.d.ts.map
    │   │   │   │   ├── path/
    │   │   │   │   │   ├── common.test-d.d.ts
    │   │   │   │   │   ├── common.test-d.d.ts.map
    │   │   │   │   │   ├── eager.test-d.d.ts
    │   │   │   │   │   └── eager.test-d.d.ts.map
    │   │   │   │   ├── errors.test-d.d.ts
    │   │   │   │   ├── errors.test-d.d.ts.map
    │   │   │   │   ├── form.test-d.d.ts
    │   │   │   │   ├── form.test-d.d.ts.map
    │   │   │   │   ├── use-form-context.test-d.d.ts
    │   │   │   │   ├── use-form-context.test-d.d.ts.map
    │   │   │   │   ├── util.test-d.d.ts
    │   │   │   │   └── util.test-d.d.ts.map
    │   │   │   ├── logic/
    │   │   │   │   ├── appendErrors.d.ts
    │   │   │   │   ├── appendErrors.d.ts.map
    │   │   │   │   ├── createFormControl.d.ts
    │   │   │   │   ├── createFormControl.d.ts.map
    │   │   │   │   ├── generateId.d.ts
    │   │   │   │   ├── generateId.d.ts.map
    │   │   │   │   ├── generateWatchOutput.d.ts
    │   │   │   │   ├── generateWatchOutput.d.ts.map
    │   │   │   │   ├── getCheckboxValue.d.ts
    │   │   │   │   ├── getCheckboxValue.d.ts.map
    │   │   │   │   ├── getDirtyFields.d.ts
    │   │   │   │   ├── getDirtyFields.d.ts.map
    │   │   │   │   ├── getEventValue.d.ts
    │   │   │   │   ├── getEventValue.d.ts.map
    │   │   │   │   ├── getFieldValue.d.ts
    │   │   │   │   ├── getFieldValue.d.ts.map
    │   │   │   │   ├── getFieldValueAs.d.ts
    │   │   │   │   ├── getFieldValueAs.d.ts.map
    │   │   │   │   ├── getFocusFieldName.d.ts
    │   │   │   │   ├── getFocusFieldName.d.ts.map
    │   │   │   │   ├── getNodeParentName.d.ts
    │   │   │   │   ├── getNodeParentName.d.ts.map
    │   │   │   │   ├── getProxyFormState.d.ts
    │   │   │   │   ├── getProxyFormState.d.ts.map
    │   │   │   │   ├── getRadioValue.d.ts
    │   │   │   │   ├── getRadioValue.d.ts.map
    │   │   │   │   ├── getResolverOptions.d.ts
    │   │   │   │   ├── getResolverOptions.d.ts.map
    │   │   │   │   ├── getRuleValue.d.ts
    │   │   │   │   ├── getRuleValue.d.ts.map
    │   │   │   │   ├── getValidateError.d.ts
    │   │   │   │   ├── getValidateError.d.ts.map
    │   │   │   │   ├── getValidationModes.d.ts
    │   │   │   │   ├── getValidationModes.d.ts.map
    │   │   │   │   ├── getValueAndMessage.d.ts
    │   │   │   │   ├── getValueAndMessage.d.ts.map
    │   │   │   │   ├── hasPromiseValidation.d.ts
    │   │   │   │   ├── hasPromiseValidation.d.ts.map
    │   │   │   │   ├── hasValidation.d.ts
    │   │   │   │   ├── hasValidation.d.ts.map
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── isNameInFieldArray.d.ts
    │   │   │   │   ├── isNameInFieldArray.d.ts.map
    │   │   │   │   ├── isWatched.d.ts
    │   │   │   │   ├── isWatched.d.ts.map
    │   │   │   │   ├── iterateFieldsByAction.d.ts
    │   │   │   │   ├── iterateFieldsByAction.d.ts.map
    │   │   │   │   ├── schemaErrorLookup.d.ts
    │   │   │   │   ├── schemaErrorLookup.d.ts.map
    │   │   │   │   ├── shouldRenderFormState.d.ts
    │   │   │   │   ├── shouldRenderFormState.d.ts.map
    │   │   │   │   ├── shouldSubscribeByName.d.ts
    │   │   │   │   ├── shouldSubscribeByName.d.ts.map
    │   │   │   │   ├── skipValidation.d.ts
    │   │   │   │   ├── skipValidation.d.ts.map
    │   │   │   │   ├── unsetEmptyArray.d.ts
    │   │   │   │   ├── unsetEmptyArray.d.ts.map
    │   │   │   │   ├── updateFieldArrayRootError.d.ts
    │   │   │   │   ├── updateFieldArrayRootError.d.ts.map
    │   │   │   │   ├── validateField.d.ts
    │   │   │   │   └── validateField.d.ts.map
    │   │   │   ├── types/
    │   │   │   │   ├── path/
    │   │   │   │   │   ├── common.d.ts
    │   │   │   │   │   ├── common.d.ts.map
    │   │   │   │   │   ├── eager.d.ts
    │   │   │   │   │   ├── eager.d.ts.map
    │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   └── index.d.ts.map
    │   │   │   │   ├── controller.d.ts
    │   │   │   │   ├── controller.d.ts.map
    │   │   │   │   ├── errors.d.ts
    │   │   │   │   ├── errors.d.ts.map
    │   │   │   │   ├── events.d.ts
    │   │   │   │   ├── events.d.ts.map
    │   │   │   │   ├── fieldArray.d.ts
    │   │   │   │   ├── fieldArray.d.ts.map
    │   │   │   │   ├── fields.d.ts
    │   │   │   │   ├── fields.d.ts.map
    │   │   │   │   ├── form.d.ts
    │   │   │   │   ├── form.d.ts.map
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── resolvers.d.ts
    │   │   │   │   ├── resolvers.d.ts.map
    │   │   │   │   ├── utils.d.ts
    │   │   │   │   ├── utils.d.ts.map
    │   │   │   │   ├── validator.d.ts
    │   │   │   │   └── validator.d.ts.map
    │   │   │   ├── utils/
    │   │   │   │   ├── append.d.ts
    │   │   │   │   ├── append.d.ts.map
    │   │   │   │   ├── cloneObject.d.ts
    │   │   │   │   ├── cloneObject.d.ts.map
    │   │   │   │   ├── compact.d.ts
    │   │   │   │   ├── compact.d.ts.map
    │   │   │   │   ├── convertToArrayPayload.d.ts
    │   │   │   │   ├── convertToArrayPayload.d.ts.map
    │   │   │   │   ├── createSubject.d.ts
    │   │   │   │   ├── createSubject.d.ts.map
    │   │   │   │   ├── deepEqual.d.ts
    │   │   │   │   ├── deepEqual.d.ts.map
    │   │   │   │   ├── deepMerge.d.ts
    │   │   │   │   ├── deepMerge.d.ts.map
    │   │   │   │   ├── fillEmptyArray.d.ts
    │   │   │   │   ├── fillEmptyArray.d.ts.map
    │   │   │   │   ├── flatten.d.ts
    │   │   │   │   ├── flatten.d.ts.map
    │   │   │   │   ├── get.d.ts
    │   │   │   │   ├── get.d.ts.map
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── insert.d.ts
    │   │   │   │   ├── insert.d.ts.map
    │   │   │   │   ├── isBoolean.d.ts
    │   │   │   │   ├── isBoolean.d.ts.map
    │   │   │   │   ├── isCheckBoxInput.d.ts
    │   │   │   │   ├── isCheckBoxInput.d.ts.map
    │   │   │   │   ├── isDateObject.d.ts
    │   │   │   │   ├── isDateObject.d.ts.map
    │   │   │   │   ├── isEmptyObject.d.ts
    │   │   │   │   ├── isEmptyObject.d.ts.map
    │   │   │   │   ├── isFileInput.d.ts
    │   │   │   │   ├── isFileInput.d.ts.map
    │   │   │   │   ├── isFunction.d.ts
    │   │   │   │   ├── isFunction.d.ts.map
    │   │   │   │   ├── isHTMLElement.d.ts
    │   │   │   │   ├── isHTMLElement.d.ts.map
    │   │   │   │   ├── isKey.d.ts
    │   │   │   │   ├── isKey.d.ts.map
    │   │   │   │   ├── isMessage.d.ts
    │   │   │   │   ├── isMessage.d.ts.map
    │   │   │   │   ├── isMultipleSelect.d.ts
    │   │   │   │   ├── isMultipleSelect.d.ts.map
    │   │   │   │   ├── isNullOrUndefined.d.ts
    │   │   │   │   ├── isNullOrUndefined.d.ts.map
    │   │   │   │   ├── isObject.d.ts
    │   │   │   │   ├── isObject.d.ts.map
    │   │   │   │   ├── isPlainObject.d.ts
    │   │   │   │   ├── isPlainObject.d.ts.map
    │   │   │   │   ├── isPrimitive.d.ts
    │   │   │   │   ├── isPrimitive.d.ts.map
    │   │   │   │   ├── isRadioInput.d.ts
    │   │   │   │   ├── isRadioInput.d.ts.map
    │   │   │   │   ├── isRadioOrCheckbox.d.ts
    │   │   │   │   ├── isRadioOrCheckbox.d.ts.map
    │   │   │   │   ├── isRegex.d.ts
    │   │   │   │   ├── isRegex.d.ts.map
    │   │   │   │   ├── isString.d.ts
    │   │   │   │   ├── isString.d.ts.map
    │   │   │   │   ├── isUndefined.d.ts
    │   │   │   │   ├── isUndefined.d.ts.map
    │   │   │   │   ├── isWeb.d.ts
    │   │   │   │   ├── isWeb.d.ts.map
    │   │   │   │   ├── live.d.ts
    │   │   │   │   ├── live.d.ts.map
    │   │   │   │   ├── move.d.ts
    │   │   │   │   ├── move.d.ts.map
    │   │   │   │   ├── noop.d.ts
    │   │   │   │   ├── noop.d.ts.map
    │   │   │   │   ├── objectHasFunction.d.ts
    │   │   │   │   ├── objectHasFunction.d.ts.map
    │   │   │   │   ├── omit.d.ts
    │   │   │   │   ├── omit.d.ts.map
    │   │   │   │   ├── prepend.d.ts
    │   │   │   │   ├── prepend.d.ts.map
    │   │   │   │   ├── remove.d.ts
    │   │   │   │   ├── remove.d.ts.map
    │   │   │   │   ├── set.d.ts
    │   │   │   │   ├── set.d.ts.map
    │   │   │   │   ├── sleep.d.ts
    │   │   │   │   ├── sleep.d.ts.map
    │   │   │   │   ├── stringToPath.d.ts
    │   │   │   │   ├── stringToPath.d.ts.map
    │   │   │   │   ├── swap.d.ts
    │   │   │   │   ├── swap.d.ts.map
    │   │   │   │   ├── unset.d.ts
    │   │   │   │   ├── unset.d.ts.map
    │   │   │   │   ├── update.d.ts
    │   │   │   │   └── update.d.ts.map
    │   │   │   ├── constants.d.ts
    │   │   │   ├── constants.d.ts.map
    │   │   │   ├── controller.d.ts
    │   │   │   ├── controller.d.ts.map
    │   │   │   ├── form.d.ts
    │   │   │   ├── form.d.ts.map
    │   │   │   ├── index.cjs.js
    │   │   │   ├── index.cjs.js.map
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.d.ts.map
    │   │   │   ├── index.esm.mjs
    │   │   │   ├── index.esm.mjs.map
    │   │   │   ├── index.react-server.d.ts
    │   │   │   ├── index.react-server.d.ts.map
    │   │   │   ├── index.umd.js
    │   │   │   ├── index.umd.js.map
    │   │   │   ├── react-server.esm.mjs
    │   │   │   ├── react-server.esm.mjs.map
    │   │   │   ├── useController.d.ts
    │   │   │   ├── useController.d.ts.map
    │   │   │   ├── useFieldArray.d.ts
    │   │   │   ├── useFieldArray.d.ts.map
    │   │   │   ├── useForm.d.ts
    │   │   │   ├── useForm.d.ts.map
    │   │   │   ├── useFormContext.d.ts
    │   │   │   ├── useFormContext.d.ts.map
    │   │   │   ├── useFormState.d.ts
    │   │   │   ├── useFormState.d.ts.map
    │   │   │   ├── useIsomorphicLayoutEffect.d.ts
    │   │   │   ├── useIsomorphicLayoutEffect.d.ts.map
    │   │   │   ├── useWatch.d.ts
    │   │   │   └── useWatch.d.ts.map
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── react-redux/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   ├── index.js
    │   │   │   │   ├── react-redux.development.cjs
    │   │   │   │   ├── react-redux.development.cjs.map
    │   │   │   │   ├── react-redux.production.min.cjs
    │   │   │   │   └── react-redux.production.min.cjs.map
    │   │   │   ├── react-redux.browser.mjs
    │   │   │   ├── react-redux.browser.mjs.map
    │   │   │   ├── react-redux.d.ts
    │   │   │   ├── react-redux.legacy-esm.js
    │   │   │   ├── react-redux.legacy-esm.js.map
    │   │   │   ├── react-redux.mjs
    │   │   │   ├── react-redux.mjs.map
    │   │   │   ├── rsc.mjs
    │   │   │   └── rsc.mjs.map
    │   │   ├── src/
    │   │   │   ├── components/
    │   │   │   │   ├── connect.tsx
    │   │   │   │   ├── Context.ts
    │   │   │   │   └── Provider.tsx
    │   │   │   ├── connect/
    │   │   │   │   ├── invalidArgFactory.ts
    │   │   │   │   ├── mapDispatchToProps.ts
    │   │   │   │   ├── mapStateToProps.ts
    │   │   │   │   ├── mergeProps.ts
    │   │   │   │   ├── selectorFactory.ts
    │   │   │   │   ├── verifySubselectors.ts
    │   │   │   │   └── wrapMapToProps.ts
    │   │   │   ├── hooks/
    │   │   │   │   ├── useDispatch.ts
    │   │   │   │   ├── useReduxContext.ts
    │   │   │   │   ├── useSelector.ts
    │   │   │   │   └── useStore.ts
    │   │   │   ├── utils/
    │   │   │   │   ├── batch.ts
    │   │   │   │   ├── bindActionCreators.ts
    │   │   │   │   ├── hoistStatics.ts
    │   │   │   │   ├── isPlainObject.ts
    │   │   │   │   ├── react-is.ts
    │   │   │   │   ├── react.ts
    │   │   │   │   ├── shallowEqual.ts
    │   │   │   │   ├── Subscription.ts
    │   │   │   │   ├── useIsomorphicLayoutEffect.ts
    │   │   │   │   ├── useSyncExternalStore.ts
    │   │   │   │   ├── verifyPlainObject.ts
    │   │   │   │   └── warning.ts
    │   │   │   ├── exports.ts
    │   │   │   ├── index-rsc.ts
    │   │   │   ├── index.ts
    │   │   │   └── types.ts
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── react-refresh/
    │   │   ├── cjs/
    │   │   │   ├── react-refresh-babel.development.js
    │   │   │   ├── react-refresh-babel.production.js
    │   │   │   ├── react-refresh-runtime.development.js
    │   │   │   └── react-refresh-runtime.production.js
    │   │   ├── babel.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── runtime.js
    │   ├── react-router/
    │   │   ├── dist/
    │   │   │   ├── development/
    │   │   │   │   ├── lib/
    │   │   │   │   │   └── types/
    │   │   │   │   │       ├── internal.d.mts
    │   │   │   │   │       ├── internal.d.ts
    │   │   │   │   │       ├── internal.js
    │   │   │   │   │       └── internal.mjs
    │   │   │   │   ├── chunk-NL6KNZEE.mjs
    │   │   │   │   ├── dom-export.d.mts
    │   │   │   │   ├── dom-export.d.ts
    │   │   │   │   ├── dom-export.js
    │   │   │   │   ├── dom-export.mjs
    │   │   │   │   ├── index.d.mts
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.mjs
    │   │   │   │   ├── lib-C1JSsICm.d.mts
    │   │   │   │   ├── register-DCE0tH5m.d.ts
    │   │   │   │   ├── register-DeIo2iHO.d.mts
    │   │   │   │   └── route-data-ByAYLHuM.d.mts
    │   │   │   └── production/
    │   │   │       ├── lib/
    │   │   │       │   └── types/
    │   │   │       │       ├── internal.d.mts
    │   │   │       │       ├── internal.d.ts
    │   │   │       │       ├── internal.js
    │   │   │       │       └── internal.mjs
    │   │   │       ├── chunk-JRQCFVZH.mjs
    │   │   │       ├── dom-export.d.mts
    │   │   │       ├── dom-export.d.ts
    │   │   │       ├── dom-export.js
    │   │   │       ├── dom-export.mjs
    │   │   │       ├── index.d.mts
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── index.mjs
    │   │   │       ├── lib-C1JSsICm.d.mts
    │   │   │       ├── register-DCE0tH5m.d.ts
    │   │   │       ├── register-DeIo2iHO.d.mts
    │   │   │       └── route-data-ByAYLHuM.d.mts
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── react-router-dom/
    │   │   ├── dist/
    │   │   │   ├── index.d.mts
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── index.mjs
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── read-cache/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── readdirp/
    │   │   ├── node_modules/
    │   │   │   └── picomatch/
    │   │   │       ├── lib/
    │   │   │       │   ├── constants.js
    │   │   │       │   ├── parse.js
    │   │   │       │   ├── picomatch.js
    │   │   │       │   ├── scan.js
    │   │   │       │   └── utils.js
    │   │   │       ├── CHANGELOG.md
    │   │   │       ├── index.js
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── redux/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   ├── redux.cjs
    │   │   │   │   └── redux.cjs.map
    │   │   │   ├── redux.browser.mjs
    │   │   │   ├── redux.browser.mjs.map
    │   │   │   ├── redux.d.ts
    │   │   │   ├── redux.legacy-esm.js
    │   │   │   ├── redux.mjs
    │   │   │   └── redux.mjs.map
    │   │   ├── src/
    │   │   │   ├── types/
    │   │   │   │   ├── actions.ts
    │   │   │   │   ├── middleware.ts
    │   │   │   │   ├── reducers.ts
    │   │   │   │   └── store.ts
    │   │   │   ├── utils/
    │   │   │   │   ├── actionTypes.ts
    │   │   │   │   ├── formatProdErrorMessage.ts
    │   │   │   │   ├── isAction.ts
    │   │   │   │   ├── isPlainObject.ts
    │   │   │   │   ├── kindOf.ts
    │   │   │   │   ├── symbol-observable.ts
    │   │   │   │   └── warning.ts
    │   │   │   ├── applyMiddleware.ts
    │   │   │   ├── bindActionCreators.ts
    │   │   │   ├── combineReducers.ts
    │   │   │   ├── compose.ts
    │   │   │   ├── createStore.ts
    │   │   │   └── index.ts
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── redux-thunk/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   └── redux-thunk.cjs
    │   │   │   ├── redux-thunk.d.ts
    │   │   │   ├── redux-thunk.legacy-esm.js
    │   │   │   └── redux-thunk.mjs
    │   │   ├── src/
    │   │   │   ├── index.ts
    │   │   │   └── types.ts
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── reselect/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   ├── reselect.cjs
    │   │   │   │   └── reselect.cjs.map
    │   │   │   ├── reselect.browser.mjs
    │   │   │   ├── reselect.browser.mjs.map
    │   │   │   ├── reselect.d.ts
    │   │   │   ├── reselect.legacy-esm.js
    │   │   │   ├── reselect.legacy-esm.js.map
    │   │   │   ├── reselect.mjs
    │   │   │   └── reselect.mjs.map
    │   │   ├── src/
    │   │   │   ├── autotrackMemoize/
    │   │   │   │   ├── autotracking.ts
    │   │   │   │   ├── autotrackMemoize.ts
    │   │   │   │   ├── proxy.ts
    │   │   │   │   ├── tracking.ts
    │   │   │   │   └── utils.ts
    │   │   │   ├── devModeChecks/
    │   │   │   │   ├── identityFunctionCheck.ts
    │   │   │   │   ├── inputStabilityCheck.ts
    │   │   │   │   └── setGlobalDevModeChecks.ts
    │   │   │   ├── versionedTypes/
    │   │   │   │   ├── index.ts
    │   │   │   │   └── ts47-mergeParameters.ts
    │   │   │   ├── createSelectorCreator.ts
    │   │   │   ├── createStructuredSelector.ts
    │   │   │   ├── index.ts
    │   │   │   ├── lruMemoize.ts
    │   │   │   ├── types.ts
    │   │   │   ├── utils.ts
    │   │   │   └── weakMapMemoize.ts
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── resolve/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── bin/
    │   │   │   └── resolve
    │   │   ├── example/
    │   │   │   ├── async.js
    │   │   │   └── sync.js
    │   │   ├── lib/
    │   │   │   ├── async.js
    │   │   │   ├── caller.js
    │   │   │   ├── core.js
    │   │   │   ├── core.json
    │   │   │   ├── homedir.js
    │   │   │   ├── is-core.js
    │   │   │   ├── node-modules-paths.js
    │   │   │   ├── normalize-options.js
    │   │   │   └── sync.js
    │   │   ├── test/
    │   │   │   ├── dotdot/
    │   │   │   │   ├── abc/
    │   │   │   │   │   └── index.js
    │   │   │   │   └── index.js
    │   │   │   ├── module_dir/
    │   │   │   │   ├── xmodules/
    │   │   │   │   │   └── aaa/
    │   │   │   │   │       └── index.js
    │   │   │   │   ├── ymodules/
    │   │   │   │   │   └── aaa/
    │   │   │   │   │       └── index.js
    │   │   │   │   └── zmodules/
    │   │   │   │       └── bbb/
    │   │   │   │           ├── main.js
    │   │   │   │           └── package.json
    │   │   │   ├── node_path/
    │   │   │   │   ├── x/
    │   │   │   │   │   ├── aaa/
    │   │   │   │   │   │   └── index.js
    │   │   │   │   │   └── ccc/
    │   │   │   │   │       └── index.js
    │   │   │   │   └── y/
    │   │   │   │       ├── bbb/
    │   │   │   │       │   └── index.js
    │   │   │   │       └── ccc/
    │   │   │   │           └── index.js
    │   │   │   ├── pathfilter/
    │   │   │   │   └── deep_ref/
    │   │   │   │       └── main.js
    │   │   │   ├── precedence/
    │   │   │   │   ├── aaa/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── main.js
    │   │   │   │   ├── bbb/
    │   │   │   │   │   └── main.js
    │   │   │   │   ├── aaa.js
    │   │   │   │   └── bbb.js
    │   │   │   ├── resolver/
    │   │   │   │   ├── baz/
    │   │   │   │   │   ├── doom.js
    │   │   │   │   │   ├── package.json
    │   │   │   │   │   └── quux.js
    │   │   │   │   ├── browser_field/
    │   │   │   │   │   ├── a.js
    │   │   │   │   │   ├── b.js
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── dot_main/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── dot_slash_main/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── false_main/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── incorrect_main/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── invalid_main/
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── multirepo/
    │   │   │   │   │   ├── packages/
    │   │   │   │   │   │   ├── package-a/
    │   │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   │   └── package.json
    │   │   │   │   │   │   └── package-b/
    │   │   │   │   │   │       ├── index.js
    │   │   │   │   │   │       └── package.json
    │   │   │   │   │   ├── lerna.json
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── nested_symlinks/
    │   │   │   │   │   └── mylib/
    │   │   │   │   │       ├── async.js
    │   │   │   │   │       ├── package.json
    │   │   │   │   │       └── sync.js
    │   │   │   │   ├── other_path/
    │   │   │   │   │   ├── lib/
    │   │   │   │   │   │   └── other-lib.js
    │   │   │   │   │   └── root.js
    │   │   │   │   ├── quux/
    │   │   │   │   │   └── foo/
    │   │   │   │   │       └── index.js
    │   │   │   │   ├── same_names/
    │   │   │   │   │   ├── foo/
    │   │   │   │   │   │   └── index.js
    │   │   │   │   │   └── foo.js
    │   │   │   │   ├── symlinked/
    │   │   │   │   │   ├── _/
    │   │   │   │   │   │   ├── node_modules/
    │   │   │   │   │   │   │   └── foo.js
    │   │   │   │   │   │   └── symlink_target/
    │   │   │   │   │   │       └── .gitkeep
    │   │   │   │   │   └── package/
    │   │   │   │   │       ├── bar.js
    │   │   │   │   │       └── package.json
    │   │   │   │   ├── without_basedir/
    │   │   │   │   │   └── main.js
    │   │   │   │   ├── cup.coffee
    │   │   │   │   ├── foo.js
    │   │   │   │   ├── mug.coffee
    │   │   │   │   └── mug.js
    │   │   │   ├── shadowed_core/
    │   │   │   │   └── node_modules/
    │   │   │   │       └── util/
    │   │   │   │           └── index.js
    │   │   │   ├── core.js
    │   │   │   ├── dotdot.js
    │   │   │   ├── faulty_basedir.js
    │   │   │   ├── filter_sync.js
    │   │   │   ├── filter.js
    │   │   │   ├── home_paths_sync.js
    │   │   │   ├── home_paths.js
    │   │   │   ├── mock_sync.js
    │   │   │   ├── mock.js
    │   │   │   ├── module_dir.js
    │   │   │   ├── node_path.js
    │   │   │   ├── node-modules-paths.js
    │   │   │   ├── nonstring.js
    │   │   │   ├── pathfilter.js
    │   │   │   ├── precedence.js
    │   │   │   ├── resolver_sync.js
    │   │   │   ├── resolver.js
    │   │   │   ├── shadowed_core.js
    │   │   │   ├── subdirs.js
    │   │   │   └── symlinks.js
    │   │   ├── .editorconfig
    │   │   ├── .eslintrc
    │   │   ├── async.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── readme.markdown
    │   │   ├── SECURITY.md
    │   │   └── sync.js
    │   ├── resolve-from/
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── reusify/
    │   │   ├── .github/
    │   │   │   ├── workflows/
    │   │   │   │   └── ci.yml
    │   │   │   └── dependabot.yml
    │   │   ├── benchmarks/
    │   │   │   ├── createNoCodeFunction.js
    │   │   │   ├── fib.js
    │   │   │   └── reuseNoCodeFunction.js
    │   │   ├── eslint.config.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── reusify.d.ts
    │   │   ├── reusify.js
    │   │   ├── SECURITY.md
    │   │   ├── test.js
    │   │   └── tsconfig.json
    │   ├── rollup/
    │   │   ├── dist/
    │   │   │   ├── bin/
    │   │   │   │   └── rollup
    │   │   │   ├── es/
    │   │   │   │   ├── shared/
    │   │   │   │   │   ├── node-entry.js
    │   │   │   │   │   ├── parseAst.js
    │   │   │   │   │   └── watch.js
    │   │   │   │   ├── getLogFilter.js
    │   │   │   │   ├── package.json
    │   │   │   │   ├── parseAst.js
    │   │   │   │   └── rollup.js
    │   │   │   ├── shared/
    │   │   │   │   ├── fsevents-importer.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── loadConfigFile.js
    │   │   │   │   ├── parseAst.js
    │   │   │   │   ├── rollup.js
    │   │   │   │   ├── watch-cli.js
    │   │   │   │   └── watch.js
    │   │   │   ├── getLogFilter.d.ts
    │   │   │   ├── getLogFilter.js
    │   │   │   ├── loadConfigFile.d.ts
    │   │   │   ├── loadConfigFile.js
    │   │   │   ├── native.js
    │   │   │   ├── parseAst.d.ts
    │   │   │   ├── parseAst.js
    │   │   │   ├── rollup.d.ts
    │   │   │   └── rollup.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── run-parallel/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── scheduler/
    │   │   ├── cjs/
    │   │   │   ├── scheduler-unstable_mock.development.js
    │   │   │   ├── scheduler-unstable_mock.production.js
    │   │   │   ├── scheduler-unstable_post_task.development.js
    │   │   │   ├── scheduler-unstable_post_task.production.js
    │   │   │   ├── scheduler.development.js
    │   │   │   ├── scheduler.native.development.js
    │   │   │   ├── scheduler.native.production.js
    │   │   │   └── scheduler.production.js
    │   │   ├── index.js
    │   │   ├── index.native.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── unstable_mock.js
    │   │   └── unstable_post_task.js
    │   ├── semver/
    │   │   ├── bin/
    │   │   │   └── semver.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── range.bnf
    │   │   ├── README.md
    │   │   └── semver.js
    │   ├── set-cookie-parser/
    │   │   ├── lib/
    │   │   │   └── set-cookie.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── shebang-command/
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── shebang-regex/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── signal-exit/
    │   │   ├── dist/
    │   │   │   ├── cjs/
    │   │   │   │   ├── browser.d.ts
    │   │   │   │   ├── browser.d.ts.map
    │   │   │   │   ├── browser.js
    │   │   │   │   ├── browser.js.map
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.d.ts.map
    │   │   │   │   ├── index.js
    │   │   │   │   ├── index.js.map
    │   │   │   │   ├── package.json
    │   │   │   │   ├── signals.d.ts
    │   │   │   │   ├── signals.d.ts.map
    │   │   │   │   ├── signals.js
    │   │   │   │   └── signals.js.map
    │   │   │   └── mjs/
    │   │   │       ├── browser.d.ts
    │   │   │       ├── browser.d.ts.map
    │   │   │       ├── browser.js
    │   │   │       ├── browser.js.map
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.d.ts.map
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── package.json
    │   │   │       ├── signals.d.ts
    │   │   │       ├── signals.d.ts.map
    │   │   │       ├── signals.js
    │   │   │       └── signals.js.map
    │   │   ├── LICENSE.txt
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── source-map-js/
    │   │   ├── lib/
    │   │   │   ├── array-set.js
    │   │   │   ├── base64-vlq.js
    │   │   │   ├── base64.js
    │   │   │   ├── binary-search.js
    │   │   │   ├── mapping-list.js
    │   │   │   ├── quick-sort.js
    │   │   │   ├── source-map-consumer.d.ts
    │   │   │   ├── source-map-consumer.js
    │   │   │   ├── source-map-generator.d.ts
    │   │   │   ├── source-map-generator.js
    │   │   │   ├── source-node.d.ts
    │   │   │   ├── source-node.js
    │   │   │   └── util.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── source-map.d.ts
    │   │   └── source-map.js
    │   ├── string-width/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── string-width-cjs/
    │   │   ├── node_modules/
    │   │   │   ├── ansi-regex/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── license
    │   │   │   │   ├── package.json
    │   │   │   │   └── readme.md
    │   │   │   ├── emoji-regex/
    │   │   │   │   ├── es2015/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── text.js
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── LICENSE-MIT.txt
    │   │   │   │   ├── package.json
    │   │   │   │   ├── README.md
    │   │   │   │   └── text.js
    │   │   │   └── strip-ansi/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── license
    │   │   │       ├── package.json
    │   │   │       └── readme.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── strip-ansi/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── strip-ansi-cjs/
    │   │   ├── node_modules/
    │   │   │   └── ansi-regex/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── license
    │   │   │       ├── package.json
    │   │   │       └── readme.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── strip-json-comments/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── sucrase/
    │   │   ├── bin/
    │   │   │   ├── sucrase
    │   │   │   └── sucrase-node
    │   │   ├── dist/
    │   │   │   ├── esm/
    │   │   │   │   ├── parser/
    │   │   │   │   │   ├── plugins/
    │   │   │   │   │   │   ├── jsx/
    │   │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   │   └── xhtml.js
    │   │   │   │   │   │   ├── flow.js
    │   │   │   │   │   │   ├── types.js
    │   │   │   │   │   │   └── typescript.js
    │   │   │   │   │   ├── tokenizer/
    │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   ├── keywords.js
    │   │   │   │   │   │   ├── readWord.js
    │   │   │   │   │   │   ├── readWordTree.js
    │   │   │   │   │   │   ├── state.js
    │   │   │   │   │   │   └── types.js
    │   │   │   │   │   ├── traverser/
    │   │   │   │   │   │   ├── base.js
    │   │   │   │   │   │   ├── expression.js
    │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   ├── lval.js
    │   │   │   │   │   │   ├── statement.js
    │   │   │   │   │   │   └── util.js
    │   │   │   │   │   ├── util/
    │   │   │   │   │   │   ├── charcodes.js
    │   │   │   │   │   │   ├── identifier.js
    │   │   │   │   │   │   └── whitespace.js
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── transformers/
    │   │   │   │   │   ├── CJSImportTransformer.js
    │   │   │   │   │   ├── ESMImportTransformer.js
    │   │   │   │   │   ├── FlowTransformer.js
    │   │   │   │   │   ├── JestHoistTransformer.js
    │   │   │   │   │   ├── JSXTransformer.js
    │   │   │   │   │   ├── NumericSeparatorTransformer.js
    │   │   │   │   │   ├── OptionalCatchBindingTransformer.js
    │   │   │   │   │   ├── OptionalChainingNullishTransformer.js
    │   │   │   │   │   ├── ReactDisplayNameTransformer.js
    │   │   │   │   │   ├── ReactHotLoaderTransformer.js
    │   │   │   │   │   ├── RootTransformer.js
    │   │   │   │   │   ├── Transformer.js
    │   │   │   │   │   └── TypeScriptTransformer.js
    │   │   │   │   ├── util/
    │   │   │   │   │   ├── elideImportEquals.js
    │   │   │   │   │   ├── formatTokens.js
    │   │   │   │   │   ├── getClassInfo.js
    │   │   │   │   │   ├── getDeclarationInfo.js
    │   │   │   │   │   ├── getIdentifierNames.js
    │   │   │   │   │   ├── getImportExportSpecifierInfo.js
    │   │   │   │   │   ├── getJSXPragmaInfo.js
    │   │   │   │   │   ├── getNonTypeIdentifiers.js
    │   │   │   │   │   ├── getTSImportedNames.js
    │   │   │   │   │   ├── isAsyncOperation.js
    │   │   │   │   │   ├── isExportFrom.js
    │   │   │   │   │   ├── isIdentifier.js
    │   │   │   │   │   ├── removeMaybeImportAttributes.js
    │   │   │   │   │   └── shouldElideDefaultExport.js
    │   │   │   │   ├── CJSImportProcessor.js
    │   │   │   │   ├── cli.js
    │   │   │   │   ├── computeSourceMap.js
    │   │   │   │   ├── HelperManager.js
    │   │   │   │   ├── identifyShadowedGlobals.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── NameManager.js
    │   │   │   │   ├── Options-gen-types.js
    │   │   │   │   ├── Options.js
    │   │   │   │   ├── register.js
    │   │   │   │   └── TokenProcessor.js
    │   │   │   ├── parser/
    │   │   │   │   ├── plugins/
    │   │   │   │   │   ├── jsx/
    │   │   │   │   │   │   ├── index.js
    │   │   │   │   │   │   └── xhtml.js
    │   │   │   │   │   ├── flow.js
    │   │   │   │   │   ├── types.js
    │   │   │   │   │   └── typescript.js
    │   │   │   │   ├── tokenizer/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── keywords.js
    │   │   │   │   │   ├── readWord.js
    │   │   │   │   │   ├── readWordTree.js
    │   │   │   │   │   ├── state.js
    │   │   │   │   │   └── types.js
    │   │   │   │   ├── traverser/
    │   │   │   │   │   ├── base.js
    │   │   │   │   │   ├── expression.js
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── lval.js
    │   │   │   │   │   ├── statement.js
    │   │   │   │   │   └── util.js
    │   │   │   │   ├── util/
    │   │   │   │   │   ├── charcodes.js
    │   │   │   │   │   ├── identifier.js
    │   │   │   │   │   └── whitespace.js
    │   │   │   │   └── index.js
    │   │   │   ├── transformers/
    │   │   │   │   ├── CJSImportTransformer.js
    │   │   │   │   ├── ESMImportTransformer.js
    │   │   │   │   ├── FlowTransformer.js
    │   │   │   │   ├── JestHoistTransformer.js
    │   │   │   │   ├── JSXTransformer.js
    │   │   │   │   ├── NumericSeparatorTransformer.js
    │   │   │   │   ├── OptionalCatchBindingTransformer.js
    │   │   │   │   ├── OptionalChainingNullishTransformer.js
    │   │   │   │   ├── ReactDisplayNameTransformer.js
    │   │   │   │   ├── ReactHotLoaderTransformer.js
    │   │   │   │   ├── RootTransformer.js
    │   │   │   │   ├── Transformer.js
    │   │   │   │   └── TypeScriptTransformer.js
    │   │   │   ├── types/
    │   │   │   │   ├── parser/
    │   │   │   │   │   ├── plugins/
    │   │   │   │   │   │   ├── jsx/
    │   │   │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   │   │   └── xhtml.d.ts
    │   │   │   │   │   │   ├── flow.d.ts
    │   │   │   │   │   │   ├── types.d.ts
    │   │   │   │   │   │   └── typescript.d.ts
    │   │   │   │   │   ├── tokenizer/
    │   │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   │   ├── keywords.d.ts
    │   │   │   │   │   │   ├── readWord.d.ts
    │   │   │   │   │   │   ├── readWordTree.d.ts
    │   │   │   │   │   │   ├── state.d.ts
    │   │   │   │   │   │   └── types.d.ts
    │   │   │   │   │   ├── traverser/
    │   │   │   │   │   │   ├── base.d.ts
    │   │   │   │   │   │   ├── expression.d.ts
    │   │   │   │   │   │   ├── index.d.ts
    │   │   │   │   │   │   ├── lval.d.ts
    │   │   │   │   │   │   ├── statement.d.ts
    │   │   │   │   │   │   └── util.d.ts
    │   │   │   │   │   ├── util/
    │   │   │   │   │   │   ├── charcodes.d.ts
    │   │   │   │   │   │   ├── identifier.d.ts
    │   │   │   │   │   │   └── whitespace.d.ts
    │   │   │   │   │   └── index.d.ts
    │   │   │   │   ├── transformers/
    │   │   │   │   │   ├── CJSImportTransformer.d.ts
    │   │   │   │   │   ├── ESMImportTransformer.d.ts
    │   │   │   │   │   ├── FlowTransformer.d.ts
    │   │   │   │   │   ├── JestHoistTransformer.d.ts
    │   │   │   │   │   ├── JSXTransformer.d.ts
    │   │   │   │   │   ├── NumericSeparatorTransformer.d.ts
    │   │   │   │   │   ├── OptionalCatchBindingTransformer.d.ts
    │   │   │   │   │   ├── OptionalChainingNullishTransformer.d.ts
    │   │   │   │   │   ├── ReactDisplayNameTransformer.d.ts
    │   │   │   │   │   ├── ReactHotLoaderTransformer.d.ts
    │   │   │   │   │   ├── RootTransformer.d.ts
    │   │   │   │   │   ├── Transformer.d.ts
    │   │   │   │   │   └── TypeScriptTransformer.d.ts
    │   │   │   │   ├── util/
    │   │   │   │   │   ├── elideImportEquals.d.ts
    │   │   │   │   │   ├── formatTokens.d.ts
    │   │   │   │   │   ├── getClassInfo.d.ts
    │   │   │   │   │   ├── getDeclarationInfo.d.ts
    │   │   │   │   │   ├── getIdentifierNames.d.ts
    │   │   │   │   │   ├── getImportExportSpecifierInfo.d.ts
    │   │   │   │   │   ├── getJSXPragmaInfo.d.ts
    │   │   │   │   │   ├── getNonTypeIdentifiers.d.ts
    │   │   │   │   │   ├── getTSImportedNames.d.ts
    │   │   │   │   │   ├── isAsyncOperation.d.ts
    │   │   │   │   │   ├── isExportFrom.d.ts
    │   │   │   │   │   ├── isIdentifier.d.ts
    │   │   │   │   │   ├── removeMaybeImportAttributes.d.ts
    │   │   │   │   │   └── shouldElideDefaultExport.d.ts
    │   │   │   │   ├── CJSImportProcessor.d.ts
    │   │   │   │   ├── cli.d.ts
    │   │   │   │   ├── computeSourceMap.d.ts
    │   │   │   │   ├── HelperManager.d.ts
    │   │   │   │   ├── identifyShadowedGlobals.d.ts
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── NameManager.d.ts
    │   │   │   │   ├── Options-gen-types.d.ts
    │   │   │   │   ├── Options.d.ts
    │   │   │   │   ├── register.d.ts
    │   │   │   │   └── TokenProcessor.d.ts
    │   │   │   ├── util/
    │   │   │   │   ├── elideImportEquals.js
    │   │   │   │   ├── formatTokens.js
    │   │   │   │   ├── getClassInfo.js
    │   │   │   │   ├── getDeclarationInfo.js
    │   │   │   │   ├── getIdentifierNames.js
    │   │   │   │   ├── getImportExportSpecifierInfo.js
    │   │   │   │   ├── getJSXPragmaInfo.js
    │   │   │   │   ├── getNonTypeIdentifiers.js
    │   │   │   │   ├── getTSImportedNames.js
    │   │   │   │   ├── isAsyncOperation.js
    │   │   │   │   ├── isExportFrom.js
    │   │   │   │   ├── isIdentifier.js
    │   │   │   │   ├── removeMaybeImportAttributes.js
    │   │   │   │   └── shouldElideDefaultExport.js
    │   │   │   ├── CJSImportProcessor.js
    │   │   │   ├── cli.js
    │   │   │   ├── computeSourceMap.js
    │   │   │   ├── HelperManager.js
    │   │   │   ├── identifyShadowedGlobals.js
    │   │   │   ├── index.js
    │   │   │   ├── NameManager.js
    │   │   │   ├── Options-gen-types.js
    │   │   │   ├── Options.js
    │   │   │   ├── register.js
    │   │   │   └── TokenProcessor.js
    │   │   ├── register/
    │   │   │   ├── index.js
    │   │   │   ├── js.js
    │   │   │   ├── jsx.js
    │   │   │   ├── ts-legacy-module-interop.js
    │   │   │   ├── ts.js
    │   │   │   ├── tsx-legacy-module-interop.js
    │   │   │   └── tsx.js
    │   │   ├── ts-node-plugin/
    │   │   │   └── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── supports-color/
    │   │   ├── browser.js
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── supports-preserve-symlinks-flag/
    │   │   ├── .github/
    │   │   │   └── FUNDING.yml
    │   │   ├── test/
    │   │   │   └── index.js
    │   │   ├── .eslintrc
    │   │   ├── .nycrc
    │   │   ├── browser.js
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── sweetalert2/
    │   │   ├── dist/
    │   │   │   ├── sweetalert2.all.js
    │   │   │   ├── sweetalert2.all.min.js
    │   │   │   ├── sweetalert2.css
    │   │   │   ├── sweetalert2.esm.all.js
    │   │   │   ├── sweetalert2.esm.all.min.js
    │   │   │   ├── sweetalert2.esm.js
    │   │   │   ├── sweetalert2.esm.min.js
    │   │   │   ├── sweetalert2.js
    │   │   │   ├── sweetalert2.min.css
    │   │   │   └── sweetalert2.min.js
    │   │   ├── src/
    │   │   │   ├── instanceMethods/
    │   │   │   │   ├── _destroy.js
    │   │   │   │   ├── close.js
    │   │   │   │   ├── enable-disable-elements.js
    │   │   │   │   ├── getInput.js
    │   │   │   │   ├── hideLoading.js
    │   │   │   │   ├── update.js
    │   │   │   │   └── validation-message.js
    │   │   │   ├── staticMethods/
    │   │   │   │   ├── argsToParams.js
    │   │   │   │   ├── bindClickHandler.js
    │   │   │   │   ├── dom.js
    │   │   │   │   ├── eventHandlers.js
    │   │   │   │   ├── fire.js
    │   │   │   │   ├── mixin.js
    │   │   │   │   ├── showLoading.js
    │   │   │   │   └── timer.js
    │   │   │   ├── utils/
    │   │   │   │   ├── dom/
    │   │   │   │   │   ├── renderers/
    │   │   │   │   │   │   ├── render.js
    │   │   │   │   │   │   ├── renderActions.js
    │   │   │   │   │   │   ├── renderCloseButton.js
    │   │   │   │   │   │   ├── renderContainer.js
    │   │   │   │   │   │   ├── renderContent.js
    │   │   │   │   │   │   ├── renderFooter.js
    │   │   │   │   │   │   ├── renderIcon.js
    │   │   │   │   │   │   ├── renderImage.js
    │   │   │   │   │   │   ├── renderInput.js
    │   │   │   │   │   │   ├── renderPopup.js
    │   │   │   │   │   │   ├── renderProgressSteps.js
    │   │   │   │   │   │   └── renderTitle.js
    │   │   │   │   │   ├── domUtils.js
    │   │   │   │   │   ├── getters.js
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── init.js
    │   │   │   │   │   ├── inputUtils.js
    │   │   │   │   │   └── parseHtmlToContainer.js
    │   │   │   │   ├── aria.js
    │   │   │   │   ├── classes.js
    │   │   │   │   ├── defaultInputValidators.js
    │   │   │   │   ├── DismissReason.js
    │   │   │   │   ├── draggable.js
    │   │   │   │   ├── EventEmitter.js
    │   │   │   │   ├── getTemplateParams.js
    │   │   │   │   ├── iosFix.js
    │   │   │   │   ├── isNodeEnv.js
    │   │   │   │   ├── openPopup.js
    │   │   │   │   ├── params.js
    │   │   │   │   ├── scrollbar.js
    │   │   │   │   ├── setParameters.js
    │   │   │   │   ├── Timer.js
    │   │   │   │   └── utils.js
    │   │   │   ├── buttons-handlers.js
    │   │   │   ├── constants.js
    │   │   │   ├── globalState.js
    │   │   │   ├── instanceMethods.js
    │   │   │   ├── keydown-handler.js
    │   │   │   ├── popup-click-handler.js
    │   │   │   ├── privateMethods.js
    │   │   │   ├── privateProps.js
    │   │   │   ├── staticMethods.js
    │   │   │   ├── SweetAlert.js
    │   │   │   ├── sweetalert2.js
    │   │   │   ├── sweetalert2.scss
    │   │   │   └── types.js
    │   │   ├── themes/
    │   │   │   ├── borderless.css
    │   │   │   ├── bulma.css
    │   │   │   ├── embed-iframe.css
    │   │   │   └── minimal.css
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── sweetalert2.d.ts
    │   ├── tailwindcss/
    │   │   ├── lib/
    │   │   │   ├── cli/
    │   │   │   │   ├── build/
    │   │   │   │   │   ├── deps.js
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── plugin.js
    │   │   │   │   │   ├── utils.js
    │   │   │   │   │   └── watching.js
    │   │   │   │   ├── help/
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── init/
    │   │   │   │   │   └── index.js
    │   │   │   │   └── index.js
    │   │   │   ├── css/
    │   │   │   │   ├── LICENSE
    │   │   │   │   └── preflight.css
    │   │   │   ├── lib/
    │   │   │   │   ├── cacheInvalidation.js
    │   │   │   │   ├── collapseAdjacentRules.js
    │   │   │   │   ├── collapseDuplicateDeclarations.js
    │   │   │   │   ├── content.js
    │   │   │   │   ├── defaultExtractor.js
    │   │   │   │   ├── evaluateTailwindFunctions.js
    │   │   │   │   ├── expandApplyAtRules.js
    │   │   │   │   ├── expandTailwindAtRules.js
    │   │   │   │   ├── findAtConfigPath.js
    │   │   │   │   ├── generateRules.js
    │   │   │   │   ├── getModuleDependencies.js
    │   │   │   │   ├── load-config.js
    │   │   │   │   ├── normalizeTailwindDirectives.js
    │   │   │   │   ├── offsets.js
    │   │   │   │   ├── partitionApplyAtRules.js
    │   │   │   │   ├── regex.js
    │   │   │   │   ├── remap-bitfield.js
    │   │   │   │   ├── resolveDefaultsAtRules.js
    │   │   │   │   ├── setupContextUtils.js
    │   │   │   │   ├── setupTrackingContext.js
    │   │   │   │   ├── sharedState.js
    │   │   │   │   └── substituteScreenAtRules.js
    │   │   │   ├── postcss-plugins/
    │   │   │   │   └── nesting/
    │   │   │   │       ├── index.js
    │   │   │   │       ├── plugin.js
    │   │   │   │       └── README.md
    │   │   │   ├── public/
    │   │   │   │   ├── colors.js
    │   │   │   │   ├── create-plugin.js
    │   │   │   │   ├── default-config.js
    │   │   │   │   ├── default-theme.js
    │   │   │   │   ├── load-config.js
    │   │   │   │   └── resolve-config.js
    │   │   │   ├── util/
    │   │   │   │   ├── applyImportantSelector.js
    │   │   │   │   ├── bigSign.js
    │   │   │   │   ├── buildMediaQuery.js
    │   │   │   │   ├── cloneDeep.js
    │   │   │   │   ├── cloneNodes.js
    │   │   │   │   ├── color.js
    │   │   │   │   ├── colorNames.js
    │   │   │   │   ├── configurePlugins.js
    │   │   │   │   ├── createPlugin.js
    │   │   │   │   ├── createUtilityPlugin.js
    │   │   │   │   ├── dataTypes.js
    │   │   │   │   ├── defaults.js
    │   │   │   │   ├── escapeClassName.js
    │   │   │   │   ├── escapeCommas.js
    │   │   │   │   ├── flattenColorPalette.js
    │   │   │   │   ├── formatVariantSelector.js
    │   │   │   │   ├── getAllConfigs.js
    │   │   │   │   ├── hashConfig.js
    │   │   │   │   ├── isKeyframeRule.js
    │   │   │   │   ├── isPlainObject.js
    │   │   │   │   ├── isSyntacticallyValidPropertyValue.js
    │   │   │   │   ├── log.js
    │   │   │   │   ├── nameClass.js
    │   │   │   │   ├── negateValue.js
    │   │   │   │   ├── normalizeConfig.js
    │   │   │   │   ├── normalizeScreens.js
    │   │   │   │   ├── parseAnimationValue.js
    │   │   │   │   ├── parseBoxShadowValue.js
    │   │   │   │   ├── parseDependency.js
    │   │   │   │   ├── parseGlob.js
    │   │   │   │   ├── parseObjectStyles.js
    │   │   │   │   ├── pluginUtils.js
    │   │   │   │   ├── prefixSelector.js
    │   │   │   │   ├── pseudoElements.js
    │   │   │   │   ├── removeAlphaVariables.js
    │   │   │   │   ├── resolveConfig.js
    │   │   │   │   ├── resolveConfigPath.js
    │   │   │   │   ├── responsive.js
    │   │   │   │   ├── splitAtTopLevelOnly.js
    │   │   │   │   ├── tap.js
    │   │   │   │   ├── toColorValue.js
    │   │   │   │   ├── toPath.js
    │   │   │   │   ├── transformThemeValue.js
    │   │   │   │   ├── validateConfig.js
    │   │   │   │   ├── validateFormalSyntax.js
    │   │   │   │   └── withAlphaVariable.js
    │   │   │   ├── value-parser/
    │   │   │   │   ├── index.d.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── parse.js
    │   │   │   │   ├── README.md
    │   │   │   │   ├── stringify.js
    │   │   │   │   ├── unit.js
    │   │   │   │   └── walk.js
    │   │   │   ├── cli-peer-dependencies.js
    │   │   │   ├── cli.js
    │   │   │   ├── corePluginList.js
    │   │   │   ├── corePlugins.js
    │   │   │   ├── featureFlags.js
    │   │   │   ├── index.js
    │   │   │   ├── plugin.js
    │   │   │   └── processTailwindFeatures.js
    │   │   ├── nesting/
    │   │   │   ├── index.d.ts
    │   │   │   └── index.js
    │   │   ├── peers/
    │   │   │   └── index.js
    │   │   ├── scripts/
    │   │   │   ├── create-plugin-list.js
    │   │   │   ├── generate-types.js
    │   │   │   ├── release-channel.js
    │   │   │   ├── release-notes.js
    │   │   │   └── type-utils.js
    │   │   ├── src/
    │   │   │   ├── cli/
    │   │   │   │   ├── build/
    │   │   │   │   │   ├── deps.js
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── plugin.js
    │   │   │   │   │   ├── utils.js
    │   │   │   │   │   └── watching.js
    │   │   │   │   ├── help/
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── init/
    │   │   │   │   │   └── index.js
    │   │   │   │   └── index.js
    │   │   │   ├── css/
    │   │   │   │   ├── LICENSE
    │   │   │   │   └── preflight.css
    │   │   │   ├── lib/
    │   │   │   │   ├── cacheInvalidation.js
    │   │   │   │   ├── collapseAdjacentRules.js
    │   │   │   │   ├── collapseDuplicateDeclarations.js
    │   │   │   │   ├── content.js
    │   │   │   │   ├── defaultExtractor.js
    │   │   │   │   ├── evaluateTailwindFunctions.js
    │   │   │   │   ├── expandApplyAtRules.js
    │   │   │   │   ├── expandTailwindAtRules.js
    │   │   │   │   ├── findAtConfigPath.js
    │   │   │   │   ├── generateRules.js
    │   │   │   │   ├── getModuleDependencies.js
    │   │   │   │   ├── load-config.ts
    │   │   │   │   ├── normalizeTailwindDirectives.js
    │   │   │   │   ├── offsets.js
    │   │   │   │   ├── partitionApplyAtRules.js
    │   │   │   │   ├── regex.js
    │   │   │   │   ├── remap-bitfield.js
    │   │   │   │   ├── resolveDefaultsAtRules.js
    │   │   │   │   ├── setupContextUtils.js
    │   │   │   │   ├── setupTrackingContext.js
    │   │   │   │   ├── sharedState.js
    │   │   │   │   └── substituteScreenAtRules.js
    │   │   │   ├── postcss-plugins/
    │   │   │   │   └── nesting/
    │   │   │   │       ├── index.js
    │   │   │   │       ├── plugin.js
    │   │   │   │       └── README.md
    │   │   │   ├── public/
    │   │   │   │   ├── colors.js
    │   │   │   │   ├── create-plugin.js
    │   │   │   │   ├── default-config.js
    │   │   │   │   ├── default-theme.js
    │   │   │   │   ├── load-config.js
    │   │   │   │   └── resolve-config.js
    │   │   │   ├── util/
    │   │   │   │   ├── applyImportantSelector.js
    │   │   │   │   ├── bigSign.js
    │   │   │   │   ├── buildMediaQuery.js
    │   │   │   │   ├── cloneDeep.js
    │   │   │   │   ├── cloneNodes.js
    │   │   │   │   ├── color.js
    │   │   │   │   ├── colorNames.js
    │   │   │   │   ├── configurePlugins.js
    │   │   │   │   ├── createPlugin.js
    │   │   │   │   ├── createUtilityPlugin.js
    │   │   │   │   ├── dataTypes.js
    │   │   │   │   ├── defaults.js
    │   │   │   │   ├── escapeClassName.js
    │   │   │   │   ├── escapeCommas.js
    │   │   │   │   ├── flattenColorPalette.js
    │   │   │   │   ├── formatVariantSelector.js
    │   │   │   │   ├── getAllConfigs.js
    │   │   │   │   ├── hashConfig.js
    │   │   │   │   ├── isKeyframeRule.js
    │   │   │   │   ├── isPlainObject.js
    │   │   │   │   ├── isSyntacticallyValidPropertyValue.js
    │   │   │   │   ├── log.js
    │   │   │   │   ├── nameClass.js
    │   │   │   │   ├── negateValue.js
    │   │   │   │   ├── normalizeConfig.js
    │   │   │   │   ├── normalizeScreens.js
    │   │   │   │   ├── parseAnimationValue.js
    │   │   │   │   ├── parseBoxShadowValue.js
    │   │   │   │   ├── parseDependency.js
    │   │   │   │   ├── parseGlob.js
    │   │   │   │   ├── parseObjectStyles.js
    │   │   │   │   ├── pluginUtils.js
    │   │   │   │   ├── prefixSelector.js
    │   │   │   │   ├── pseudoElements.js
    │   │   │   │   ├── removeAlphaVariables.js
    │   │   │   │   ├── resolveConfig.js
    │   │   │   │   ├── resolveConfigPath.js
    │   │   │   │   ├── responsive.js
    │   │   │   │   ├── splitAtTopLevelOnly.js
    │   │   │   │   ├── tap.js
    │   │   │   │   ├── toColorValue.js
    │   │   │   │   ├── toPath.js
    │   │   │   │   ├── transformThemeValue.js
    │   │   │   │   ├── validateConfig.js
    │   │   │   │   ├── validateFormalSyntax.js
    │   │   │   │   └── withAlphaVariable.js
    │   │   │   ├── value-parser/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── parse.js
    │   │   │   │   ├── README.md
    │   │   │   │   ├── stringify.js
    │   │   │   │   ├── unit.js
    │   │   │   │   └── walk.js
    │   │   │   ├── cli-peer-dependencies.js
    │   │   │   ├── cli.js
    │   │   │   ├── corePluginList.js
    │   │   │   ├── corePlugins.js
    │   │   │   ├── featureFlags.js
    │   │   │   ├── index.js
    │   │   │   ├── plugin.js
    │   │   │   └── processTailwindFeatures.js
    │   │   ├── stubs/
    │   │   │   ├── .npmignore
    │   │   │   ├── .prettierrc.json
    │   │   │   ├── config.full.js
    │   │   │   ├── config.simple.js
    │   │   │   ├── postcss.config.cjs
    │   │   │   ├── postcss.config.js
    │   │   │   ├── tailwind.config.cjs
    │   │   │   ├── tailwind.config.js
    │   │   │   └── tailwind.config.ts
    │   │   ├── types/
    │   │   │   ├── generated/
    │   │   │   │   ├── .gitkeep
    │   │   │   │   ├── colors.d.ts
    │   │   │   │   ├── corePluginList.d.ts
    │   │   │   │   └── default-theme.d.ts
    │   │   │   ├── config.d.ts
    │   │   │   └── index.d.ts
    │   │   ├── base.css
    │   │   ├── CHANGELOG.md
    │   │   ├── colors.d.ts
    │   │   ├── colors.js
    │   │   ├── components.css
    │   │   ├── defaultConfig.d.ts
    │   │   ├── defaultConfig.js
    │   │   ├── defaultTheme.d.ts
    │   │   ├── defaultTheme.js
    │   │   ├── LICENSE
    │   │   ├── loadConfig.d.ts
    │   │   ├── loadConfig.js
    │   │   ├── package.json
    │   │   ├── plugin.d.ts
    │   │   ├── plugin.js
    │   │   ├── prettier.config.js
    │   │   ├── README.md
    │   │   ├── resolveConfig.d.ts
    │   │   ├── resolveConfig.js
    │   │   ├── screens.css
    │   │   ├── tailwind.css
    │   │   ├── utilities.css
    │   │   └── variants.css
    │   ├── thenify/
    │   │   ├── History.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── thenify-all/
    │   │   ├── History.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── tiny-case/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test.js
    │   │   └── tsconfig.json
    │   ├── tinyglobby/
    │   │   ├── dist/
    │   │   │   ├── index.d.mts
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── index.mjs
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── to-regex-range/
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── toposort/
    │   │   ├── .npmignore
    │   │   ├── .travis.yml
    │   │   ├── component.json
    │   │   ├── graph.svg
    │   │   ├── index.js
    │   │   ├── License
    │   │   ├── Makefile
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── test.js
    │   ├── ts-interface-checker/
    │   │   ├── dist/
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── types.d.ts
    │   │   │   ├── types.js
    │   │   │   ├── util.d.ts
    │   │   │   └── util.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── tslib/
    │   │   ├── modules/
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── package.json
    │   │   ├── CopyrightNotice.txt
    │   │   ├── LICENSE.txt
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── tslib.d.ts
    │   │   ├── tslib.es6.html
    │   │   ├── tslib.es6.js
    │   │   ├── tslib.es6.mjs
    │   │   ├── tslib.html
    │   │   └── tslib.js
    │   ├── type-check/
    │   │   ├── lib/
    │   │   │   ├── check.js
    │   │   │   ├── index.js
    │   │   │   └── parse-type.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── type-fest/
    │   │   ├── source/
    │   │   │   ├── async-return-type.d.ts
    │   │   │   ├── asyncify.d.ts
    │   │   │   ├── basic.d.ts
    │   │   │   ├── camel-case.d.ts
    │   │   │   ├── camel-cased-properties-deep.d.ts
    │   │   │   ├── camel-cased-properties.d.ts
    │   │   │   ├── conditional-except.d.ts
    │   │   │   ├── conditional-keys.d.ts
    │   │   │   ├── conditional-pick.d.ts
    │   │   │   ├── delimiter-case.d.ts
    │   │   │   ├── delimiter-cased-properties-deep.d.ts
    │   │   │   ├── delimiter-cased-properties.d.ts
    │   │   │   ├── entries.d.ts
    │   │   │   ├── entry.d.ts
    │   │   │   ├── exact.d.ts
    │   │   │   ├── except.d.ts
    │   │   │   ├── fixed-length-array.d.ts
    │   │   │   ├── get.d.ts
    │   │   │   ├── has-optional-keys.d.ts
    │   │   │   ├── has-required-keys.d.ts
    │   │   │   ├── includes.d.ts
    │   │   │   ├── internal.d.ts
    │   │   │   ├── invariant-of.d.ts
    │   │   │   ├── iterable-element.d.ts
    │   │   │   ├── join.d.ts
    │   │   │   ├── jsonify.d.ts
    │   │   │   ├── kebab-case.d.ts
    │   │   │   ├── kebab-cased-properties-deep.d.ts
    │   │   │   ├── kebab-cased-properties.d.ts
    │   │   │   ├── last-array-element.d.ts
    │   │   │   ├── literal-to-primitive.d.ts
    │   │   │   ├── literal-union.d.ts
    │   │   │   ├── merge-exclusive.d.ts
    │   │   │   ├── merge.d.ts
    │   │   │   ├── multidimensional-array.d.ts
    │   │   │   ├── multidimensional-readonly-array.d.ts
    │   │   │   ├── mutable.d.ts
    │   │   │   ├── numeric.d.ts
    │   │   │   ├── observable-like.d.ts
    │   │   │   ├── opaque.d.ts
    │   │   │   ├── optional-keys-of.d.ts
    │   │   │   ├── package-json.d.ts
    │   │   │   ├── partial-deep.d.ts
    │   │   │   ├── partial-on-undefined-deep.d.ts
    │   │   │   ├── pascal-case.d.ts
    │   │   │   ├── pascal-cased-properties-deep.d.ts
    │   │   │   ├── pascal-cased-properties.d.ts
    │   │   │   ├── primitive.d.ts
    │   │   │   ├── promisable.d.ts
    │   │   │   ├── promise-value.d.ts
    │   │   │   ├── readonly-deep.d.ts
    │   │   │   ├── readonly-tuple.d.ts
    │   │   │   ├── remove-index-signature.d.ts
    │   │   │   ├── replace.d.ts
    │   │   │   ├── require-all-or-none.d.ts
    │   │   │   ├── require-at-least-one.d.ts
    │   │   │   ├── require-exactly-one.d.ts
    │   │   │   ├── required-keys-of.d.ts
    │   │   │   ├── schema.d.ts
    │   │   │   ├── screaming-snake-case.d.ts
    │   │   │   ├── set-non-nullable.d.ts
    │   │   │   ├── set-optional.d.ts
    │   │   │   ├── set-required.d.ts
    │   │   │   ├── set-return-type.d.ts
    │   │   │   ├── simplify.d.ts
    │   │   │   ├── snake-case.d.ts
    │   │   │   ├── snake-cased-properties-deep.d.ts
    │   │   │   ├── snake-cased-properties.d.ts
    │   │   │   ├── split.d.ts
    │   │   │   ├── spread.d.ts
    │   │   │   ├── string-key-of.d.ts
    │   │   │   ├── stringified.d.ts
    │   │   │   ├── trim.d.ts
    │   │   │   ├── tsconfig-json.d.ts
    │   │   │   ├── typed-array.d.ts
    │   │   │   ├── union-to-intersection.d.ts
    │   │   │   ├── value-of.d.ts
    │   │   │   └── writable.d.ts
    │   │   ├── index.d.ts
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── update-browserslist-db/
    │   │   ├── check-npm-version.js
    │   │   ├── cli.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── utils.js
    │   ├── uri-js/
    │   │   ├── dist/
    │   │   │   ├── es5/
    │   │   │   │   ├── uri.all.d.ts
    │   │   │   │   ├── uri.all.js
    │   │   │   │   ├── uri.all.js.map
    │   │   │   │   ├── uri.all.min.d.ts
    │   │   │   │   ├── uri.all.min.js
    │   │   │   │   └── uri.all.min.js.map
    │   │   │   └── esnext/
    │   │   │       ├── schemes/
    │   │   │       │   ├── http.d.ts
    │   │   │       │   ├── http.js
    │   │   │       │   ├── http.js.map
    │   │   │       │   ├── https.d.ts
    │   │   │       │   ├── https.js
    │   │   │       │   ├── https.js.map
    │   │   │       │   ├── mailto.d.ts
    │   │   │       │   ├── mailto.js
    │   │   │       │   ├── mailto.js.map
    │   │   │       │   ├── urn-uuid.d.ts
    │   │   │       │   ├── urn-uuid.js
    │   │   │       │   ├── urn-uuid.js.map
    │   │   │       │   ├── urn.d.ts
    │   │   │       │   ├── urn.js
    │   │   │       │   ├── urn.js.map
    │   │   │       │   ├── ws.d.ts
    │   │   │       │   ├── ws.js
    │   │   │       │   ├── ws.js.map
    │   │   │       │   ├── wss.d.ts
    │   │   │       │   ├── wss.js
    │   │   │       │   └── wss.js.map
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── regexps-iri.d.ts
    │   │   │       ├── regexps-iri.js
    │   │   │       ├── regexps-iri.js.map
    │   │   │       ├── regexps-uri.d.ts
    │   │   │       ├── regexps-uri.js
    │   │   │       ├── regexps-uri.js.map
    │   │   │       ├── uri.d.ts
    │   │   │       ├── uri.js
    │   │   │       ├── uri.js.map
    │   │   │       ├── util.d.ts
    │   │   │       ├── util.js
    │   │   │       └── util.js.map
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── yarn.lock
    │   ├── use-sync-external-store/
    │   │   ├── cjs/
    │   │   │   ├── use-sync-external-store-shim/
    │   │   │   │   ├── with-selector.development.js
    │   │   │   │   └── with-selector.production.js
    │   │   │   ├── use-sync-external-store-shim.development.js
    │   │   │   ├── use-sync-external-store-shim.native.development.js
    │   │   │   ├── use-sync-external-store-shim.native.production.js
    │   │   │   ├── use-sync-external-store-shim.production.js
    │   │   │   ├── use-sync-external-store-with-selector.development.js
    │   │   │   ├── use-sync-external-store-with-selector.production.js
    │   │   │   ├── use-sync-external-store.development.js
    │   │   │   └── use-sync-external-store.production.js
    │   │   ├── shim/
    │   │   │   ├── index.js
    │   │   │   ├── index.native.js
    │   │   │   └── with-selector.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── with-selector.js
    │   ├── util-deprecate/
    │   │   ├── browser.js
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── node.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── vite/
    │   │   ├── bin/
    │   │   │   ├── openChrome.applescript
    │   │   │   └── vite.js
    │   │   ├── dist/
    │   │   │   ├── client/
    │   │   │   │   ├── client.mjs
    │   │   │   │   └── env.mjs
    │   │   │   └── node/
    │   │   │       ├── chunks/
    │   │   │       │   ├── dep-BDIuIvL4.js
    │   │   │       │   ├── dep-BO5GbxpL.js
    │   │   │       │   ├── dep-BrEuKyO0.js
    │   │   │       │   ├── dep-Bsx9IwL8.js
    │   │   │       │   ├── dep-Ctugieod.js
    │   │   │       │   ├── dep-DcjhO6Jt.js
    │   │   │       │   ├── dep-DmY5m86w.js
    │   │   │       │   ├── dep-DnkJBLYF.js
    │   │   │       │   ├── dep-Do-w1DD4.js
    │   │   │       │   ├── dep-Drtntmtt.js
    │   │   │       │   └── dep-pyXEOwQv.js
    │   │   │       ├── cli.js
    │   │   │       ├── constants.js
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── module-runner.d.ts
    │   │   │       ├── module-runner.js
    │   │   │       └── moduleRunnerTransport-BWUZBVLX.d.ts
    │   │   ├── misc/
    │   │   │   ├── false.js
    │   │   │   └── true.js
    │   │   ├── types/
    │   │   │   ├── internal/
    │   │   │   │   ├── cssPreprocessorOptions.d.ts
    │   │   │   │   ├── lightningcssOptions.d.ts
    │   │   │   │   └── terserOptions.d.ts
    │   │   │   ├── customEvent.d.ts
    │   │   │   ├── hmrPayload.d.ts
    │   │   │   ├── hot.d.ts
    │   │   │   ├── import-meta.d.ts
    │   │   │   ├── importGlob.d.ts
    │   │   │   ├── importMeta.d.ts
    │   │   │   ├── metadata.d.ts
    │   │   │   └── package.json
    │   │   ├── client.d.ts
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── which/
    │   │   ├── bin/
    │   │   │   └── node-which
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── which.js
    │   ├── word-wrap/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── wrap-ansi/
    │   │   ├── node_modules/
    │   │   │   └── ansi-styles/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── license
    │   │   │       ├── package.json
    │   │   │       └── readme.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── wrap-ansi-cjs/
    │   │   ├── node_modules/
    │   │   │   ├── ansi-regex/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── license
    │   │   │   │   ├── package.json
    │   │   │   │   └── readme.md
    │   │   │   ├── emoji-regex/
    │   │   │   │   ├── es2015/
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   └── text.js
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── LICENSE-MIT.txt
    │   │   │   │   ├── package.json
    │   │   │   │   ├── README.md
    │   │   │   │   └── text.js
    │   │   │   ├── string-width/
    │   │   │   │   ├── index.d.ts
    │   │   │   │   ├── index.js
    │   │   │   │   ├── license
    │   │   │   │   ├── package.json
    │   │   │   │   └── readme.md
    │   │   │   └── strip-ansi/
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── license
    │   │   │       ├── package.json
    │   │   │       └── readme.md
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── yallist/
    │   │   ├── iterator.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── yallist.js
    │   ├── yaml/
    │   │   ├── browser/
    │   │   │   ├── dist/
    │   │   │   │   ├── compose/
    │   │   │   │   │   ├── compose-collection.js
    │   │   │   │   │   ├── compose-doc.js
    │   │   │   │   │   ├── compose-node.js
    │   │   │   │   │   ├── compose-scalar.js
    │   │   │   │   │   ├── composer.js
    │   │   │   │   │   ├── resolve-block-map.js
    │   │   │   │   │   ├── resolve-block-scalar.js
    │   │   │   │   │   ├── resolve-block-seq.js
    │   │   │   │   │   ├── resolve-end.js
    │   │   │   │   │   ├── resolve-flow-collection.js
    │   │   │   │   │   ├── resolve-flow-scalar.js
    │   │   │   │   │   ├── resolve-props.js
    │   │   │   │   │   ├── util-contains-newline.js
    │   │   │   │   │   ├── util-empty-scalar-position.js
    │   │   │   │   │   ├── util-flow-indent-check.js
    │   │   │   │   │   └── util-map-includes.js
    │   │   │   │   ├── doc/
    │   │   │   │   │   ├── anchors.js
    │   │   │   │   │   ├── applyReviver.js
    │   │   │   │   │   ├── createNode.js
    │   │   │   │   │   ├── directives.js
    │   │   │   │   │   └── Document.js
    │   │   │   │   ├── nodes/
    │   │   │   │   │   ├── addPairToJSMap.js
    │   │   │   │   │   ├── Alias.js
    │   │   │   │   │   ├── Collection.js
    │   │   │   │   │   ├── identity.js
    │   │   │   │   │   ├── Node.js
    │   │   │   │   │   ├── Pair.js
    │   │   │   │   │   ├── Scalar.js
    │   │   │   │   │   ├── toJS.js
    │   │   │   │   │   ├── YAMLMap.js
    │   │   │   │   │   └── YAMLSeq.js
    │   │   │   │   ├── parse/
    │   │   │   │   │   ├── cst-scalar.js
    │   │   │   │   │   ├── cst-stringify.js
    │   │   │   │   │   ├── cst-visit.js
    │   │   │   │   │   ├── cst.js
    │   │   │   │   │   ├── lexer.js
    │   │   │   │   │   ├── line-counter.js
    │   │   │   │   │   └── parser.js
    │   │   │   │   ├── schema/
    │   │   │   │   │   ├── common/
    │   │   │   │   │   │   ├── map.js
    │   │   │   │   │   │   ├── null.js
    │   │   │   │   │   │   ├── seq.js
    │   │   │   │   │   │   └── string.js
    │   │   │   │   │   ├── core/
    │   │   │   │   │   │   ├── bool.js
    │   │   │   │   │   │   ├── float.js
    │   │   │   │   │   │   ├── int.js
    │   │   │   │   │   │   └── schema.js
    │   │   │   │   │   ├── json/
    │   │   │   │   │   │   └── schema.js
    │   │   │   │   │   ├── yaml-1.1/
    │   │   │   │   │   │   ├── binary.js
    │   │   │   │   │   │   ├── bool.js
    │   │   │   │   │   │   ├── float.js
    │   │   │   │   │   │   ├── int.js
    │   │   │   │   │   │   ├── merge.js
    │   │   │   │   │   │   ├── omap.js
    │   │   │   │   │   │   ├── pairs.js
    │   │   │   │   │   │   ├── schema.js
    │   │   │   │   │   │   ├── set.js
    │   │   │   │   │   │   └── timestamp.js
    │   │   │   │   │   ├── Schema.js
    │   │   │   │   │   └── tags.js
    │   │   │   │   ├── stringify/
    │   │   │   │   │   ├── foldFlowLines.js
    │   │   │   │   │   ├── stringify.js
    │   │   │   │   │   ├── stringifyCollection.js
    │   │   │   │   │   ├── stringifyComment.js
    │   │   │   │   │   ├── stringifyDocument.js
    │   │   │   │   │   ├── stringifyNumber.js
    │   │   │   │   │   ├── stringifyPair.js
    │   │   │   │   │   └── stringifyString.js
    │   │   │   │   ├── errors.js
    │   │   │   │   ├── index.js
    │   │   │   │   ├── log.js
    │   │   │   │   ├── public-api.js
    │   │   │   │   ├── util.js
    │   │   │   │   └── visit.js
    │   │   │   ├── index.js
    │   │   │   └── package.json
    │   │   ├── dist/
    │   │   │   ├── compose/
    │   │   │   │   ├── compose-collection.d.ts
    │   │   │   │   ├── compose-collection.js
    │   │   │   │   ├── compose-doc.d.ts
    │   │   │   │   ├── compose-doc.js
    │   │   │   │   ├── compose-node.d.ts
    │   │   │   │   ├── compose-node.js
    │   │   │   │   ├── compose-scalar.d.ts
    │   │   │   │   ├── compose-scalar.js
    │   │   │   │   ├── composer.d.ts
    │   │   │   │   ├── composer.js
    │   │   │   │   ├── resolve-block-map.d.ts
    │   │   │   │   ├── resolve-block-map.js
    │   │   │   │   ├── resolve-block-scalar.d.ts
    │   │   │   │   ├── resolve-block-scalar.js
    │   │   │   │   ├── resolve-block-seq.d.ts
    │   │   │   │   ├── resolve-block-seq.js
    │   │   │   │   ├── resolve-end.d.ts
    │   │   │   │   ├── resolve-end.js
    │   │   │   │   ├── resolve-flow-collection.d.ts
    │   │   │   │   ├── resolve-flow-collection.js
    │   │   │   │   ├── resolve-flow-scalar.d.ts
    │   │   │   │   ├── resolve-flow-scalar.js
    │   │   │   │   ├── resolve-props.d.ts
    │   │   │   │   ├── resolve-props.js
    │   │   │   │   ├── util-contains-newline.d.ts
    │   │   │   │   ├── util-contains-newline.js
    │   │   │   │   ├── util-empty-scalar-position.d.ts
    │   │   │   │   ├── util-empty-scalar-position.js
    │   │   │   │   ├── util-flow-indent-check.d.ts
    │   │   │   │   ├── util-flow-indent-check.js
    │   │   │   │   ├── util-map-includes.d.ts
    │   │   │   │   └── util-map-includes.js
    │   │   │   ├── doc/
    │   │   │   │   ├── anchors.d.ts
    │   │   │   │   ├── anchors.js
    │   │   │   │   ├── applyReviver.d.ts
    │   │   │   │   ├── applyReviver.js
    │   │   │   │   ├── createNode.d.ts
    │   │   │   │   ├── createNode.js
    │   │   │   │   ├── directives.d.ts
    │   │   │   │   ├── directives.js
    │   │   │   │   ├── Document.d.ts
    │   │   │   │   └── Document.js
    │   │   │   ├── nodes/
    │   │   │   │   ├── addPairToJSMap.d.ts
    │   │   │   │   ├── addPairToJSMap.js
    │   │   │   │   ├── Alias.d.ts
    │   │   │   │   ├── Alias.js
    │   │   │   │   ├── Collection.d.ts
    │   │   │   │   ├── Collection.js
    │   │   │   │   ├── identity.d.ts
    │   │   │   │   ├── identity.js
    │   │   │   │   ├── Node.d.ts
    │   │   │   │   ├── Node.js
    │   │   │   │   ├── Pair.d.ts
    │   │   │   │   ├── Pair.js
    │   │   │   │   ├── Scalar.d.ts
    │   │   │   │   ├── Scalar.js
    │   │   │   │   ├── toJS.d.ts
    │   │   │   │   ├── toJS.js
    │   │   │   │   ├── YAMLMap.d.ts
    │   │   │   │   ├── YAMLMap.js
    │   │   │   │   ├── YAMLSeq.d.ts
    │   │   │   │   └── YAMLSeq.js
    │   │   │   ├── parse/
    │   │   │   │   ├── cst-scalar.d.ts
    │   │   │   │   ├── cst-scalar.js
    │   │   │   │   ├── cst-stringify.d.ts
    │   │   │   │   ├── cst-stringify.js
    │   │   │   │   ├── cst-visit.d.ts
    │   │   │   │   ├── cst-visit.js
    │   │   │   │   ├── cst.d.ts
    │   │   │   │   ├── cst.js
    │   │   │   │   ├── lexer.d.ts
    │   │   │   │   ├── lexer.js
    │   │   │   │   ├── line-counter.d.ts
    │   │   │   │   ├── line-counter.js
    │   │   │   │   ├── parser.d.ts
    │   │   │   │   └── parser.js
    │   │   │   ├── schema/
    │   │   │   │   ├── common/
    │   │   │   │   │   ├── map.d.ts
    │   │   │   │   │   ├── map.js
    │   │   │   │   │   ├── null.d.ts
    │   │   │   │   │   ├── null.js
    │   │   │   │   │   ├── seq.d.ts
    │   │   │   │   │   ├── seq.js
    │   │   │   │   │   ├── string.d.ts
    │   │   │   │   │   └── string.js
    │   │   │   │   ├── core/
    │   │   │   │   │   ├── bool.d.ts
    │   │   │   │   │   ├── bool.js
    │   │   │   │   │   ├── float.d.ts
    │   │   │   │   │   ├── float.js
    │   │   │   │   │   ├── int.d.ts
    │   │   │   │   │   ├── int.js
    │   │   │   │   │   ├── schema.d.ts
    │   │   │   │   │   └── schema.js
    │   │   │   │   ├── json/
    │   │   │   │   │   ├── schema.d.ts
    │   │   │   │   │   └── schema.js
    │   │   │   │   ├── yaml-1.1/
    │   │   │   │   │   ├── binary.d.ts
    │   │   │   │   │   ├── binary.js
    │   │   │   │   │   ├── bool.d.ts
    │   │   │   │   │   ├── bool.js
    │   │   │   │   │   ├── float.d.ts
    │   │   │   │   │   ├── float.js
    │   │   │   │   │   ├── int.d.ts
    │   │   │   │   │   ├── int.js
    │   │   │   │   │   ├── merge.d.ts
    │   │   │   │   │   ├── merge.js
    │   │   │   │   │   ├── omap.d.ts
    │   │   │   │   │   ├── omap.js
    │   │   │   │   │   ├── pairs.d.ts
    │   │   │   │   │   ├── pairs.js
    │   │   │   │   │   ├── schema.d.ts
    │   │   │   │   │   ├── schema.js
    │   │   │   │   │   ├── set.d.ts
    │   │   │   │   │   ├── set.js
    │   │   │   │   │   ├── timestamp.d.ts
    │   │   │   │   │   └── timestamp.js
    │   │   │   │   ├── json-schema.d.ts
    │   │   │   │   ├── Schema.d.ts
    │   │   │   │   ├── Schema.js
    │   │   │   │   ├── tags.d.ts
    │   │   │   │   ├── tags.js
    │   │   │   │   └── types.d.ts
    │   │   │   ├── stringify/
    │   │   │   │   ├── foldFlowLines.d.ts
    │   │   │   │   ├── foldFlowLines.js
    │   │   │   │   ├── stringify.d.ts
    │   │   │   │   ├── stringify.js
    │   │   │   │   ├── stringifyCollection.d.ts
    │   │   │   │   ├── stringifyCollection.js
    │   │   │   │   ├── stringifyComment.d.ts
    │   │   │   │   ├── stringifyComment.js
    │   │   │   │   ├── stringifyDocument.d.ts
    │   │   │   │   ├── stringifyDocument.js
    │   │   │   │   ├── stringifyNumber.d.ts
    │   │   │   │   ├── stringifyNumber.js
    │   │   │   │   ├── stringifyPair.d.ts
    │   │   │   │   ├── stringifyPair.js
    │   │   │   │   ├── stringifyString.d.ts
    │   │   │   │   └── stringifyString.js
    │   │   │   ├── cli.d.ts
    │   │   │   ├── cli.mjs
    │   │   │   ├── errors.d.ts
    │   │   │   ├── errors.js
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── log.d.ts
    │   │   │   ├── log.js
    │   │   │   ├── options.d.ts
    │   │   │   ├── public-api.d.ts
    │   │   │   ├── public-api.js
    │   │   │   ├── test-events.d.ts
    │   │   │   ├── test-events.js
    │   │   │   ├── util.d.ts
    │   │   │   ├── util.js
    │   │   │   ├── visit.d.ts
    │   │   │   └── visit.js
    │   │   ├── bin.mjs
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── util.js
    │   ├── yocto-queue/
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── yup/
    │   │   ├── index.d.ts
    │   │   ├── index.esm.js
    │   │   ├── index.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   └── .package-lock.json
    ├── public/
    │   └── TE-KOR.svg
    ├── src/
    │   ├── App/
    │   │   └── store.js
    │   ├── assets/
    │   │   ├── BackgroundLoginAndRegister.svg
    │   │   └── default-img.png
    │   ├── components/
    │   │   ├── Button/
    │   │   │   ├── Button.jsx
    │   │   │   └── index.jsx
    │   │   ├── CardQuestion/
    │   │   │   ├── CardQuestion.jsx
    │   │   │   └── index.jsx
    │   │   ├── Fotter/
    │   │   │   ├── Footer.jsx
    │   │   │   └── index.jsx
    │   │   ├── GameCard/
    │   │   │   ├── GameCard.jsx
    │   │   │   └── index.jsx
    │   │   ├── Navbar/
    │   │   │   ├── index.jsx
    │   │   │   └── Navbar.jsx
    │   │   ├── ProductCard/
    │   │   │   ├── index.jsx
    │   │   │   └── ProductCard.jsx
    │   │   └── ui/
    │   │       ├── FadeContent/
    │   │       │   ├── FadeContent.jsx
    │   │       │   └── index.jsx
    │   │       ├── FuzzyText/
    │   │       │   ├── FuzzyText.jsx
    │   │       │   └── index.jsx
    │   │       ├── InfiniteScroll/
    │   │       │   ├── index.jsx
    │   │       │   └── InfiniteScroll.jsx
    │   │       ├── LoadingCircle/
    │   │       │   ├── index.jsx
    │   │       │   └── LoadingCircle.jsx
    │   │       ├── PixelTransition/
    │   │       │   ├── index.jsx
    │   │       │   └── PixelTransition.jsx
    │   │       └── Threads/
    │   │           ├── index.jsx
    │   │           └── Threads.jsx
    │   ├── features/
    │   │   └── auth/
    │   │       └── authSlice.js
    │   ├── pages/
    │   │   ├── Admin/
    │   │   │   ├── AdminDashboard/
    │   │   │   │   ├── AdminDashboard.jsx
    │   │   │   │   └── index.jsx
    │   │   │   └── AdminLogin/
    │   │   │       ├── AdminLogin.jsx
    │   │   │       └── index.jsx
    │   │   ├── ForgotPassword/
    │   │   │   ├── ForgotPassword.jsx
    │   │   │   └── index.jsx
    │   │   ├── Games/
    │   │   │   ├── FlipCard/
    │   │   │   │   ├── FlipCard.jsx
    │   │   │   │   └── index.jsx
    │   │   │   ├── Games.jsx
    │   │   │   ├── index.jsx
    │   │   │   └── VocabList.jsx
    │   │   ├── Home/
    │   │   │   ├── Home.jsx
    │   │   │   └── index.jsx
    │   │   ├── Login/
    │   │   │   ├── index.jsx
    │   │   │   └── Login.jsx
    │   │   ├── MyTryouts/
    │   │   │   ├── index.jsx
    │   │   │   └── MyTryouts.jsx
    │   │   ├── NotFound/
    │   │   │   ├── index.jsx
    │   │   │   └── NotFound.jsx
    │   │   ├── Profile/
    │   │   │   ├── EditProfile/
    │   │   │   │   ├── ChangeFullName/
    │   │   │   │   │   ├── ChangeFullName.jsx
    │   │   │   │   │   └── index.jsx
    │   │   │   │   ├── ChangePassword/
    │   │   │   │   │   ├── ChangePassword.jsx
    │   │   │   │   │   └── index.jsx
    │   │   │   │   ├── ProfilePhotoUploader/
    │   │   │   │   │   └── ProfilePhotoUploader.jsx
    │   │   │   │   ├── EditProfile.jsx
    │   │   │   │   └── index.jsx
    │   │   │   ├── TransactionHistory/
    │   │   │   │   ├── index.jsx
    │   │   │   │   └── TransactionHistory.jsx
    │   │   │   ├── TryoutHistory/
    │   │   │   │   ├── index.jsx
    │   │   │   │   └── TryoutHistory.jsx
    │   │   │   ├── UserDetails/
    │   │   │   │   ├── index.jsx
    │   │   │   │   └── UserDetails.jsx
    │   │   │   ├── index.jsx
    │   │   │   └── Profile.jsx
    │   │   ├── Register/
    │   │   │   ├── index.jsx
    │   │   │   └── Register.jsx
    │   │   ├── ResetPassword/
    │   │   │   ├── index.jsx
    │   │   │   └── ResetPassword.jsx
    │   │   └── Tryouts/
    │   │       ├── TryoutDetail/
    │   │       │   ├── index.jsx
    │   │       │   └── TryoutDetail.jsx
    │   │       ├── index.jsx
    │   │       └── Tryouts.jsx
    │   ├── router/
    │   │   └── AppRouter.jsx
    │   ├── services/
    │   │   ├── authService.js
    │   │   ├── testPackageService.js
    │   │   ├── userService.js
    │   │   └── vocabService.js
    │   ├── utils/
    │   │   ├── axiosInstance.js
    │   │   ├── storage.js
    │   │   └── token.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── vite.config.js


File: fe-tekor\eslint.config.js

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])


File: fe-tekor\index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/TE-KOR.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap" rel="stylesheet">
    <title>TE-KOR</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


File: fe-tekor\package.json

{
  "name": "fe-tekor",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.1.1",
    "@reduxjs/toolkit": "^2.8.2",
    "autoprefixer": "^10.4.21",
    "axios": "^1.10.0",
    "clsx": "^2.1.1",
    "framer-motion": "^12.19.2",
    "gsap": "^3.13.0",
    "ogl": "^1.0.11",
    "postcss": "^8.5.6",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-hook-form": "^7.59.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.6.2",
    "sweetalert2": "^11.22.2",
    "yup": "^1.6.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.29.0",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.5.2",
    "eslint": "^9.29.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.2.0",
    "tailwindcss": "^3.4.17",
    "vite": "^7.0.0"
  }
}

File: fe-tekor\postcss.config.js

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

File: fe-tekor\public\TE-KOR.svg

<svg width="243" height="47" viewBox="0 0 243 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1_140_6" maskUnits="userSpaceOnUse" x="0" y="0" width="243" height="47" fill="black">
<rect fill="white" width="243" height="47"/>
<path d="M35.288 1.072V9.84H23.384V46H12.44V9.84H0.536V1.072H35.288ZM51.7245 9.84V18.928H66.3805V27.376H51.7245V37.232H68.3005V46H40.7805V1.072H68.3005V9.84H51.7245Z"/>
<path d="M102.926 18.992V28.08H74.7655V18.992H102.926ZM138.579 46L123.475 26.16V46H112.531V1.072H123.475V20.784L138.451 1.072H151.315L133.907 23.088L151.955 46H138.579ZM178.404 46.448C174.18 46.448 170.297 45.4667 166.756 43.504C163.257 41.5413 160.462 38.8107 158.372 35.312C156.323 31.7707 155.299 27.8027 155.299 23.408C155.299 19.0133 156.323 15.0667 158.372 11.568C160.462 8.06933 163.257 5.33867 166.756 3.376C170.297 1.41333 174.18 0.431999 178.404 0.431999C182.628 0.431999 186.489 1.41333 189.988 3.376C193.529 5.33867 196.302 8.06933 198.308 11.568C200.356 15.0667 201.38 19.0133 201.38 23.408C201.38 27.8027 200.356 31.7707 198.308 35.312C196.26 38.8107 193.486 41.5413 189.988 43.504C186.489 45.4667 182.628 46.448 178.404 46.448ZM178.404 36.464C181.988 36.464 184.846 35.2693 186.979 32.88C189.156 30.4907 190.244 27.3333 190.244 23.408C190.244 19.44 189.156 16.2827 186.979 13.936C184.846 11.5467 181.988 10.352 178.404 10.352C174.777 10.352 171.876 11.5253 169.7 13.872C167.566 16.2187 166.5 19.3973 166.5 23.408C166.5 27.376 167.566 30.5547 169.7 32.944C171.876 35.2907 174.777 36.464 178.404 36.464ZM230.38 46L221.036 29.04H218.412V46H207.468V1.072H225.836C229.377 1.072 232.385 1.69066 234.86 2.928C237.377 4.16533 239.255 5.872 240.492 8.048C241.729 10.1813 242.348 12.5707 242.348 15.216C242.348 18.2027 241.495 20.8693 239.788 23.216C238.124 25.5627 235.649 27.2267 232.364 28.208L242.732 46H230.38ZM218.412 21.296H225.196C227.201 21.296 228.695 20.8053 229.676 19.824C230.7 18.8427 231.212 17.456 231.212 15.664C231.212 13.9573 230.7 12.6133 229.676 11.632C228.695 10.6507 227.201 10.16 225.196 10.16H218.412V21.296Z"/>
</mask>
<path d="M35.288 1.072V9.84H23.384V46H12.44V9.84H0.536V1.072H35.288ZM51.7245 9.84V18.928H66.3805V27.376H51.7245V37.232H68.3005V46H40.7805V1.072H68.3005V9.84H51.7245Z" fill="url(#paint0_linear_140_6)"/>
<path d="M102.926 18.992V28.08H74.7655V18.992H102.926ZM138.579 46L123.475 26.16V46H112.531V1.072H123.475V20.784L138.451 1.072H151.315L133.907 23.088L151.955 46H138.579ZM178.404 46.448C174.18 46.448 170.297 45.4667 166.756 43.504C163.257 41.5413 160.462 38.8107 158.372 35.312C156.323 31.7707 155.299 27.8027 155.299 23.408C155.299 19.0133 156.323 15.0667 158.372 11.568C160.462 8.06933 163.257 5.33867 166.756 3.376C170.297 1.41333 174.18 0.431999 178.404 0.431999C182.628 0.431999 186.489 1.41333 189.988 3.376C193.529 5.33867 196.302 8.06933 198.308 11.568C200.356 15.0667 201.38 19.0133 201.38 23.408C201.38 27.8027 200.356 31.7707 198.308 35.312C196.26 38.8107 193.486 41.5413 189.988 43.504C186.489 45.4667 182.628 46.448 178.404 46.448ZM178.404 36.464C181.988 36.464 184.846 35.2693 186.979 32.88C189.156 30.4907 190.244 27.3333 190.244 23.408C190.244 19.44 189.156 16.2827 186.979 13.936C184.846 11.5467 181.988 10.352 178.404 10.352C174.777 10.352 171.876 11.5253 169.7 13.872C167.566 16.2187 166.5 19.3973 166.5 23.408C166.5 27.376 167.566 30.5547 169.7 32.944C171.876 35.2907 174.777 36.464 178.404 36.464ZM230.38 46L221.036 29.04H218.412V46H207.468V1.072H225.836C229.377 1.072 232.385 1.69066 234.86 2.928C237.377 4.16533 239.255 5.872 240.492 8.048C241.729 10.1813 242.348 12.5707 242.348 15.216C242.348 18.2027 241.495 20.8693 239.788 23.216C238.124 25.5627 235.649 27.2267 232.364 28.208L242.732 46H230.38ZM218.412 21.296H225.196C227.201 21.296 228.695 20.8053 229.676 19.824C230.7 18.8427 231.212 17.456 231.212 15.664C231.212 13.9573 230.7 12.6133 229.676 11.632C228.695 10.6507 227.201 10.16 225.196 10.16H218.412V21.296Z" fill="black"/>
<path d="M35.288 1.072H35.388V0.971999H35.288V1.072ZM35.288 9.84V9.94H35.388V9.84H35.288ZM23.384 9.84V9.74H23.284V9.84H23.384ZM23.384 46V46.1H23.484V46H23.384ZM12.44 46H12.34V46.1H12.44V46ZM12.44 9.84H12.54V9.74H12.44V9.84ZM0.536 9.84H0.436V9.94H0.536V9.84ZM0.536 1.072V0.971999H0.436V1.072H0.536ZM35.288 1.072H35.188V9.84H35.288H35.388V1.072H35.288ZM35.288 9.84V9.74H23.384V9.84V9.94H35.288V9.84ZM23.384 9.84H23.284V46H23.384H23.484V9.84H23.384ZM23.384 46V45.9H12.44V46V46.1H23.384V46ZM12.44 46H12.54V9.84H12.44H12.34V46H12.44ZM12.44 9.84V9.74H0.536V9.84V9.94H12.44V9.84ZM0.536 9.84H0.636V1.072H0.536H0.436V9.84H0.536ZM0.536 1.072V1.172H35.288V1.072V0.971999H0.536V1.072ZM51.7245 9.84V9.74H51.6245V9.84H51.7245ZM51.7245 18.928H51.6245V19.028H51.7245V18.928ZM66.3805 18.928H66.4805V18.828H66.3805V18.928ZM66.3805 27.376V27.476H66.4805V27.376H66.3805ZM51.7245 27.376V27.276H51.6245V27.376H51.7245ZM51.7245 37.232H51.6245V37.332H51.7245V37.232ZM68.3005 37.232H68.4005V37.132H68.3005V37.232ZM68.3005 46V46.1H68.4005V46H68.3005ZM40.7805 46H40.6805V46.1H40.7805V46ZM40.7805 1.072V0.971999H40.6805V1.072H40.7805ZM68.3005 1.072H68.4005V0.971999H68.3005V1.072ZM68.3005 9.84V9.94H68.4005V9.84H68.3005ZM51.7245 9.84H51.6245V18.928H51.7245H51.8245V9.84H51.7245ZM51.7245 18.928V19.028H66.3805V18.928V18.828H51.7245V18.928ZM66.3805 18.928H66.2805V27.376H66.3805H66.4805V18.928H66.3805ZM66.3805 27.376V27.276H51.7245V27.376V27.476H66.3805V27.376ZM51.7245 27.376H51.6245V37.232H51.7245H51.8245V27.376H51.7245ZM51.7245 37.232V37.332H68.3005V37.232V37.132H51.7245V37.232ZM68.3005 37.232H68.2005V46H68.3005H68.4005V37.232H68.3005ZM68.3005 46V45.9H40.7805V46V46.1H68.3005V46ZM40.7805 46H40.8805V1.072H40.7805H40.6805V46H40.7805ZM40.7805 1.072V1.172H68.3005V1.072V0.971999H40.7805V1.072ZM68.3005 1.072H68.2005V9.84H68.3005H68.4005V1.072H68.3005ZM68.3005 9.84V9.74H51.7245V9.84V9.94H68.3005V9.84ZM102.926 18.992H103.026V18.892H102.926V18.992ZM102.926 28.08V28.18H103.026V28.08H102.926ZM74.7655 28.08H74.6655V28.18H74.7655V28.08ZM74.7655 18.992V18.892H74.6655V18.992H74.7655ZM102.926 18.992H102.826V28.08H102.926H103.026V18.992H102.926ZM102.926 28.08V27.98H74.7655V28.08V28.18H102.926V28.08ZM74.7655 28.08H74.8655V18.992H74.7655H74.6655V28.08H74.7655ZM74.7655 18.992V19.092H102.926V18.992V18.892H74.7655V18.992ZM138.579 46L138.499 46.0606L138.529 46.1H138.579V46ZM123.475 26.16L123.554 26.0994L123.375 25.8636V26.16H123.475ZM123.475 46V46.1H123.575V46H123.475ZM112.531 46H112.431V46.1H112.531V46ZM112.531 1.072V0.971999H112.431V1.072H112.531ZM123.475 1.072H123.575V0.971999H123.475V1.072ZM123.475 20.784H123.375V21.0809L123.554 20.8445L123.475 20.784ZM138.451 1.072V0.971999H138.401L138.371 1.0115L138.451 1.072ZM151.315 1.072L151.393 1.13402L151.521 0.971999H151.315V1.072ZM133.907 23.088L133.828 23.026L133.779 23.0879L133.828 23.1499L133.907 23.088ZM151.955 46V46.1H152.161L152.033 45.9381L151.955 46ZM138.579 46L138.658 45.9394L123.554 26.0994L123.475 26.16L123.395 26.2206L138.499 46.0606L138.579 46ZM123.475 26.16H123.375V46H123.475H123.575V26.16H123.475ZM123.475 46V45.9H112.531V46V46.1H123.475V46ZM112.531 46H112.631V1.072H112.531H112.431V46H112.531ZM112.531 1.072V1.172H123.475V1.072V0.971999H112.531V1.072ZM123.475 1.072H123.375V20.784H123.475H123.575V1.072H123.475ZM123.475 20.784L123.554 20.8445L138.53 1.13249L138.451 1.072L138.371 1.0115L123.395 20.7235L123.475 20.784ZM138.451 1.072V1.172H151.315V1.072V0.971999H138.451V1.072ZM151.315 1.072L151.236 1.00998L133.828 23.026L133.907 23.088L133.985 23.15L151.393 1.13402L151.315 1.072ZM133.907 23.088L133.828 23.1499L151.876 46.0619L151.955 46L152.033 45.9381L133.985 23.0261L133.907 23.088ZM151.955 46V45.9H138.579V46V46.1H151.955V46ZM166.756 43.504L166.707 43.5912L166.707 43.5915L166.756 43.504ZM158.372 35.312L158.285 35.3621L158.286 35.3633L158.372 35.312ZM158.372 11.568L158.286 11.5167L158.285 11.5175L158.372 11.568ZM166.756 3.376L166.707 3.28853L166.707 3.28879L166.756 3.376ZM189.988 3.376L189.939 3.46321L189.939 3.46346L189.988 3.376ZM198.308 11.568L198.221 11.6177L198.221 11.6185L198.308 11.568ZM198.308 35.312L198.394 35.3625L198.394 35.3621L198.308 35.312ZM189.988 43.504L190.036 43.5912L190.036 43.5912L189.988 43.504ZM186.979 32.88L186.906 32.8127L186.905 32.8134L186.979 32.88ZM186.979 13.936L186.905 14.0026L186.906 14.004L186.979 13.936ZM169.7 13.872L169.626 13.804L169.626 13.8047L169.7 13.872ZM169.7 32.944L169.625 33.0106L169.626 33.012L169.7 32.944ZM178.404 46.448V46.348C174.196 46.348 170.33 45.3706 166.804 43.4165L166.756 43.504L166.707 43.5915C170.264 45.5627 174.163 46.548 178.404 46.548V46.448ZM166.756 43.504L166.804 43.4168C163.321 41.4628 160.539 38.7446 158.457 35.2607L158.372 35.312L158.286 35.3633C160.385 38.8767 163.192 41.6199 166.707 43.5912L166.756 43.504ZM158.372 35.312L158.458 35.2619C156.42 31.7369 155.399 27.7864 155.399 23.408H155.299H155.199C155.199 27.8189 156.227 31.8044 158.285 35.3621L158.372 35.312ZM155.299 23.408H155.399C155.399 19.0295 156.42 15.1006 158.458 11.6185L158.372 11.568L158.285 11.5175C156.227 15.0327 155.199 18.9971 155.199 23.408H155.299ZM158.372 11.568L158.457 11.6193C160.539 8.13537 163.321 5.41719 166.804 3.46321L166.756 3.376L166.707 3.28879C163.192 5.26014 160.385 8.0033 158.286 11.5167L158.372 11.568ZM166.756 3.376L166.804 3.46346C170.33 1.50938 174.196 0.531999 178.404 0.531999V0.431999V0.331999C174.163 0.331999 170.264 1.31728 166.707 3.28853L166.756 3.376ZM178.404 0.431999V0.531999C182.611 0.531999 186.456 1.50938 189.939 3.46321L189.988 3.376L190.036 3.28879C186.522 1.31729 182.644 0.331999 178.404 0.331999V0.431999ZM189.988 3.376L189.939 3.46346C193.464 5.41732 196.225 8.13496 198.221 11.6177L198.308 11.568L198.394 11.5183C196.38 8.0037 193.593 5.26001 190.036 3.28853L189.988 3.376ZM198.308 11.568L198.221 11.6185C200.259 15.1006 201.28 19.0295 201.28 23.408H201.38H201.48C201.48 18.9971 200.452 15.0327 198.394 11.5175L198.308 11.568ZM201.38 23.408H201.28C201.28 27.7864 200.259 31.7369 198.221 35.2619L198.308 35.312L198.394 35.3621C200.452 31.8044 201.48 27.8189 201.48 23.408H201.38ZM198.308 35.312L198.221 35.2615C196.182 38.745 193.422 41.4629 189.939 43.4168L189.988 43.504L190.036 43.5912C193.551 41.6198 196.337 38.8763 198.394 35.3625L198.308 35.312ZM189.988 43.504L189.939 43.4168C186.456 45.3706 182.611 46.348 178.404 46.348V46.448V46.548C182.644 46.548 186.522 45.5627 190.036 43.5912L189.988 43.504ZM178.404 36.464V36.564C182.012 36.564 184.899 35.3598 187.054 32.9466L186.979 32.88L186.905 32.8134C184.793 35.1788 181.963 36.364 178.404 36.364V36.464ZM186.979 32.88L187.053 32.9473C189.25 30.5358 190.344 27.3526 190.344 23.408H190.244H190.144C190.144 27.314 189.061 30.4455 186.906 32.8127L186.979 32.88ZM190.244 23.408H190.344C190.344 19.4211 189.25 16.2373 187.053 13.868L186.979 13.936L186.906 14.004C189.061 16.328 190.144 19.4589 190.144 23.408H190.244ZM186.979 13.936L187.054 13.8694C184.899 11.4562 182.012 10.252 178.404 10.252V10.352V10.452C181.963 10.452 184.793 11.6372 186.905 14.0026L186.979 13.936ZM178.404 10.352V10.252C174.753 10.252 171.824 11.4341 169.626 13.804L169.7 13.872L169.773 13.94C171.927 11.6165 174.801 10.452 178.404 10.452V10.352ZM169.7 13.872L169.626 13.8047C167.471 16.1743 166.4 19.3793 166.4 23.408H166.5H166.6C166.6 19.4154 167.661 16.263 169.773 13.9393L169.7 13.872ZM166.5 23.408H166.4C166.4 27.3945 167.472 30.5988 169.625 33.0106L169.7 32.944L169.774 32.8774C167.661 30.5105 166.6 27.3575 166.6 23.408H166.5ZM169.7 32.944L169.626 33.012C171.824 35.3819 174.753 36.564 178.404 36.564V36.464V36.364C174.801 36.364 171.927 35.1994 169.773 32.876L169.7 32.944ZM230.38 46L230.292 46.0483L230.321 46.1H230.38V46ZM221.036 29.04L221.124 28.9917L221.095 28.94H221.036V29.04ZM218.412 29.04V28.94H218.312V29.04H218.412ZM218.412 46V46.1H218.512V46H218.412ZM207.468 46H207.368V46.1H207.468V46ZM207.468 1.072V0.971999H207.368V1.072H207.468ZM234.86 2.928L234.815 3.01744L234.816 3.01774L234.86 2.928ZM240.492 8.048L240.405 8.09743L240.405 8.09817L240.492 8.048ZM239.788 23.216L239.707 23.1572L239.706 23.1582L239.788 23.216ZM232.364 28.208L232.335 28.1122L232.214 28.1486L232.278 28.2583L232.364 28.208ZM242.732 46V46.1H242.906L242.818 45.9497L242.732 46ZM218.412 21.296H218.312V21.396H218.412V21.296ZM229.676 19.824L229.607 19.7518L229.605 19.7533L229.676 19.824ZM229.676 11.632L229.605 11.7027L229.607 11.7042L229.676 11.632ZM218.412 10.16V10.06H218.312V10.16H218.412ZM230.38 46L230.468 45.9517L221.124 28.9917L221.036 29.04L220.948 29.0883L230.292 46.0483L230.38 46ZM221.036 29.04V28.94H218.412V29.04V29.14H221.036V29.04ZM218.412 29.04H218.312V46H218.412H218.512V29.04H218.412ZM218.412 46V45.9H207.468V46V46.1H218.412V46ZM207.468 46H207.568V1.072H207.468H207.368V46H207.468ZM207.468 1.072V1.172H225.836V1.072V0.971999H207.468V1.072ZM225.836 1.072V1.172C229.366 1.172 232.358 1.78872 234.815 3.01744L234.86 2.928L234.905 2.83855C232.413 1.59261 229.389 0.971999 225.836 0.971999V1.072ZM234.86 2.928L234.816 3.01774C237.317 4.24734 239.179 5.94091 240.405 8.09743L240.492 8.048L240.579 7.99857C239.331 5.80308 237.437 4.08332 234.904 2.83825L234.86 2.928ZM240.492 8.048L240.405 8.09817C241.633 10.2152 242.248 12.587 242.248 15.216H242.348H242.448C242.448 12.5544 241.825 10.1475 240.579 7.99782L240.492 8.048ZM242.348 15.216H242.248C242.248 18.1822 241.401 20.8281 239.707 23.1572L239.788 23.216L239.869 23.2748C241.588 20.9105 242.448 18.2231 242.448 15.216H242.348ZM239.788 23.216L239.706 23.1582C238.058 25.4833 235.604 27.136 232.335 28.1122L232.364 28.208L232.393 28.3038C235.695 27.3174 238.19 25.642 239.87 23.2738L239.788 23.216ZM232.364 28.208L232.278 28.2583L242.646 46.0503L242.732 46L242.818 45.9497L232.45 28.1576L232.364 28.208ZM242.732 46V45.9H230.38V46V46.1H242.732V46ZM218.412 21.296V21.396H225.196V21.296V21.196H218.412V21.296ZM225.196 21.296V21.396C227.216 21.396 228.74 20.9018 229.747 19.8947L229.676 19.824L229.605 19.7533C228.65 20.7089 227.187 21.196 225.196 21.196V21.296ZM229.676 19.824L229.745 19.8962C230.794 18.8913 231.312 17.4756 231.312 15.664H231.212H231.112C231.112 17.4363 230.606 18.794 229.607 19.7518L229.676 19.824ZM231.212 15.664H231.312C231.312 13.936 230.793 12.5638 229.745 11.5598L229.676 11.632L229.607 11.7042C230.607 12.6629 231.112 13.9786 231.112 15.664H231.212ZM229.676 11.632L229.747 11.5613C228.74 10.5542 227.216 10.06 225.196 10.06V10.16V10.26C227.187 10.26 228.65 10.7471 229.605 11.7027L229.676 11.632ZM225.196 10.16V10.06H218.412V10.16V10.26H225.196V10.16ZM218.412 10.16H218.312V21.296H218.412H218.512V10.16H218.412Z" fill="black" mask="url(#path-1-outside-1_140_6)"/>
<defs>
<linearGradient id="paint0_linear_140_6" x1="2.27062" y1="35.0347" x2="55.3773" y2="-7.20218" gradientUnits="userSpaceOnUse">
<stop stop-color="#0047A0"/>
<stop offset="0.500036" stop-color="white"/>
<stop offset="1" stop-color="#CD2E3A"/>
</linearGradient>
</defs>
</svg>


File: fe-tekor\README.md

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


File: fe-tekor\src\App\store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

File: fe-tekor\src\App.jsx

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/auth/authSlice";
import AppRouter from "./router/AppRouter";

const App = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector((state) => state.auth.isInitialized);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      dispatch(setUser(JSON.parse(userData)));
    } else {
      dispatch(setUser(null)); // tetap panggil biar isInitialized = true
    }
  }, [dispatch]);

  if (!isInitialized) {
    return <div>Loading...</div>; // ⏳ bisa diganti loader keren
  }

  return <AppRouter />;
};

export default App;


File: fe-tekor\src\components\Button\Button.jsx

import React from "react";

const Button = ({ 
  children, 
  onClick,
  type = "submit",
  width, 
  height, 
  paddingBottom,
  className = 'bg-kr-blue text-white px-6 rounded-xl text-lg font-semibold hover:bg-light-blue hover:text-black hover:border-kr-blue border-2 shadow font-inter'
}) => {
  return (
    <button
      type = {type}
      onClick={onClick}
      className={className}
      style={{
        width: width,
        height: height,
        padding: paddingBottom,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

File: fe-tekor\src\components\Button\index.jsx

export {default as Button} from './Button';

File: fe-tekor\src\components\CardQuestion\CardQuestion.jsx

import React from 'react'

const CardQuestion = () => {
  return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-800 font-bold text-lg">TOPIK II - Simulasi Ujian</h2>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">59:42</span>
            </div>

            <div className="mb-4">
                <p className="text-gray-700 font-semibold">Bagian: Listening (듣기)</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md mb-4">
                <p className="text-gray-800 font-medium mb-1">
                문제 15. 다음을 듣고 알맞은 것을 고르십시오.
                </p>
                <p className="text-gray-600 text-sm">Dengarkan dan pilih jawaban yang tepat.</p>
            </div>

            <div className="space-y-3 mb-6">
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ① 회의 시간을 변경하려고 한다
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ② 회의 장소를 예약하려고 한다
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ③ 회의 자료를 준비하려고 한다
                </button>
                <button className="w-full border border-gray-300 p-3 rounded-md text-left hover:bg-blue-50">
                ④ 회의 참석자를 확인하려고 한다
                </button>
            </div>

            <div className="text-center">
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-semibold">
                Jawab & Lihat Penjelasan
                </button>
            </div>
        </div>
    )
}

export default CardQuestion

File: fe-tekor\src\components\CardQuestion\index.jsx

export {default as CardQuestion} from "./CardQuestion"

File: fe-tekor\src\components\Fotter\Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 text-lg font-bold ">
      Footer
    </footer>
  );
};

export default Footer;

File: fe-tekor\src\components\Fotter\index.jsx

export {default as Footer} from "./Footer";

File: fe-tekor\src\components\GameCard\GameCard.jsx

import React, { useState } from 'react';
import clsx from 'clsx';

export default function GameCard({
  frontTopText,
  frontBottomText,
  backContent
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-40 h-60 perspective cursor-pointer relative"
      onClick={() => setFlipped(!flipped)}
    >
      
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
          flipped && "rotate-y-180"
        )}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-kr-blue via-white to-kr-red border rounded-xl shadow-md backface-hidden flex flex-col justify-center items-center text-xl font-bold px-2 text-center">
          <div>{frontTopText}</div>
          <div className="mt-2">{frontBottomText}</div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-tr from-kr-blue via-white to-kr-red text-black border rounded-xl shadow-md rotate-y-180 backface-hidden flex items-center justify-center text-xl font-bold px-2 text-center">
          <div className='w-w-full h-full px-2 py-4 overflow-x-auto break-words flex items-center justify-center'>
            <div className="max-w-full">
              {backContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


File: fe-tekor\src\components\GameCard\index.jsx

export {default as GameCard} from './GameCard'

File: fe-tekor\src\components\Navbar\index.jsx

export { default as Navbar} from './Navbar';

File: fe-tekor\src\components\Navbar\Navbar.jsx

import React, { useEffect, useState, useRef } from "react";
import { Button } from "../Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  useEffect(() => {
  console.log("User dari Redux:", user);
}, [user]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemStyle = ({ isActive }) =>
    isActive
      ? "text-kr-red font-semibold"
      : "text-gray-900  hover:text-kr-blue";

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const renderProfileIcon = () => {
    if (user.imageUrl) {
      return (
        <img
          src={user?.imageUrl}
          alt="Profile"
          onClick={handleProfileClick}
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      );
    } else if (user.username) {
      const initial = user.username.charAt(0).toUpperCase();
      return (
        <div
          onClick={handleProfileClick}
          className="w-10 h-10 rounded-full bg-kr-red text-white flex items-center justify-center font-bold cursor-pointer"
        >
          {initial}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative z-10 font-montserrat rounded">
      <nav
        className={`fixed top-0 right-0 left-0 flex justify-between items-center px-20 py-5 bg-white shadow-lg transition-transform duration-700 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-2xl font-bold text-kr-red">
          <span className="text-kr-blue">TE</span>-KOR
        </div>
        <div className="flex gap-6 items-center font-opensans">
          <NavLink to="/" className={navItemStyle}>
            <p>HOME</p>
          </NavLink>
          <span>|</span>
          <NavLink to="/tryouts" className={navItemStyle}>
            <p>TRYOUT</p>
          </NavLink>
          <span>|</span>
          <NavLink to="/Mytryouts" className={navItemStyle}>
            <p>TRYOUT SAYA</p>
          </NavLink>
          <span>|</span>
          <NavLink to="/games" className={navItemStyle}>
            <p className="me-10">GAMES</p>
          </NavLink>

          {/* 👇 Bagian login / profile */}
          {user ? (
            renderProfileIcon()
          ) : (
            <NavLink to="/login">
              <Button children={"Login"} width={"100px"} paddingBottom={"5px"} />
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


File: fe-tekor\src\components\ProductCard\index.jsx

export {default as ProductCard} from './ProductCard';

File: fe-tekor\src\components\ProductCard\ProductCard.jsx

import React from 'react'
import { Button } from '../Button'

const ProductCard = ({
  title,
  subtitle,
  price,
  DiscountPrice,
  buttonText,
  onButtonClick,
  children,
}) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white text-black rounded shadow lg:px-10 mt-5">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20">
        {/* Kiri */}
        <div className="text-center lg:text-left flex-1 my-5 font-opensans">
          <h3 className="text-2xl font-bold font-poppins font-montserrat">{title}</h3>
          <p className="text-base max-w-80 font-inter my-5">{subtitle}</p>
          {price && <p className="text-md text-red-600 line-through"><i>{price}</i></p>}
          <p className="text-xl font-bold mb-5">{DiscountPrice}</p>
          <Button
            children={buttonText}
            className={'bg-kr-blue text-white px-6 rounded-xl text-lg font-semibold hover:bg-light-blue hover:text-black hover:border-kr-blue border-2 shadow font-inter'}
            width={"100px"}
            height={"35px"}
            onClick={onButtonClick}
          />
        </div>

        {/* Kanan */}
        <div
          className="hidden lg:block border-white border-2 shadow-sm shadow-white my-5 max-w-[420px] w-full h-[250px] relative"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProductCard

File: fe-tekor\src\components\ui\FadeContent\FadeContent.jsx

import { useRef, useEffect, useState } from 'react';

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'ease-out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = ''
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;


File: fe-tekor\src\components\ui\FadeContent\index.jsx

export {default as FadeContent} from './FadeContent'

File: fe-tekor\src\components\ui\FuzzyText\FuzzyText.jsx

import React, { useEffect, useRef } from "react";

const FuzzyText = ({
  children,
  fontSize = "clamp(2rem, 10vw, 10rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#F18701",
  enableHover = true,
  baseIntensity = 0.1,
  hoverIntensity = 0.5,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === "inherit"
          ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
          : fontFamily;

      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;
      let numericFontSize;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = window.getComputedStyle(temp).fontSize;
        numericFontSize = parseFloat(computedSize);
        document.body.removeChild(temp);
      }

      const text = React.Children.toArray(children).join("");

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      const metrics = offCtx.measureText(text);

      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textBoundingWidth = Math.ceil(actualLeft + actualRight);
      const tightHeight = Math.ceil(actualAscent + actualDescent);

      const extraWidthBuffer = 10;
      const offscreenWidth = textBoundingWidth + extraWidthBuffer;

      offscreen.width = offscreenWidth;
      offscreen.height = tightHeight;

      const xOffset = extraWidthBuffer / 2;
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = color;
      offCtx.fillText(text, xOffset - actualLeft, actualAscent);

      const horizontalMargin = 50;
      const verticalMargin = 0;
      canvas.width = offscreenWidth + horizontalMargin * 2;
      canvas.height = tightHeight + verticalMargin * 2;
      ctx.translate(horizontalMargin, verticalMargin);

      const interactiveLeft = horizontalMargin + xOffset;
      const interactiveTop = verticalMargin;
      const interactiveRight = interactiveLeft + textBoundingWidth;
      const interactiveBottom = interactiveTop + tightHeight;

      let isHovering = false;
      const fuzzRange = 30;

      const run = () => {
        if (isCancelled) return;
        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreenWidth + 2 * fuzzRange,
          tightHeight + 2 * fuzzRange
        );
        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < tightHeight; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreenWidth,
            1,
            dx,
            j,
            offscreenWidth,
            1
          );
        }
        animationFrameId = window.requestAnimationFrame(run);
      };

      run();

      const isInsideTextArea = (x, y) => {
        return (
          x >= interactiveLeft &&
          x <= interactiveRight &&
          y >= interactiveTop &&
          y <= interactiveBottom
        );
      };

      const handleMouseMove = (e) => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      const handleTouchMove = (e) => {
        if (!enableHover) return;
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
        canvas.addEventListener("touchend", handleTouchEnd);
      }

      const cleanup = () => {
        window.cancelAnimationFrame(animationFrameId);
        if (enableHover) {
          canvas.removeEventListener("mousemove", handleMouseMove);
          canvas.removeEventListener("mouseleave", handleMouseLeave);
          canvas.removeEventListener("touchmove", handleTouchMove);
          canvas.removeEventListener("touchend", handleTouchEnd);
        }
      };

      canvas.cleanupFuzzyText = cleanup;
    };

    init();

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      if (canvas && canvas.cleanupFuzzyText) {
        canvas.cleanupFuzzyText();
      }
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
  ]);

  return <canvas ref={canvasRef} />;
};

export default FuzzyText;


File: fe-tekor\src\components\ui\FuzzyText\index.jsx

export {default as FuzzyText} from './FuzzyText'

File: fe-tekor\src\components\ui\InfiniteScroll\index.jsx

export {default as InfiniteScroll} from './InfiniteScroll';

File: fe-tekor\src\components\ui\InfiniteScroll\InfiniteScroll.jsx

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [{ content: "카드 뒤집기 게임" },
    { content: <p>Game Balik Kartu</p> },
    { content: "그리고 단어를 맞춰보세요" },
    { content: <p>Dan Tebak Kata</p> },
    { content: "지금 플레이" },
    { content: <p>Mainkan Sekarang</p> },
    { content: "카드 뒤집기 게임" },
    { content: <p>Game Balik Kartu</p> },
    { content: "그리고 단어를 맞춰보세요" },
    { content: <p>Dan Tebak Kata</p> },
    { content: "지금 플레이" },
    { content: <p>Mainkan Sekarang</p> },],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);


  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        target.style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        target.style.cursor = "grab";
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY;
        const distance = isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: `+=${distance}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none border-2 border-b-2 border-t-dotted border-b-dotted border-black"
      ref={wrapperRef}
      style={{ maxHeight }}
    >
      <div className="absolute top-0 left-0 w-full h-1/4  to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4  to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex flex-col overscroll-contain cursor-grab origin-center"
        ref={containerRef}
        style={{
          width,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="flex items-center justify-center text-xl font-semibold text-center border-4 border-black rounded-[15px] select-none box-border relative"
            key={i}
            style={{
              height: `${itemMinHeight}px`,
              marginTop: negativeMargin,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}


File: fe-tekor\src\components\ui\LoadingCircle\index.jsx

export {default as LoadingCircle} from './LoadingCircle'

File: fe-tekor\src\components\ui\LoadingCircle\LoadingCircle.jsx

import React from "react";

const LoadingCircle = ({ size = 24, color = "#000" }) => {
  return (
    <div
      className="animate-spin rounded-full border-4 border-t-transparent"
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: "transparent",
      }}
    />
  );
};

export default LoadingCircle;


File: fe-tekor\src\components\ui\PixelTransition\index.jsx

export {default as PixelTransition} from './PixelTransition'

File: fe-tekor\src\components\ui\PixelTransition\PixelTransition.jsx

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  className = '',
  style = {},
  aspectRatio = '100%',
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.classList.add('absolute', 'hidden');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate) => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? 'block' : 'none';
      activeEl.style.pointerEvents = activate ? 'none' : '';
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleMouseEnter = () => {
    if (!isActive) animatePixels(true);
  };
  const handleMouseLeave = () => {
    if (isActive) animatePixels(false);
  };
  const handleClick = () => {
    animatePixels(!isActive);
  };

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        bg-[#271E37]
        border-white
        w-[100%]
        max-w-full
        relative
        overflow-hidden
      `}
      style={style}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full">
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: 'none' }}
      >
        {secondContent}
      </div>

      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
}

export default PixelTransition;


File: fe-tekor\src\components\ui\Threads\index.jsx

export {default as Aurora} from './Threads'

File: fe-tekor\src\components\ui\Threads\Threads.jsx

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const Threads = ({
  color = [0.902, 0.925, 0.961],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerRef = useRef(null);
  const animationFrameId = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value.r = clientWidth;
      program.uniforms.iResolution.value.g = clientHeight;
      program.uniforms.iResolution.value.b = clientWidth / clientHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    let currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];

    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    }
    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }
    if (enableMouseInteraction) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    function update(t) {
      if (enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }
      program.uniforms.iTime.value = t * 0.001;

      renderer.render({ scene: mesh });
      animationFrameId.current = requestAnimationFrame(update);
    }
    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", resize);

      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction]);

  return <div ref={containerRef} className="w-full h-full relative" {...rest} />;
};

export default Threads;


File: fe-tekor\src\features\auth\authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isInitialized: false, // ⬅️ ini baru
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isInitialized = true; // ⬅️ tandai sudah selesai
    },
    clearUser: (state) => {
      state.user = null;
      state.isInitialized = true; // tetap true agar tahu sudah di-load
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;


File: fe-tekor\src\index.css

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.perspective {
  perspective: 1000px;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

File: fe-tekor\src\main.jsx

import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './App/store';
import App from "./App";

// Muat data pengguna dari localStorage saat aplikasi dimulai

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <App />
   </Provider>
);



File: fe-tekor\src\pages\Admin\AdminDashboard\AdminDashboard.jsx

import React from 'react'

const AdminDashboard = () => {
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard

File: fe-tekor\src\pages\Admin\AdminDashboard\index.jsx

export {default as AdminDashboard} from './AdminDashboard'

File: fe-tekor\src\pages\Admin\AdminLogin\AdminLogin.jsx

// src/pages/admin/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginAdmin } from "../../../services/authService";
import { Button } from "../../../components/Button";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginAdmin(formData);
      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("Login error:", error);
      const message =
        error.response?.data?.message ||
        error.message ||
        "Username atau password salah.";
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: message,
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <Button type="submit" width="100%" height="45px">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;



File: fe-tekor\src\pages\Admin\AdminLogin\index.jsx

export {default as AdminLogin} from './AdminLogin'

File: fe-tekor\src\pages\ForgotPassword\ForgotPassword.jsx

import React, { useState } from "react";
import { forgotPassword } from "../../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await forgotPassword({ email });
      setMessage("Jika email terdaftar, link reset password telah dikirim.");
    } catch (err) {
      setError(err.message || "Gagal mengirim link reset.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Lupa Password</h2>
        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Masukkan email"
          className="w-full p-3 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Kirim Link Reset
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;


File: fe-tekor\src\pages\ForgotPassword\index.jsx

export {default as ForgotPassword} from './ForgotPassword'

File: fe-tekor\src\pages\Games\FlipCard\FlipCard.jsx

import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import { Navbar } from '../../../components/Navbar';
import { GameCard } from '../../../components/GameCard';
import { FadeContent } from '../../../components/ui/FadeContent';
import { Footer } from '../../../components/Fotter';

const FlipCard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [vocabularies, setVocabularies] = useState([]);
  const [error, setError] = useState("");

  // Fetch kategori vocab
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await axiosInstance.get("/vocabularies/categories");
        console.log(response.data.data);
        setCategories(response.data.data);
      } catch (err) {
        setError("Failed to load categories", err);
      }
    };
    loadCategories();
  }, []);

  // Fetch vocab berdasarkan kategori
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchVocabularies = async () => {
      try {
        const response = await axiosInstance.get(`/vocabularies?category=${selectedCategory}`);
        setVocabularies(response.data.data);
        console.log(response.data.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch vocabularies", err);
      }
    };

    fetchVocabularies();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen max-w-full mx-auto bg-gradient-to-l from-light-red via-white  to-light-blue pt-40">
      <Navbar/>

      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[50%] right-[10%] rotate-[15deg] text-6xl opacity-10">글</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] left-1/2-translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">시</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[80%] right-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="animate-bounce overflow-hidden korean-pattern pointer-events-none absolute z-0 top-[90%] left-[10%] rotate-[15deg] text-6xl opacity-10">글</span>

      <h2 className='text-5xl font-bold text-center w-1/2 mx-auto font-montserrat'>
        GAME BALIK KARTU
      </h2>
      <h2 className='text-3xl font-medium text-center w-full mx-auto font-opensans mt-10'>
        Hafal Kosa Katanya Pelajari Penyebutannya Dan Cari Tahu Artinya 
      </h2>
      {/* <svg className='mx-auto mt-20' xmlns="http://www.w3.org/2000/svg" h mt-20eight="60px" viewBox="0 -960 960 960" width="60px" fill="#000000"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg> */}
      {/* Dropdown */}
      <div className="mb-4 pt-20 w-1/3 mx-auto">
        {/* <label className="block mb-1 font-medium text-xl">Permainan Balik Kartu</label> */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border-2 border-black p-2 rounded w-full text-center font-opensans"
        >
          <option value="">-- Pilih Kategorinya Disini --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Vocabulary list */}
      <div className="mt-20 min-h-screen font-serif flex gap-10 justify-around flex-wrap w-4/5 mx-auto bg-transparent ">
        {[...vocabularies,...vocabularies].map((vocab) => (
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
            <GameCard frontTopText={vocab.koreanWord} frontBottomText={vocab.romanization} backContent={vocab.translation} />
      </FadeContent>
        ))}
      </div>
      
      <div className=''>
        
      <Footer/>
      </div>
    </div>
  )
}

export default FlipCard

File: fe-tekor\src\pages\Games\FlipCard\index.jsx

export {default as FlipCard} from './FlipCard'

File: fe-tekor\src\pages\Games\Games.jsx

import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { GameCard } from "../../components/GameCard";
import { Footer } from "../../components/Fotter";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  const items = [
    {
      frontTopText: "아빠",
      frontBottomText: "appa",
      backContent: "AYAH",
    },
    {
      frontTopText: "엄마",
      frontBottomText: "eomma",
      backContent: "IBU",
    },
  ];
  return (
    <div className="font-sans">
      <Navbar />
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[50%] right-[10%] rotate-[15deg] text-6xl opacity-10">글</span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] left-1/2-translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">시</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[80%] right-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[90%] left-[10%] rotate-[15deg] text-6xl opacity-10">글</span>
      <section className="py-16 min-h-screen pb-10 bg-gradient-to-t from-light-red pt-5 via-white  to-light-blue">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-black rounded-full overflow-hidden">
            <input type="text" placeholder="Search" className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white  to-light-blue" />
            {/* <button className="px-4 text-orange-500 text-lg ">🔍</button> */}
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <ProductCard title="Game Balik Kartu" subtitle="Tebak kata dan balikkkan kartunya. Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu" buttonText="Mulai" onButtonClick={() => navigate('/flipCard')}>
            <div className="flex gap-10">
              {items.map((item, i) => (
                <div key={i}>
                  <GameCard frontTopText={item.frontTopText} frontBottomText={item.frontBottomText} backContent={item.backContent} />
                </div>
              ))}
            </div>
          </ProductCard>
        </div>
        <div className="max-w-4xl mx-auto">
          <ProductCard title="Permainan Flip-Card" subtitle="Tebak kata dan balikkkan kartunya. Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu" buttonText="Mulai" onButtonClick={() => navigate('/flipCard')}>
            <div className="flex gap-10">
              {items.map((item, i) => (
                <div key={i}>
                  <GameCard frontTopText={item.frontTopText} frontBottomText={item.frontBottomText} backContent={item.backContent} />
                </div>
              ))}
            </div>
          </ProductCard>
        </div>
        <div className="max-w-4xl mx-auto">
          <ProductCard title="Game Balik Kartu" subtitle="Tebak kata dan balikkkan kartunya. Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu" buttonText="Mulai" onButtonClick={() => navigate('/flipCard')}>
            <div className="flex gap-10">
              {items.map((item, i) => (
                <div key={i}>
                  <GameCard frontTopText={item.frontTopText} frontBottomText={item.frontBottomText} backContent={item.backContent} />
                </div>
              ))}
            </div>
          </ProductCard>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Games;


File: fe-tekor\src\pages\Games\index.jsx

export {default as Game} from './Games'

File: fe-tekor\src\pages\Games\VocabList.jsx

import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const VocabList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [vocabularies, setVocabularies] = useState([]);
  const [error, setError] = useState("");

  // Fetch kategori vocab
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await axiosInstance.get("/vocabularies/categories");
        console.log(response.data.data);
        setCategories(response.data.data);
      } catch (err) {
        setError("Failed to load categories", err);
      }
    };
    loadCategories();
  }, []);

  // Fetch vocab berdasarkan kategori
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchVocabularies = async () => {
      try {
        const response = await axiosInstance.get(`/vocabularies?category=${selectedCategory}`);
        setVocabularies(response.data.data);
        console.log(response.data.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch vocabularies", err);
      }
    };

    fetchVocabularies();
  }, [selectedCategory]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Vocabulary Page</h1>

      {/* Dropdown */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">-- Choose a category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Vocabulary list */}
      <ul className="mt-4 space-y-2 font-serif">
        {vocabularies.map((vocab) => (
          <li key={vocab.id} className="border p-3 rounded shadow-sm">
            <strong>{vocab.koreanWord}</strong> — {vocab.translation}  - {vocab.romanization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabList;


File: fe-tekor\src\pages\Home\Home.jsx

import React from "react";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Fotter";
import { NavLink, useNavigate } from "react-router-dom";
import { FadeContent } from "../../components/ui/FadeContent";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CardQuestion } from "../../components/CardQuestion";
import { GameCard } from "../../components/GameCard";

const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      frontTopText: "아빠",
      frontBottomText: "appa",
      backContent: "AYAH",
    },
    {
      frontTopText: "엄마",
      frontBottomText: "eomma",
      backContent: "IBU",
    },
  ];
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
        <section className="text-center px-6 lg:pt-40 pt-32 pt bg-gradient-to-br from-light-blue via-white to-light-red h-screen font-montserrat">
          <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-20">한</span>
          <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[10%] rotate-[15deg] text-6xl opacity-20">글</span>
          <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-1/2 -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">시</span>
          <h1 className="text-5xl font-bold font-opensans">
            Kuasai Bahasa Korea dengan
            <span className="text-kr-blue"> TE</span>
            <span className="text-kr-red">-KOR</span>
          </h1>
          <h2 className="text-4xl font-semibold mt-5 font-montserrat">Buka Potensi Korea Anda Sekarang Juga</h2>

          <p className="my-10 lg:mt-10 max-w-4xl mx-auto text-md text-2xl font-opensans">
            Berlatih dengan soal-soal nyata, dapatkan skor instan, dan pahami kesalahan Anda dengan penjelasan rinci. Bergabunglah dengan kami dan capai tujuan bahasa Anda.
          </p>
          <div className="mt-16 z-20">
            <NavLink to={"/tryouts"}>
              <Button children={"Coba Sekarang"} width={"300px"} height={"50px"} />
            </NavLink>
          </div>
        </section>
      </FadeContent>

      {/* Features Section */}

      <section
        className="text-center
       px-6  pt-5 h-screen relative "
      >
        {/* <div style={{ width: '100%', height: '300px', position: 'absolute', bottom:10, left:0, top:-190,}}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div> */}
        <p className="text-2xl font-semibold max-w-4xl mx-auto font-opensans mb-5">
          <span className="text-kr-blue font-montserrat">TE</span>
          <span className="text-kr-red font-montserrat">-KOR </span>
          menyediakan alat dan sumber daya yang Anda butuhkan untuk berhasil dalam perjalanan bahasa Korea Anda.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-around items-center">
          <div>
            <div className="bg-gradient-to-bl from-light-red via-white to-light-blue p-[5px] rounded-lg max-w-72 mb-5 font-inter">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl font-montserrat">Skor Real-time</h3>
                <p className="text-md mt-1 font-opensans">Dapatkan umpan balik instan tentang kinerja Anda dengan skor real-time dan pelacakan kemajuan.</p>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-light-blue via-white to-light-red p-[5px] rounded-lg max-w-72 mb-5 lg:ms-32 md:ms-32">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl font-montserrat">Penjelasan Jawaban</h3>
                <p className="text-md mt-1 font-opensans">Pahami kesalahan Anda dengan penjelasan rinci untuk setiap jawaban, membantu Anda belajar secara efektif.</p>
              </div>
            </div>
            <div className="bg-gradient-to-bl from-light-blue via-white to-light-red p-[5px] rounded-lg max-w-72 mb-5">
              <div className="bg-white rounded-lg p-2 text-center">
                <h3 className="font-bold text-xl font-montserrat">Soal Latihan</h3>
                <p className="text-md mt-1 font-opensans">Akses perpustakaan besar soal latihan yang mencakup semua tingkat kemahiran bahasa Korea.</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <CardQuestion />
          </div>
        </div>
      </section>

      {/* Simulation Steps */}

      <div className="lg:pt-18 pb-10 text-center p-5 flex-row justify-center bg-gradient-to-bl from-white  via-white to-light-blue">
        <h2 className="text-2xl font-bold font-montserrat mb-14 pt-16">Langkah Langkah Mengikuti Try-out Dan Bermain Game</h2>
        <div className="flex mx-auto bg-white rounded shadow-lg max-w-screen-lg flex-wrap justify-center">
          <div className="w-44 py-5">
            <div className=" border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="M180-180v-600 530-88 158Zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v390h-60v-390H180v600h340v60H180Zm522 40L572-210l42-43 88 88 175-175 43 42L702-80ZM300-450q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 164h244v-60H432v60Zm0-164h244v-60H432v60Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4  mb-2 font-extrabold font-montserrat">Daftar dan Masuk</p>
              <p className="font-opensans">Isi nama lengkap,Username, email, dan Password</p>
            </div>
          </div>
          <div className="h-10 mt-12 mx-5 hidden md:block lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000">
              <path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z" />
            </svg>
          </div>
          <div className="w-44 py-5">
            <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q14 0 25.5 6t18.5 14l-44 44v-4H180v600h600v-343l60-60v403q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm281-168L239-510l42-42 180 180 382-382 42 42-424 424Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4 mb-2 font-extrabold font-montserrat">Pilih Try-out atau Game</p>
              <p className="font-opensans">Pilih Try-out sesuai kebutuhanmu dan pilih game yang super seru</p>
            </div>
          </div>
          <div className="h-10 mt-12 mx-5 hidden md:block lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000">
              <path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z" />
            </svg>
          </div>
          <div className="w-44 py-5">
            <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="m682-138 146-91-146-91v182ZM240-620h480v-60H240v60ZM732.5-41Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41ZM120-81v-699q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v327q-14.17-6.86-29.08-11.43Q796-469 780-472v-308H180v599h310q2.88 18.17 8.94 34.59Q505-130 513-114l-33 33-60-60-60 60-60-60-60 60-60-60-60 60Zm120-199h252.27q3.73-16 8.23-31t12.5-29H240v60Zm0-170h384q22-11 46-17.5t50-8.5v-34H240v60Zm-60 269v-599 599Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4 mb-2 font-extrabold font-montserrat">Kerjakan dan Mainkan</p>
              <p className="font-opensans">Kerjakan Try-out atau mainkan Game super seru</p>
            </div>
          </div>
          <div className="h-10 mt-12 mx-5 hidden md:block lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000">
              <path d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z" />
            </svg>
          </div>
          <div className="w-44 py-5">
            <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
              <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#1f1f1f">
                <path d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z" />
              </svg>
            </div>
            <div>
              <p className="mt-4 mb-2 font-extrabold font-montserrat">Lihat hasil dan Evaluasi</p>
              <p className="font-opensans">kamu bukan hanya dapat nilai tetapi juga dapat evaluasi</p>
            </div>
          </div>
        </div>

        {/* Preparation Before Tes */}

        <div>
          <h2 className="text-2xl font-bold font-montserrat mb-14 pt-16">Siapkan Hal Berikut Sebelum Mengikuti TRYOUT</h2>
        </div>
        <div className="flex mx-auto bg-white rounded shadow-lg max-w-screen-lg flex-wrap justify-center">
          <div>
            <div>
              <div className="flex mx-auto  gap-10 max-w-screen-lg flex-wrap justify-center">
                <div className="w-72 py-5">
                  <div className=" border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4  mb-2 font-extrabold font-montserrat">Alokasi waktu selama 60–70 menit</p>
                    <p className="font-opensans">Pastikan kamu memiliki cukup waktu tanpa gangguan untuk menyelesaikan try out dengan fokus penuh.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M200-120q-17 0-28.5-11.5T160-160v-40q-50 0-85-35t-35-85v-200q0-50 35-85t85-35v-80q0-50 35-85t85-35h400q50 0 85 35t35 85v80q50 0 85 35t35 85v200q0 50-35 85t-85 35v40q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120Zm-40-160h640q17 0 28.5-11.5T840-320v-200q0-17-11.5-28.5T800-560q-17 0-28.5 11.5T760-520v160H200v-160q0-17-11.5-28.5T160-560q-17 0-28.5 11.5T120-520v200q0 17 11.5 28.5T160-280Zm120-160h400v-80q0-27 11-49t29-39v-112q0-17-11.5-28.5T680-760H280q-17 0-28.5 11.5T240-720v112q18 17 29 39t11 49v80Zm200 0Zm0 160Zm0-80Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat">Ruangan minim distraksi</p>
                    <p className="font-opensans">Pilih tempat yang tenang agar kamu bisa berkonsentrasi maksimal selama try out berlangsung.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat">Koneksi internet yang stabil</p>
                    <p className="font-opensans">Gunakan koneksi internet yang lancar agar try out berjalan tanpa hambatan teknis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex mx-auto  gap-10 max-w-screen-lg flex-wrap justify-center">
                <div className="w-72 py-5">
                  <div className=" border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4  mb-2 font-extrabold font-montserrat">Gunakan earphones untuk listening</p>
                    <p className="font-opensans">Suara akan terdengar lebih jelas dan mengurangi gangguan dari sekitar.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M240-360h280l80-80H240v80Zm0-160h240v-80H240v80Zm-80-160v400h280l-80 80H80v-560h800v120h-80v-40H160Zm756 212q5 5 5 11t-5 11l-36 36-70-70 36-36q5-5 11-5t11 5l48 48ZM520-120v-70l266-266 70 70-266 266h-70ZM160-680v400-400Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat"> Alat tulis dan buku untuk mencatat</p>
                    <p className="font-opensans">Mencatat poin penting akan membantumu memahami materi dengan lebih baik.</p>
                  </div>
                </div>
                <div className="w-72 py-5">
                  <div className="border boder-black w-28 p-5 rounded-full shadow text-center mx-auto bg-gradient-to-bl from-light-blue via-white to-light-red">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000">
                      <path d="M480-540ZM80-160v-80h400v80H80Zm120-120q-33 0-56.5-23.5T120-360v-360q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720H200v360h280v80H200Zm600 40v-320H640v320h160Zm-180 80q-25 0-42.5-17.5T560-220v-360q0-25 17.5-42.5T620-640h200q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H620Zm100-300q13 0 21.5-9t8.5-21q0-13-8.5-21.5T720-520q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm0 60Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mt-4 mb-2 font-extrabold font-montserrat">Baterai gadget terisi penuh</p>
                    <p className="font-opensans">Pastikan perangkat yang kamu gunakan tidak kehabisan daya di tengah try out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="px-16 pb-10 bg-gradient-to-r from-light-blue pt-5  to-white">
        <p className="text-center p-16 font-inter font-bold text-3xl font-montserrat">Coba Sekarang</p>
        <ProductCard title="Permainan Flip-Card" subtitle="Tebak kata dan balikkkan kartunya. Permainan yang seru dan membuat kamu menghafal kosa kata satu persatu" buttonText="Mulai" onButtonClick={() => navigate("/games")}>
          <div className="flex gap-10">
            {items.map((item, i) => (
              <div key={i}>
                <GameCard frontTopText={item.frontTopText} frontBottomText={item.frontBottomText} backContent={item.backContent} />
              </div>
            ))}
          </div>
        </ProductCard>
      </section>

      <Footer />
    </div>
  );
};

export default Home;


File: fe-tekor\src\pages\Home\index.jsx

export { default as Home} from './Home';

File: fe-tekor\src\pages\Login\index.jsx

export {default as Login} from './Login'

File: fe-tekor\src\pages\Login\Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { PixelTransition } from "../../components/ui/PixelTransition";
import imgLogin from "../../assets/BackgroundLoginAndRegister.svg";
import { login } from "../../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const schema = Yup.object().shape({
  username: Yup.string().required("Username wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const loginData = await login(data);
      const apiUser = loginData.user;
      const tokenData = loginData.token;

      const userProfile = {
        ...apiUser,
        username: apiUser.fullName,
      };

      dispatch(setUser({ data: userProfile }));
      localStorage.setItem("user", JSON.stringify(userProfile));
      localStorage.setItem("refreshToken", tokenData?.refreshToken || "");

      navigate("/tryouts");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text:
          err.message?.includes("not verified") ||
          err.message?.includes("belum terverifikasi")
            ? "Email kamu belum diverifikasi. Cek email kamu untuk aktivasi."
            : err.message || "Username atau Password salah.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue via-light-red to-light-red">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-20">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[10%] rotate-[15deg] text-6xl opacity-20">
        글
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">
        시
      </span>
      <div className="flex w-4/5 md:w-3/4 lg:w-2/3 bg-white shadow-lg z-10 shadow-kr-blue rounded-lg overflow-hidden ">
        <div className="w-1/2 hidden md:block h-max">
          <PixelTransition
            firstContent={<img src={imgLogin} alt="city of Korea" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0",
                  backgroundColor: "#fff",
                }}
              >
                <p style={{ fontWeight: 900, fontSize: "3rem" }}>
                  <span className="text-kr-blue">TE</span>
                  <span className="text-kr-red">-KOR</span>
                </p>
                <p className="text-black" style={{ fontWeight: 500, fontSize: "2rem" }}>
                  Mulai sekarang juga
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 text-center pt-20">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-kr-blue">TE</span>
            <span className="text-kr-red">-KOR</span>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
                className="w-full border border-kr-blue rounded-md p-3 focus:outline-none"
              />
              {errors.username && <p className="text-sm text-red-500 mt-1 text-left">{errors.username.message}</p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full border border-kr-blue rounded-md p-3 focus:outline-none"
              />
              {errors.password && <p className="text-sm text-red-500 mt-1 text-left">{errors.password.message}</p>}
            </div>
            <Button type="submit" children={"Login"} />
          </form>

          <p className="mt-6 text-sm text-black text-center">
            Belum punya akun?{" "}
            <NavLink to={"/register"}>
              <span className="font-bold cursor-pointer hover:underline">Daftar</span>
            </NavLink>
          </p>
          <p className="mt-4 text-sm text-right">
            <NavLink to="/forgot-password" className="text-black hover:underline cursor-pointer">
              Lupa Password?
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


File: fe-tekor\src\pages\MyTryouts\index.jsx

export { default as MyTryouts } from './MyTryouts'

File: fe-tekor\src\pages\MyTryouts\MyTryouts.jsx

import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Fotter'
import { useNavigate } from 'react-router-dom';
import { getAllTestPackages } from '../../services/testPackageService';
import { LoadingCircle } from '../../components/ui/LoadingCircle';
import { ProductCard } from '../../components/ProductCard';
import imgDflt from "../../assets/default-img.png";

const MyTryouts = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getAllTestPackages()
        .then((data) => {
            setPackages(data);
        })
        .catch(() => {
            alert("Gagal memuat data paket!");
        })
        .finally(() => setLoading(false));
    }, []);
  return (
    <div className="font-opensans">
        <Navbar/>
<section className="py-16 pb-10 min-h-screen bg-gradient-to-t from-light-red pt-5 via-white to-light-blue">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-black rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white to-light-blue"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          {loading ? (
            <div className="text-center text-lg w-min mx-auto mt-52">
              <LoadingCircle size={40} color="#000" />
            </div>
            // <p className="text-center text-lg">Loading packages...</p>
          ) : packages.length === 0 ? (
            <p className="text-center text-lg">Tidak ada paket tersedia.</p>
          ) : (
            packages.map((pkg) => (
              <ProductCard
                key={pkg.id}
                title={pkg.name || "Tanpa Judul"}
                subtitle={pkg.description || "Tryout EPS-TOPIK, dengan soal pilihan ganda listening dan reading yang menyerupai ujian asli."}
                price={pkg.price === 0 ? "Gratis" : `Rp ${pkg.price.toLocaleString()}`}
                DiscountPrice={
                  pkg.discountPrice && pkg.discountPrice > 0
                    ? `Rp ${(pkg.price - pkg.discountPrice).toLocaleString()}`
                    : " "
                }
                buttonText="Mulai"
                onButtonClick={() => console.log("button diklik arahkan ke detail cbt")}
              >
                <img
                  src={pkg.imageUrl || imgDflt}
                  alt={pkg.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ProductCard>
            ))
          )}
        </div>
      </section>
        <Footer/>
    </div>
  )
}

export default MyTryouts

File: fe-tekor\src\pages\NotFound\index.jsx

export {default as NotFound} from './NotFound'

File: fe-tekor\src\pages\NotFound\NotFound.jsx

import React from "react";
import {NavLink } from "react-router-dom";
import { FuzzyText } from "../../components/ui/FuzzyText";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center px-4">
      {/* <h1 className="text-6xl font-bold mb-4 text-orange-500">404</h1> */}
      <FuzzyText 
        baseIntensity={0.1}
        >
        404
        
      </FuzzyText>
      <p className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</p>
      <p className="mb-6 text-gray-600">
        Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
      </p>
      <NavLink
        to="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Kembali ke Beranda
      </NavLink>
    </div>
  );
};

export default NotFound;


File: fe-tekor\src\pages\Profile\EditProfile\ChangeFullName\ChangeFullName.jsx

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFullName } from "../../../../services/userService";
import { setUser } from "../../../../features/auth/authSlice";
import Swal from "sweetalert2";
import { LoadingCircle } from "../../../../components/ui/LoadingCircle";

const ChangeFullName = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFullName(user.fullName);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedProfile = await updateFullName(fullName);
      dispatch(setUser({ ...user, ...updatedProfile }));

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Nama lengkap berhasil diperbarui.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error?.response?.data?.message || "Gagal memperbarui nama.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-28 max-w-full">
      <label htmlFor="fullName" className="text-xl font-bold">
        Ubah Nama Lengkap:
      </label>
      <div className="max-w-full">
      <input type="text" id="fullName" className="border mt-3 border-gray-300 rounded-md px-4 py-2" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <button type="submit" className="ms-2 md:mt-2 bg-kr-blue text-white p-2 rounded-md hover:bg-blue-600" disabled={loading}>
        {loading ? <LoadingCircle size={20}/> : "Simpan"}
      </button>
      </div>
    </form>
  );
};

export default ChangeFullName;


File: fe-tekor\src\pages\Profile\EditProfile\ChangeFullName\index.jsx

export { default as ChangeFullName } from './ChangeFullName';

File: fe-tekor\src\pages\Profile\EditProfile\ChangePassword\ChangePassword.jsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { changePassword } from "../../../../services/userService";

// ✅ Schema validasi pakai YUP
const schema = Yup.object().shape({
  oldPassword: Yup.string().required("Password lama wajib diisi"),
  newPassword: Yup.string()
    .min(8, "Password baru minimal 8 karakter")
    .required("Password baru wajib diisi"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

const ChangePassword = () => {
  const [success, setSuccess] = useState(null);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Kirim data ke backend dengan field yang sesuai
  const onSubmit = async (values) => {
    setSuccess(null);
    setServerError(null);

    try {
      const data = await changePassword({
        currentPassword: values.oldPassword, // ⬅️ ubah sesuai backend
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword, // ⬅️ tambahkan ini
      });

      setSuccess(data.message || "Password berhasil diubah.");
      reset();
    } catch (err) {
      const message =
        err.response?.data?.message || "Gagal mengganti password.";
      setServerError(message);
    }
  };

  return (
    <div className="max-w-sm mt-5 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Ganti Password</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="oldPassword">Password Lama</label>
          <input
            id="oldPassword"
            type="password"
            {...register("oldPassword")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.oldPassword && (
            <p className="text-sm text-red-500">{errors.oldPassword.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="newPassword">Password Baru</label>
          <input
            id="newPassword"
            type="password"
            {...register("newPassword")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.newPassword && (
            <p className="text-sm text-red-500">{errors.newPassword.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="newPasswordConfirm">Konfirmasi Password Baru</label>
          <input
            id="newPasswordConfirm"
            type="password"
            {...register("confirmNewPassword")}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.confirmNewPassword && (
            <p className="text-sm text-red-500">{errors.confirmNewPassword.message}</p>
          )}
        </div>

        {serverError && <p className="text-sm text-red-500">{serverError}</p>}
        {success && <p className="text-sm text-green-600">{success}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-kr-blue text-white py-2 px-4 rounded hover:text-black hover:border-kr-blue border-2 hover:bg-light-blue disabled:bg-blue-300"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan"}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;


File: fe-tekor\src\pages\Profile\EditProfile\ChangePassword\index.jsx

export {default as ChangePassword} from './ChangePassword'

File: fe-tekor\src\pages\Profile\EditProfile\EditProfile.jsx

import React from 'react'
import { ChangeFullName } from './ChangeFullName'
import { ChangePassword } from './ChangePassword'
import ProfilePhotoUploader from './ProfilePhotoUploader/ProfilePhotoUploader'

const EditProfile = () => {
  return (
    <div className='px-10 py-10'>
        <div className='text-2xl font-montserrat font-bold text-center mb-10'>Edit Profile</div>
        <div>
            <ProfilePhotoUploader />
            <ChangeFullName />
            <ChangePassword />
        </div>
    </div>
  )
}

export default EditProfile

File: fe-tekor\src\pages\Profile\EditProfile\index.jsx

export {default as EditProfile} from './EditProfile'

File: fe-tekor\src\pages\Profile\EditProfile\ProfilePhotoUploader\ProfilePhotoUploader.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../features/auth/authSlice";
import Swal from "sweetalert2";
import axiosInstance from "../../../../utils/axiosInstance"; // ✅ gunakan axiosInstance
import { LoadingCircle } from "../../../../components/ui/LoadingCircle";
import { div } from "framer-motion/client";

const ProfilePhotoUploader = () => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/users/avatar", // ✅ tidak perlu baseURL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newImageUrl = response.data.data.imageUrl;
      dispatch(setUser({ ...user, imageUrl: newImageUrl }));
      Swal.fire("Success", "Foto berhasil diubah", "success");
    } catch (err) {
      console.error("Upload failed:", err);
      Swal.fire("Error", "Foto Gagal diubah", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start font-opensans h-32">
        <p className="text-xl font-bold">
        Ganti Poto:
        </p>
        <div className="flex gap-5">

        <label className="h-min bg-kr-blue text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
        📁 Pilih Foto
        <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
        />
        </label>
      {/* <label className="text-sm font-semibold">Ubah Foto Profil</label>
      <input type="file" accept="image/*" capture="user" onChange={handleFileChange} /> */}
      {preview && (
        <div className="w-32 h-32 object-cover shadow">

        <img
          src={preview}
          alt="Preview"
          className="w-32 h-32 object-cover shadow"
        />
        <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-kr-blue text-white px-4 mt-2 py-2 rounded hover:bg-light-blue hover:font-bold hover:text-black border-2 border-kr-blue disabled:opacity-50"
        >
            {loading ? <LoadingCircle size={20}/> : "Upload"}
        </button>
        </div>
      )}
        </div>
    </div>
  );
};

export default ProfilePhotoUploader;


File: fe-tekor\src\pages\Profile\index.jsx

export {default as Profile} from './Profile'

File: fe-tekor\src\pages\Profile\Profile.jsx

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, setUser } from "../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/token.js";
import { Button } from "../../components/Button";
import { getProfile } from "../../services/userService.js";

import {Navbar} from "../../components/Navbar";
import {UserDetails} from "./UserDetails";
import {TryoutHistory} from "./TryoutHistory";
import {TransactionHistory} from "./TransactionHistory";
import {LoadingCircle} from "../../components/ui/LoadingCircle";
import EditProfile from "./EditProfile/EditProfile.jsx";
import { saveUser } from "../../utils/storage.js";



const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [activeTab, setActiveTab] = useState("detail");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("User from Redux:", user);
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profileData = await getProfile();
        console.log("dari profile",profileData);

        const transformedProfile = {
          fullName: profileData.data.fullName,
          username: profileData.data.username,
          imageUrl: profileData.data.imageUrl,
        };

        console.log("dari profile",transformedProfile.imageUrl);

        dispatch(setUser(transformedProfile));
        saveUser(transformedProfile);
        setError(null);
      } catch (err) {
        setError("Gagal memuat profil. Silakan coba lagi.");
        console.error(err);
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          removeToken();
          dispatch(clearUser());
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile(); // panggil tanpa syarat
  }, [dispatch, navigate]);

  const handleLogout = () => {
    removeToken();
    dispatch(clearUser());
    navigate("/");
  };

  const renderProfileIcon = () => {
    if (user?.imageUrl) {
      return <img src={user.imageUrl} alt={user.username} className="w-48 h-48 object-cover mx-auto" />;
    } else if (user?.username) {
      const initial = user.username.charAt(0).toUpperCase();
      return <div className="w-48 h-48 bg-kr-red rounded mx-auto text-black flex items-center justify-center text-8xl font-bold">{initial}</div>;
    }
    return <div className="w-48 h-44 rounded-full mx-auto bg-gray-300 animate-pulse" />;
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">
      <LoadingCircle />
    </div>;
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-xl text-red-500">
        <p>{error}</p>
        <Button onClick={() => window.location.reload()} children="Coba Lagi" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Anda tidak login. Silakan{" "}
        <a href="/login" className="text-kr-red underline ml-1">
          login
        </a>
        .
      </div>
    );
  }

  return (
    <div className="flex-row md:flex lg:flex min-h-screen pb-5 px-2  lg:px-48 pt-28 lg:pt-24 lg:gap-10 gap-2 bg-gradient-to-br from-light-blue  to-light-red text-center font-opensans">
      <Navbar />
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">
              한
            </span>
            <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[8%] rotate-[15deg] text-6xl opacity-10">
              글
            </span>
            <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">
              시
            </span>
      <div className=" lg:fixed lg:bottom-5 border lg:w-min p-5 py-3 rounded-lg bg-gray-100 w-full shadow-lg h-min">
        {renderProfileIcon()}
        <h1 className="mt-4 text-xl w-min mx-auto font-semibold text-gray-800">{user.username}</h1>
        <div className="text-left mt-10 mx-auto md:mx-0 lg:mx-0 flex flex-col  mb-5">
          <div className="text-left mx-auto md:mx-0 flex flex-col mb-10 font-montserrat font-semibold">
            <button onClick={() => setActiveTab("detail")} className={activeTab === "detail" ? "font-bold text-blue-600" : ""}>
              Detail Pengguna
            </button>
            <button onClick={() => setActiveTab("riwayat tryout")} className={activeTab === "riwayat tryout" ? "font-bold text-blue-600" : ""}>
              Riwayat Tryout
            </button>
            <button onClick={() => setActiveTab("riwayat")} className={activeTab === "riwayat" ? "font-bold text-blue-600" : ""}>
              Riwayat Transaksi
            </button>
            <button onClick={() => setActiveTab("editProfile")} className={activeTab === "editProfile" ? "font-bold text-blue-600" : ""}>
              Edit Profile
            </button>
          </div>
        </div>
        <div className="mt-2 w-min mx-auto">
          <Button onClick={handleLogout} children="Logout" width="150px" />
        </div>
      </div>

      <div className="lg:ms-40 px-10 border rounded-lg bg-gray-100 w-full text-left me-2 shadow-lg font-opensans">
        {/* Content */}
        <div className="flex-1">
          {activeTab === "detail" && <UserDetails />}
          {activeTab === "riwayat tryout" && <TryoutHistory />}
          {activeTab === "riwayat" && <TransactionHistory />}
          {activeTab === "editProfile" && <EditProfile />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;



File: fe-tekor\src\pages\Profile\TransactionHistory\index.jsx

export {default as TransactionHistory} from './TransactionHistory'

File: fe-tekor\src\pages\Profile\TransactionHistory\TransactionHistory.jsx

import React from 'react'

const TransactionHistory = () => {
  return (
    <div>TransactionHistory</div>
  )
}

export default TransactionHistory

File: fe-tekor\src\pages\Profile\TryoutHistory\index.jsx

export {default as TryoutHistory} from './TryoutHistory'

File: fe-tekor\src\pages\Profile\TryoutHistory\TryoutHistory.jsx

import React from 'react'

const TryoutHistory = () => {
  return (
    <div>TryoutHistory</div>
  )
}

export default TryoutHistory

File: fe-tekor\src\pages\Profile\UserDetails\index.jsx

export {default as UserDetails} from './UserDetails'

File: fe-tekor\src\pages\Profile\UserDetails\UserDetails.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../services/userService";
import { clearUser, setUser } from "../../../features/auth/authSlice";
import { removeToken } from "../../../utils/token";
import { Navigate, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("User from Redux:", user);
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profileData = await getProfile();
        const transformedProfile = {
          id: profileData.data.id,
          fullName: profileData.data.fullName,
          username: profileData.data.username,
          email: profileData.data.email,
          imageUrl: profileData.data.imageUrl,
          isVerified: profileData.data.isVerified,
          createdAt: profileData.data.createdAt,
          role: profileData.data.role,
        };

        dispatch(setUser(transformedProfile));
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Gagal memuat profil. Silakan coba lagi.");
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          removeToken();
          dispatch(clearUser());
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile(); // panggil tanpa syarat
  }, [dispatch, Navigate]);

  return (
    <div className="pt-5">
      <h3 className="text-2xl font-semibold mb-20 font-montserrat text-center">Detail Pengguna</h3>
      <div className="text-xl flex flex-col gap-3 ">
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Nama Lengkap:</strong> {user.fullName}
        </p>
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Username:</strong> {user.username}
        </p>
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Email:</strong> {user.email}
        </p>
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Terdaftar Sejak:</strong> {new Date(user.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;


File: fe-tekor\src\pages\Register\index.jsx

export {default as Register} from './Register'

File: fe-tekor\src\pages\Register\Register.jsx

import React from "react";
import { Button } from "../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { register as registerUser } from "../../services/authService";
import { PixelTransition } from "../../components/ui/PixelTransition";
import imgLogin from "../../assets/BackgroundLoginAndRegister.svg";
import { LoadingCircle } from "../../components/ui/LoadingCircle";
import Swal from "sweetalert2";

// ✅ Validasi Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Nama lengkap minimal 2 karakter").required("Nama lengkap wajib diisi"),
  username: Yup.string().min(4, "Username minimal 4 karakter").required("Username wajib diisi"),
  email: Yup.string().required("Email wajib diisi")
  .email("Format email tidak valid. Contoh: usertekor@example.com")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Format email tidak valid. Contoh: usertekor@example.com"
  ),
  password: Yup.string().min(8, "Password minimal 8 karakter")
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "Password harus mengandung huruf dan angka"
  )
  .required("Password wajib diisi"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
  const { fullName, username, email, password } = data;
  await registerUser({ fullName, username, email, password });

  Swal.fire({
    title: 'Registrasi Berhasil!',
    text: 'Silakan cek email kamu untuk verifikasi sebelum login.',
    icon: 'success',
    confirmButtonText: 'OK',
  });

  reset();
  navigate("/login");
} catch (err) {
  let errorMsg = "Registrasi gagal";
  console.error("Register error:", err);

  if (err.response) {
    const { message, data } = err.response.data;

    // Jika ada error validasi field dari backend
    if (data && typeof data === "object") {
      const validationMessages = Object.values(data)
        .flat() // untuk menangani array of messages
        .join(", ");
      errorMsg = validationMessages || message || errorMsg;
    } 
    // Jika hanya ada pesan umum
    else if (message) {
      errorMsg = message;
    }
  } else if (err.message) {
    // Jika error dari sisi client (misal: jaringan)
    errorMsg = err.message;
  }

  Swal.fire({
    title: "Gagal Registrasi!",
    text: errorMsg,
    icon: "error",
    confirmButtonText: "Coba Lagi",
  });
}

  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-light-blue via-light-red to-light-red">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[5%] -rotate-[15deg] text-6xl opacity-20">한</span>
      <span className="korean-pattern pointer-events-none absolute z-10 top-1/2 right-[5%] rotate-[15deg] text-6xl opacity-20">글</span>
      <span className="korean-pattern pointer-events-none absolute z-10 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">시</span>

      <div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg shadow-kr-blue">
        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-3xl font-bold mb-10 text-center">
            <span className="text-kr-blue">TE</span>
            <span className="text-kr-red">-KOR</span>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <input
                type="text"
                {...register("fullName")}
                placeholder="FullName"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div>
              <input
                type="text"
                {...register("username")}
                placeholder="Username"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>

            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div>
              <input
                type="password"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                className="w-full border border-kr-blue px-4 py-3 rounded-xl focus:outline-none"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>

            <div className="text-center pt-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <div className="py-1"><LoadingCircle size={24} color="#000" /></div> : "Daftar"}
              </Button>
            </div>
          </form>

          <p className="text-center mt-6">
            Sudah punya akun?{" "}
            <NavLink to="/login" className="font-bold">
              Login
            </NavLink>
          </p>
        </div>

        {/* Gambar */}
        <div className="hidden md:block w-1/2">
          <PixelTransition
            firstContent={
              <img src={imgLogin} alt="city of Korea" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0",
                  backgroundColor: "#fff",
                }}
              >
                <p style={{ fontWeight: 900, fontSize: "3rem" }}>
                  <span className="text-kr-blue">TE</span>
                  <span className="text-kr-red">-KOR</span>
                </p>
                <p className="text-black" style={{ fontWeight: 500, fontSize: "2rem" }}>
                  Mulai sekarang juga
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;


File: fe-tekor\src\pages\ResetPassword\index.jsx

export {default as ResetPassword} from './ResetPassword'

File: fe-tekor\src\pages\ResetPassword\ResetPassword.jsx

import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/authService";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // ambil token dari URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    token: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setError("");
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Password tidak cocok.");
      return;
    }

    try {
      await resetPassword({ 
        token, 
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword });
      setSuccess("Password berhasil direset.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message || "Gagal reset password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <input
          type="password"
          name="newPassword"
          placeholder="Password baru"
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Konfirmasi password"
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;


File: fe-tekor\src\pages\Tryouts\index.jsx

export {default as Product} from './Tryouts'

File: fe-tekor\src\pages\Tryouts\TryoutDetail\index.jsx

export {default as TryoutDetail} from './TryoutDetail'

File: fe-tekor\src\pages\Tryouts\TryoutDetail\TryoutDetail.jsx

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTestPackageById } from "../../../services/testPackageService";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Fotter";
import { LoadingCircle } from "../../../components/ui/LoadingCircle";
import imgDflt from "../../../assets/default-img.png";
import { Button } from "../../../components/Button";
import axiosInstance from "../../../utils/axiosInstance";

const TryoutDetail = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchTryout = async () => {
      try {
        const data = await getTestPackageById(id);
        setPkg(data);
      } catch (err) {
        console.error("Gagal memuat detail tryout", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTryout();
  }, [id, user, navigate]);

  const handleBuy = async () => {
    try {
      const response = await axiosInstance.post(
        "/transactions/create",
        {
          testPackageId: id,
          quantity: 1, // statis, sesuai permintaan
        }
      );

      const redirectUrl = response.data.data.redirectUrl;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert("Gagal mendapatkan URL pembayaran.");
      }
    } catch (error) {
  console.error("Gagal membuat transaksi:", error);
  if (error.response) {
    console.log("Response error:", error.response.data);
  } else if (error.request) {
    console.log("No response received:", error.request);
  } else {
    console.log("Error setting up request:", error.message);
  }

  alert("Terjadi kesalahan saat memproses pembelian.");
}
  };

  if (!user) return null;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingCircle size={40} color="#000" />
      </div>
    );
  }

  if (!pkg) {
    return <div className="text-center mt-20">Tryout tidak ditemukan.</div>;
  }

  return (
    <div className="bg-gradient-to-t from-light-red pt-5 via-white to-light-blue">
      <Navbar />
      <div className="mt-20 cursor-pointer max-w-6xl mx-auto">
        <p onClick={() => navigate(`/tryouts`)} className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#1f1f1f">
            <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" />
          </svg>
          <span className="font-bold text-2xl">Kembali</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-5 p-5 justify-between bg-white rounded shadow-md flex gap-10">
        <div>
          <h1 className="text-3xl font-bold mt-4">{pkg.name}</h1>
          <p className="text-gray-700 mt-2 mb-10 max-w-2xl">{pkg.description}</p>
          <p className="text-md text-red-600 line-through">
            {pkg.price && pkg.discountPrice !== pkg.price
              ? `Rp ${pkg.price.toLocaleString()}`
              : ""}
          </p>
          <p className="text-xl font-bold mb-5">
            {pkg.price - (pkg.discountPrice ?? 0) === 0
              ? "Gratis"
              : `Rp ${(pkg.discountPrice ?? pkg.price).toLocaleString()}`}
          </p>
          <Button
            children={"Beli"}
            className={
              "bg-kr-blue text-white px-6 rounded-xl text-lg font-semibold hover:bg-light-blue hover:text-black hover:border-kr-blue border-2 shadow font-inter"
            }
            width={"100px"}
            height={"35px"}
            onClick={handleBuy}
          />
        </div>
        <img
          src={pkg.imageUrl || imgDflt}
          alt={pkg.name}
          className="w-1/4 h-1/4 object-cover rounded"
        />
      </div>

      <div className="max-w-6xl mx-auto mt-5 p-5 bg-white rounded shadow-md">
        <p className="text-gray-700 mt-2 mb-10 max-w-2xl">{pkg.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default TryoutDetail;



File: fe-tekor\src\pages\Tryouts\Tryouts.jsx

import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { Footer } from "../../components/Fotter";
import imgDflt from "../../assets/default-img.png";
import { getAllTestPackages } from "../../services/testPackageService";
import { LoadingCircle } from "../../components/ui/LoadingCircle";
import { useNavigate } from "react-router-dom";



const Tryouts = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTestPackages()
      .then((data) => {
        setPackages(data);
      })
      .catch(() => {
        alert("Gagal memuat data paket!");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[50%] right-[10%] rotate-[15deg] text-6xl opacity-10">
        글
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] left-1/2-translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">
        시
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[80%] right-[10%] -rotate-[15deg] text-6xl opacity-10">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-[100%] left-[10%] rotate-[15deg] text-6xl opacity-10">
        글
      </span>

      <section className="py-16 pb-10 min-h-screen bg-gradient-to-t from-light-red pt-5 via-white to-light-blue">
        <div className="max-w-xl mx-auto mt-20">
          <div className="flex border-2 border-black rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none placeholder-gray-500 bg-gradient-to-l from-light-red via-white to-light-blue"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          {loading ? (
            <div className="text-center text-lg w-min mx-auto mt-52">
              <LoadingCircle size={40} color="#000" />
            </div>
            // <p className="text-center text-lg">Loading packages...</p>
          ) : packages.length === 0 ? (
            <p className="text-center text-lg">Tidak ada paket tersedia.</p>
          ) : (
            [...packages,...packages,...packages].map((pkg) => (
              <ProductCard
                key={pkg.id}
                title={pkg.name || "Tanpa Judul"}
                subtitle={pkg.description || "Tryout EPS-TOPIK, dengan soal pilihan ganda listening dan reading yang menyerupai ujian asli."}
                price={pkg.price === 0 ? "Gratis" : `Rp ${pkg.price.toLocaleString()}`}
                DiscountPrice={
                  pkg.discountPrice && pkg.discountPrice > 0
                    ? `Rp ${(pkg.price - pkg.discountPrice).toLocaleString()}`
                    : " "
                }
                buttonText="Detail"
                onButtonClick={() => navigate(`/tryouts/${pkg.id}`)}
              >
                <img
                  src={pkg.imageUrl || imgDflt}
                  alt={pkg.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ProductCard>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tryouts;


File: fe-tekor\src\router\AppRouter.jsx

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { getUser, getToken, saveUser } from "../utils/storage";
import { getProfile } from "../services/userService"; // pastikan path-nya benar

// Pages
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import { NotFound } from "../pages/NotFound";
import Game from "../pages/Games/Games";
import Tryouts from "../pages/Tryouts/Tryouts";
import ProfilePage from "../pages/Profile/Profile";
import { FlipCard } from "../pages/Games/FlipCard";
import { MyTryouts } from "../pages/MyTryouts";
import { TryoutDetail } from "../pages/Tryouts/TryoutDetail";
import { AdminLogin } from "../pages/Admin/AdminLogin";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    const user = getUser();

    if (token && user) {
      dispatch(setUser(user)); // 1. Set dari localStorage

      // 2. Fetch ulang dari backend agar dapat data terbaru seperti imageUrl
      getProfile()
        .then((freshProfile) => {
          dispatch(setUser(freshProfile)); // update redux
          saveUser(freshProfile);          // update localStorage
        })
        .catch((err) => {
          console.error("Gagal fetch profile saat App load:", err);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* User */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tryouts" element={<Tryouts />} />
        <Route path="/tryouts/:id" element={<TryoutDetail />} />
        <Route path="/myTryouts" element={<MyTryouts />} />
        <Route path="/games" element={<Game />} />
        <Route path="/flipcard" element={<FlipCard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;


File: fe-tekor\src\services\authService.js


import axiosInstance from '../utils/axiosInstance';
import { saveToken } from "../utils/token";

/**
 * @function login
 * @param {Object} credentials - { username, password }
 * @returns {Promise<Object>} response.data.data
 */
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);

    const tokenData = response.data.data?.token;
    const userData = response.data.data?.user;

    if (tokenData?.accessToken) {
      saveToken(tokenData.accessToken);
      // Optional: Simpan refreshToken dan user ke localStorage
      localStorage.setItem("refreshToken", tokenData.refreshToken);
    }

    return response.data.data; // return hanya bagian data (user dan token)
  }  catch (error) {
    const message =
      error.response?.data?.message || error.message || "Username atau Password yang anda masukkan salah.";
    throw new Error(message); // penting agar ditangkap di catch Login.jsx
  }
};

/**
 * @function register
 * @param {Object} data - { fullName, username, email, password }
 * @returns {Promise<Object>} response.data
 */
export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registrasi gagal.' };
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const res = await axiosInstance.post("/auth/forgot-password", { email });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Gagal kirim link reset" };
  }
};

export const resetPassword = async ({ token, newPassword, confirmPassword }) => {
  try {
    const res = await axiosInstance.post("/auth/reset-password", {
      token,
      newPassword,
      confirmPassword,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Gagal reset password" };
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await axiosInstance.post("/auth/refresh", { refreshToken });
    return response.data.data; // Mengembalikan data token baru
  } catch (error) {
    throw error.response?.data || { message: "Gagal refresh token." };
  }
};


/**
 * @function loginAdmin
 * @param {Object} credentials - { username, password }
 * @returns {Promise<Object>} response.data.data
 */
export const loginAdmin = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);

  const tokenData = response.data.data?.token;
  if (tokenData?.accessToken) {
    saveToken(tokenData.accessToken);
    localStorage.setItem("refreshToken", tokenData.refreshToken);
  }

  return response.data.data;
};

File: fe-tekor\src\services\testPackageService.js

import axios from "../utils/axiosInstance";

export const getAllTestPackages = async () => {
  try {
    const response = await axios.get("/test-packages");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch test packages:", error);
    throw error;
  }
};

export const getTestPackageById = async (id) => {
  try {
    const response = await axios.get(`/test-packages/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch test package by id:", error);
    throw error;
  }
};


File: fe-tekor\src\services\userService.js

import axiosInstance from "../utils/axiosInstance";

export const getProfile = async () => {
  console.log("getProfile dipanggil");
  try {
    const response = await axiosInstance.get("/users");
    console.log("API response:", response);
    return response.data;
  } catch (error) {
    console.error("Gagal getProfile:", error); // <== debug error
    throw error;
  }
};


export const changePassword = async ({ currentPassword, newPassword, confirmNewPassword }) => {
  const token = localStorage.getItem("accessToken");

  const response = await axiosInstance.post(
    "/users/change-password",
    {
      currentPassword,
      newPassword,
      confirmNewPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateFullName = async (fullName) => {
  const response = await axiosInstance.patch("/users", { fullName });
  return response.data.data; // ini adalah ProfileResponse
};

File: fe-tekor\src\services\vocabService.js

// src/services/vocabService.js
import axiosInstance from "../utils/axiosInstance"; // pastikan sudah setup axiosInstance


export const fetchVocabCategories = async () => {
  const response = await axiosInstance.get("/vocabularies/categories");
  return response.data.data; // assumed backend response structure
};

export const fetchVocabulariesByCategory = async (category) => {
  const response = await axiosInstance.get(`/vocabularies?category=${category}`);
  return response.data.data;
};


File: fe-tekor\src\utils\axiosInstance.js

import axios from "axios";
import { getToken, saveToken, removeToken } from "./token";
import { refreshToken as callRefreshToken } from "../services/authService";
import { store } from "../App/store";
import { clearUser } from "../features/auth/authSlice";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://0ab1-180-248-33-245.ngrok-free.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.request.use((config) => {
  const noAuthEndpoints = [
    "/register",
    "/login",
    "/forgot-password",
    "/reset-password",
    "/auth/refresh", // Tambahkan endpoint refresh token
  ];

  const needsAuth = !noAuthEndpoints.some((endpoint) =>
    config.url.includes(endpoint)
  );

  if (needsAuth) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Jika error bukan 401 atau 403, atau sudah mencoba refresh
    if (
      (error.response.status !== 401 && error.response.status !== 403) ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    // Jika sedang dalam proses refresh token, tambahkan permintaan ke antrian
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      removeToken();
      store.dispatch(clearUser());
      return Promise.reject(error);
    }

    try {
      const response = await callRefreshToken(refreshToken);
      const newAccessToken = response.accessToken;
      const newRefreshToken = response.refreshToken;

      saveToken(newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      processQueue(null, newAccessToken);

      return axiosInstance(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      removeToken();
      store.dispatch(clearUser());
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);



export default axiosInstance;


File: fe-tekor\src\utils\storage.js

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const clearUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};

// ✅ Tambahkan fungsi ini jika belum ada
export const getToken = () => {
  return localStorage.getItem("token");
};


File: fe-tekor\src\utils\token.js

// src/utils/token.js

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};


File: fe-tekor\tailwind.config.js

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'kr-blue': '#0047A0',
        'kr-red': '#CD2E3A',
        'kr-black': '#000000',
        'kr-white': '#FFFFFF',
        'light-blue': '#E6ECF5',
        'light-red': '#FDEAEB',
        'gray-text': '#666666',
        'success-green': '#22C55E',
        'warning-yellow': '#F59E0B',
      },
      transform: ['group-hover'],
    },
  },
  plugins: [],
};

File: fe-tekor\vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

