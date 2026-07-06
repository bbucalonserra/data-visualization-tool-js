<<<<<<< HEAD
## Case study 3: Data visualisation

## Description
This project is an interactive data visualization tool built with **JavaScript**, using the **p5.js** library. It displays multiple datasets through animated and interactive charts focused on themes like:

- Gender Pay Gap
- AI Usage Patterns
- Food Intake and Nutrition
- Climate and Tech Diversity Trends

Each chart is rendered on a custom-designed canvas with accessible color schemes and modular components. The project includes assets, survey data, and UI elements designed for exploratory analysis and educational purposes.


### Repository Format
```
└── data-visualization-tool-js
    ├── .git
    │   ├── .COMMIT_EDITMSG.swp
    │   ├── COMMIT_EDITMSG
    │   ├── FETCH_HEAD
    │   ├── HEAD
    │   ├── ORIG_HEAD
    │   ├── config
    │   ├── description
    │   ├── hooks
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
    │   ├── index
    │   ├── info
    │   │   └── exclude
    │   ├── logs
    │   │   ├── HEAD
    │   │   └── refs
    │   │       ├── heads
    │   │       │   └── main
    │   │       └── remotes
    │   │           └── origin
    │   │               ├── HEAD
    │   │               ├── final-working
    │   │               ├── main
    │   │               └── mid-working
    │   ├── objects
    │   │   ├── 00
    │   │   │   ├── 919d0398ec1dea3e61e4909a196f63082f763a
    │   │   │   └── e8d6d09c0d39bbbc9e08e7123a8742b9d722eb
    │   │   ├── 02
    │   │   │   ├── 3541ca3e35a62ad44863e14027c66ea7c5baf5
    │   │   │   └── 5524084933b4985dc36dbd9725193818c88a15
    │   │   ├── 03
    │   │   │   ├── 0e98d99e51ac02b390a5a22585e2da24a4af69
    │   │   │   └── 81198d346fb44a3dfa9c6c87a025a024e375c5
    │   │   ├── 04
    │   │   │   ├── 3980db1352a63427bb897f71727548c48ac9f1
    │   │   │   ├── 559523fde58683d21c162f9c8a853bef00ed01
    │   │   │   ├── 8379c559f0527c73b5f65229475b48e513ef55
    │   │   │   └── dee1ae35dee9c89badcc6ab69ab50b4ebe2c11
    │   │   ├── 06
    │   │   │   ├── a0e47a3f47455d8676c0febd334d19b46a959e
    │   │   │   └── c8511ab042d0a65b56bc182b263290104e13e1
    │   │   ├── 07
    │   │   │   ├── 3cb0ef2625df02bc0ecefdb18b73153fb632ee
    │   │   │   ├── 4e600d2e395e860b0418bcd8d061769e6c4359
    │   │   │   └── 958c3c0f61db6da30e18f9921dbebd2082da61
    │   │   ├── 08
    │   │   │   └── cd5fc2d95519462e1183791cb6b06417849c48
    │   │   ├── 0a
    │   │   │   ├── a8ec99e04919c4bc4b646ed920194971e8bca7
    │   │   │   └── beb01d8086d058a3fcd56e0e9e131b4bcfac03
    │   │   ├── 0b
    │   │   │   └── 9e87733911307c7ddbe3dbad2c9dfeea8b4573
    │   │   ├── 0c
    │   │   │   ├── 31e9f57cca4d7f0567aa0d39baba1f54c1d160
    │   │   │   ├── 429eb44c56b6fc293090b140aead44d6a5e698
    │   │   │   └── 8bb0c2076e74bcc3fb02492ac79f984068fdfc
    │   │   ├── 0d
    │   │   │   └── a781721819b4452e06f535f7a43ea4a6610861
    │   │   ├── 0e
    │   │   │   └── c7a6b15873a92dff913fe7375fc6f2597e9a55
    │   │   ├── 0f
    │   │   │   └── 6fe709cdd408727185b45cc8522e46a66f8060
    │   │   ├── 10
    │   │   │   └── ef8102b817f970fa027183642c113276887f1c
    │   │   ├── 11
    │   │   │   ├── 04358a99a59982f399af4eedc5d65492a052b5
    │   │   │   ├── 102b776eaaee1c68aaca85d6a57e20e82ac26b
    │   │   │   ├── 2d929dcd951a199dee1448eb8c0bb919e4be3d
    │   │   │   ├── 46a04ab9479d1a48ae12f53e36cc7254942a0f
    │   │   │   └── edf20d05a13257fae1118911960c2f7604106c
    │   │   ├── 12
    │   │   │   ├── 60290f847b85b3fc51b3424499e0d50a349bdf
    │   │   │   ├── 62ac6f5c784f52bb30cefc4d1b6308d385b170
    │   │   │   ├── c58166552d9575032481a6716f39e8f5412dcf
    │   │   │   └── cd5de7162c4138051995b216196e3be0b55a67
    │   │   ├── 13
    │   │   │   └── 2cca1602beabba6145d103cca0592c13f3a39c
    │   │   ├── 14
    │   │   │   └── c4d15c149141ff0e6b43343b227b11284cb9c6
    │   │   ├── 15
    │   │   │   └── dd2e484574ea6a9cdb633ed1d40314d68597e1
    │   │   ├── 16
    │   │   │   ├── 161cc90b1326e7b0dc8c064f27b0b0a42c2f53
    │   │   │   ├── 1685e8a928ce2feb8e1fb8ee135f12324fbae6
    │   │   │   └── a1560e8de30e53bed2b05f643b2e4a902a975f
    │   │   ├── 18
    │   │   │   ├── 80307775bb341376425a74d3c006fc868476f7
    │   │   │   ├── 9cd271d2c396c4d2e908dc2de0c0e319749649
    │   │   │   └── fb09faa3a553e00d0739cd81e12285abea07f9
    │   │   ├── 19
    │   │   │   ├── 57aa2b8b31fb3619edfbeb384a676c8ccdcb93
    │   │   │   └── a509641c5391eb277a09cc9583858a22758b66
    │   │   ├── 1a
    │   │   │   ├── 2313ee1374cfb922b6b304b72fe34c8c440501
    │   │   │   └── f926bdbf506229f9770d2c3921f253c209cb36
    │   │   ├── 1c
    │   │   │   ├── cebccfea89f68f413274a8ec1c2a9bb2c3648d
    │   │   │   └── e6ef22d63857d781dee368f91c1bf83281e170
    │   │   ├── 1d
    │   │   │   ├── b5515e463f24e99875a7d0a3524fc8e6de473c
    │   │   │   ├── cf717fee72517a6832621901c20ab5659f2a2f
    │   │   │   └── dbad62f7111f025cb25210c55b98ae215cec2a
    │   │   ├── 1f
    │   │   │   └── a32a4456ce5055a2e41b29608506744477c119
    │   │   ├── 20
    │   │   │   ├── 206db313a2fdc57a19675f926d0c49d62bdcd7
    │   │   │   ├── 31dab09d5f716e77be9477f4cce6b3c53def48
    │   │   │   └── 72d4f52915060274e0e3f31025704d5ef445e4
    │   │   ├── 22
    │   │   │   └── 68f68646c39d91c0a8991f417bd166a61c7b06
    │   │   ├── 23
    │   │   │   ├── 454ff1d8263a83ded1adf367f473d7dc44e2c8
    │   │   │   ├── 8a8eae698090c333250a8f2610bec5e1027b8e
    │   │   │   ├── dbbef7ad33589162417e100093cea56d8dab03
    │   │   │   └── e49dcc4ebd77bec20f4e3adc4aa52a028100ee
    │   │   ├── 24
    │   │   │   ├── 1af682efb1bdaca21d28fe1c2868b489becfc5
    │   │   │   ├── 2580456c1a8670190ef499c81e5395612cc324
    │   │   │   ├── 67c66d9de6f497f3c1c98e97959db48fb21764
    │   │   │   └── d547418b0d1b821abc91ae33a3367bc0c8b473
    │   │   ├── 25
    │   │   │   └── f1607e7145b824c23038b59b13179adffe02c3
    │   │   ├── 26
    │   │   │   └── 6f0d45baa5feeb77f6180041e045b9c3cba575
    │   │   ├── 27
    │   │   │   ├── 457bd503724d4fae8f15fb8343eb31e0bc37a5
    │   │   │   └── d9a5585c9d93922b932f3515acf3220cbe8c9e
    │   │   ├── 28
    │   │   │   └── c4e466548f67eb289b9c505541fbfc5aa5d0ac
    │   │   ├── 29
    │   │   │   ├── 1abe43bc3d1d1323991ca057acfbbc6fd814cc
    │   │   │   ├── 3c8a928f4ab5f387d26ecb36b1ac8388c0ac44
    │   │   │   ├── 7e991a645351b9f93e80f681854591f6c37bba
    │   │   │   ├── 7efb0facb33b1099452ad55d5e90b6cbd039b5
    │   │   │   ├── c6f80c4919e6950b2779ed45e4fee8bfc366ec
    │   │   │   └── eb937f1ac1d53fe2d0e81064bb5152bea3bc9e
    │   │   ├── 2a
    │   │   │   ├── b812e94392b9c681d8b2a4146188afcf87abd0
    │   │   │   ├── b9279f20296d46eb08109490433541dba767b3
    │   │   │   └── d8bd8092b5857a890f7837bc592bc6babae764
    │   │   ├── 2b
    │   │   │   ├── 3403a6a194fcebeeef9c89da5d2059ff1f902e
    │   │   │   └── 3ad9fa9f5c47cf8c81a6b76bbe5f2116644cb7
    │   │   ├── 2c
    │   │   │   ├── c4bbd25f854ba4394c2141fd92079deee43e35
    │   │   │   ├── eb8c10215a2dc780ddf235f92070de14c8f05e
    │   │   │   └── efcc1c640c9b37685b102446299c2fd67e52e2
    │   │   ├── 2d
    │   │   │   ├── 379fa45c550e19863e20706242ff5d7909d632
    │   │   │   └── 7f53d8af40282ed448266d3fb4c9b58ae8176f
    │   │   ├── 2e
    │   │   │   ├── 3b5f3f5e1b573f5617ee78d55bfb6e3306328f
    │   │   │   └── f9ca5df305c7d6f952d4bff6d1deb7bf5dd51f
    │   │   ├── 30
    │   │   │   └── ef88f3894e0fdea5125d84c6c547a0558a5c1e
    │   │   ├── 31
    │   │   │   ├── 1824cf16e9faa7c059e4419d8884c64e130a77
    │   │   │   ├── 1e65f2b4d3f97f37724ae60c142f268b744a68
    │   │   │   └── 9d033496d73481640c084ad7439d25d27d1da5
    │   │   ├── 32
    │   │   │   ├── 1667a750159a4e3e4c1299bbce90b9becf6763
    │   │   │   ├── 1a8f963432f32eec21e8a52d28d92d76475d91
    │   │   │   ├── 868846a07078e73643f635fa130db376715ec4
    │   │   │   └── e13e051ee83db1676500edab2a9621ebbdbdc1
    │   │   ├── 34
    │   │   │   ├── 0862b12569b63b1e9f3ecb279a3a6f9c06815d
    │   │   │   ├── 2f4fb2fc0fd29ab9794474871d164abd971a2d
    │   │   │   ├── 52d396866be12b688bcd86990e20e68981de20
    │   │   │   └── ac3d9ce5043b75cc8be24fa1a31ef6bb93af6e
    │   │   ├── 35
    │   │   │   ├── 4a4ef29450c98eb7c25e385fa05ec4954b8cfb
    │   │   │   └── c585098643521bbae26d270321fc36d2b40e7c
    │   │   ├── 36
    │   │   │   ├── 0c134fdefed0680a1411f29b64403729a4ce6c
    │   │   │   ├── 109bacf238cc97aa747ad4e8d0e27b51e56c30
    │   │   │   ├── 13cd0f18b432cda4950e700f3242f31f52f0b5
    │   │   │   ├── 423c33fbce703402a0e4c11ad763f4e4d13754
    │   │   │   ├── 7df8be3427886db8c4d1dd45d2a8bc39fbb480
    │   │   │   └── c5ac5d8e3f88b3c90f270dafb9bf52cf0b08e3
    │   │   ├── 37
    │   │   │   └── c5cd05d5a375be16f85fa91bc8b4284c93ee30
    │   │   ├── 38
    │   │   │   ├── 465e5ae301b3ddefabfe22b188c4fee52182c0
    │   │   │   └── 4806cab1dffe3ff0c099c1aed2efbc3f4a8fb7
    │   │   ├── 3b
    │   │   │   ├── 02002ce544005ccdaf83e621e89e735c2a27c7
    │   │   │   ├── 334c6b790299c4779635cd3609dfbf269b3feb
    │   │   │   ├── 387eb859cae066d971ec9fe1dcb9b0263eb6f7
    │   │   │   ├── 526cf1bf0481c6b4c1cd44eedb543ab532ae67
    │   │   │   ├── bda7d4fae51d5a6835a7908ac4eafcc2db883f
    │   │   │   └── d36ebb091df9fd0c75881ffb489a7919136b31
    │   │   ├── 3d
    │   │   │   └── 9764697e7a213b764c6482013b0e0268c8b4cd
    │   │   ├── 3e
    │   │   │   ├── 1c0c37555c63ad694f52e93a745e5d38fe4a2b
    │   │   │   ├── 62209dd2010cf4dadd81db14e1bb2b4469d27b
    │   │   │   ├── 779bf2875c8f602b44aa4fea90938f666a8b38
    │   │   │   └── 9bdbe790fa1804762aeba1ee24eba7382a2977
    │   │   ├── 3f
    │   │   │   ├── 1855a325e92bb24a4489f0a22057ad2512dda9
    │   │   │   ├── 27be881ff0cf99f25d314b1661acad2ae56a20
    │   │   │   └── 348341cb5b76e13dbed0555a58e964d71f8613
    │   │   ├── 40
    │   │   │   ├── 925050ea4a24ddb5cf6a335e9e923c1c062fa3
    │   │   │   └── ae2fc900c86616433fb43e77eb625e08356132
    │   │   ├── 41
    │   │   │   └── 9413c30f7a2a249ba0bacdb6c36d6c98813bdb
    │   │   ├── 42
    │   │   │   ├── 1678472dc0dca722d13401d37556c0f6722b95
    │   │   │   ├── 1e7943f8ca0364253ab88bfa01078e00a31a0c
    │   │   │   ├── 8a3f389cc1ce4b61575137dc4c93fdcee7bfcc
    │   │   │   └── 97f173868bae0333bd1089d73df42c5e7421c2
    │   │   ├── 43
    │   │   │   ├── 2284b8ce0f9b27bce7c8cd6cc39292484a98f6
    │   │   │   └── a2c2f5da46d3753cd739b73ebb67ffe6c8fcae
    │   │   ├── 44
    │   │   │   ├── 7341cb8149ecc2a5ada3c74ea35c05cbfc6fea
    │   │   │   └── d938fbd8904b42f54167ec3c8ccef2596ef8a5
    │   │   ├── 47
    │   │   │   └── 61b2ad631bc874dc9737a52838332cd60a7b2d
    │   │   ├── 48
    │   │   │   └── 16350e582ce2aa81343b283cdb338808f19574
    │   │   ├── 49
    │   │   │   └── ebc8aa0e3dc1b7882e52372bde3e98a78cb4ac
    │   │   ├── 4d
    │   │   │   ├── 75303159b4a041575502d4a1e19ba94196c821
    │   │   │   └── bbb3b69fff8e5e9b062c6ad59a39f7958b4eea
    │   │   ├── 4e
    │   │   │   ├── 96ecb5fe6937f88363ae17c227c28d2b26471e
    │   │   │   ├── ab68d83fe202f9fcd627b78b40a2647fba2434
    │   │   │   └── c1c3eed577d0c15e248dba266b0498fb46ef02
    │   │   ├── 4f
    │   │   │   ├── 2e5b9f224f74c7d05a248061f02105f378710f
    │   │   │   └── e3d32ebd07c60dcda8d7a0b7905f974cf618a8
    │   │   ├── 51
    │   │   │   └── 7c601df38f97ac308c55ad6f39c43dcab534be
    │   │   ├── 54
    │   │   │   └── 46ecefc12f6625187a9c1e70c08df3acba1fdb
    │   │   ├── 55
    │   │   │   └── edb8b75d1115854f393b8cf0e33bb1584e2f45
    │   │   ├── 56
    │   │   │   ├── 0745eba46df906f232ac8dbb61469524d2f841
    │   │   │   └── 0dc3a6c1a2ff76b6d41ead4e4ac819c6de6bd8
    │   │   ├── 57
    │   │   │   ├── 27f95b222e2c34ec7f93a26262013428291b16
    │   │   │   └── ceaaef945dbc13cdc207d62bdcca70f744b9cb
    │   │   ├── 58
    │   │   │   └── 0105919b855370c0c3e85102f3af34d9ea2d69
    │   │   ├── 59
    │   │   │   ├── 346e2bb2fd8896e9c3bd9b146c47a8cde36411
    │   │   │   └── c5c2a559fd2cf760a547398ee22165cb4a66f1
    │   │   ├── 5a
    │   │   │   ├── 53cb925c4b35965a55f5ec99735ee3989e9fa7
    │   │   │   ├── b3b5489018c74a797e8839ef566cd46cc7a20b
    │   │   │   └── f42d473356441cc19d900ed5f8bc35d065edcb
    │   │   ├── 5b
    │   │   │   └── 33f6922e360f51410d47527e5426548d53f24b
    │   │   ├── 5c
    │   │   │   ├── 05f033db135a007801159e3b4207cf47980a94
    │   │   │   ├── 8622854bc5b30fdea57bb70ce1e533ca13b149
    │   │   │   └── dff2f936b9d31ecafa31660003e968124ddc94
    │   │   ├── 5d
    │   │   │   ├── 665f3e0eca53f181f1a027a4615bf5f519b8a7
    │   │   │   ├── 6e8d36746cf7813b20d72708267c85d8c94b22
    │   │   │   ├── bba75700093ae64e5aa8e5c886d1fd491588de
    │   │   │   └── e42c56c664f54402d4b413cd310c1d1c87ab56
    │   │   ├── 5f
    │   │   │   └── dcab5a79d24a387a1916fef87444b7d61457de
    │   │   ├── 60
    │   │   │   ├── 60899f15f2964d0142f40fbf80465afade154e
    │   │   │   ├── 9a0824a76bff876dbc1b1d2cb82434d2f6e7d6
    │   │   │   └── b2a66a5b7363c7947dcc85d3b8bb277e59518b
    │   │   ├── 62
    │   │   │   ├── 23c1bfac47c271251ce00e768c61409ad837cd
    │   │   │   └── ffd019b7dcbd4630eaee0667863b279dd1b987
    │   │   ├── 63
    │   │   │   ├── 822a20adfbc552d7d8aaea125752b5191a3493
    │   │   │   └── b89c4ea6329bd7ead21966315863e07c1917d6
    │   │   ├── 64
    │   │   │   └── 404da88fb5bbe73867d6cd10f44c5ed831465a
    │   │   ├── 65
    │   │   │   ├── 14880c4ebdfb7a5de81de2fb04e8bc36d8a55e
    │   │   │   ├── 3384d2b2b614c1f94b0ab1fee8290f8105a410
    │   │   │   ├── 4685f41dc038248a699cad36f2d5c7b3e33549
    │   │   │   ├── 9c19a330409362141ff49f967df0083a3c6ea7
    │   │   │   └── eed241b3ec7172febe5620cc2cabce824a1289
    │   │   ├── 66
    │   │   │   └── c66f46e6121ea030c0d8bdcbb8e4c9922021df
    │   │   ├── 67
    │   │   │   ├── bb89e2bdc5025e5243fe152b3d6c9c021e999b
    │   │   │   ├── cf00737dd3a33153a3b2d33499de265a10c886
    │   │   │   └── d042d114a8e8f5711ec18751c89b794eadc530
    │   │   ├── 68
    │   │   │   └── 525093428e75be03162bab9a9375bfb8587c3c
    │   │   ├── 69
    │   │   │   └── eb98e6a34ff5777046fa189eda023959bb8d9c
    │   │   ├── 6a
    │   │   │   ├── 05f7a70746cbc7669a6a0b175e131ddd73f9bc
    │   │   │   ├── 18dc6918f12ac95bc0d1be3a4a8911570da558
    │   │   │   └── 847e1d2be5849ea0803d8b13fa4cc221e65b3c
    │   │   ├── 6b
    │   │   │   └── c7c6c33811908375fcf2f2fd0da8c0bf3cfcfd
    │   │   ├── 6c
    │   │   │   ├── 0a698006b90a394cef30ef398f4568cca1b7c9
    │   │   │   ├── b4656c66c4938d3620d3a4cac76395030d136e
    │   │   │   └── f165093efceb19307625701673524a2d7cef83
    │   │   ├── 6d
    │   │   │   ├── 10b333a0e9162bbe0c4aeea1a3867a7a78809c
    │   │   │   └── 33af5eaf4f00189159cf31ef2732d5d68e9aff
    │   │   ├── 6e
    │   │   │   ├── 0bdc341958dc99e1a147940391e4ee224b264b
    │   │   │   ├── db225d788d732dba9338b1f231756a97cc038a
    │   │   │   └── e97b889596da4b427f4230fe5ccf1b0a098de7
    │   │   ├── 6f
    │   │   │   ├── 32f0b02a07906914ea3f0f3dbd7ed1a9abb4aa
    │   │   │   ├── 3a2913e199cebe9ace75cf7e5a2818da27fbd3
    │   │   │   ├── afcdbe5822e5eb8f4dcd39c9e1e972a0c95b7d
    │   │   │   └── cd5f964d3c54b1a94ed4ab2311fa3cc0d9f493
    │   │   ├── 70
    │   │   │   └── 92a880bbdbb22299a7bff0f2fa7879a8f1ad2d
    │   │   ├── 71
    │   │   │   ├── 21a39521088037ad308f0b3013e3a6ed781441
    │   │   │   └── a95acd4141c5eca4d1d28aac40e7d5cfc4ee4f
    │   │   ├── 72
    │   │   │   ├── 15cd94c2cef424621786e66996f7846c1af3cd
    │   │   │   └── ac2541bf0770ad6b3878cce298c0e0cfdaacf0
    │   │   ├── 73
    │   │   │   ├── 02dfe17444c6649a76b341297981963d1d0045
    │   │   │   └── d54ab9b8e5acb3b1da84f27d62087d7e781821
    │   │   ├── 74
    │   │   │   ├── 46a9f7fcab4792e3f4832ec8b47ce232c4ed8e
    │   │   │   └── 9ee16677c019633e655e26dbf062c7eb366b5d
    │   │   ├── 75
    │   │   │   ├── 1bb170af11720f4d40b1f5ff9e52f283bb7854
    │   │   │   ├── 29d1b9051a6783bace1039d864d19bb8715a05
    │   │   │   ├── 2d9cd959bd13fe78a220c5bb4bb80ba83effd8
    │   │   │   ├── 608c6642d677d8e05f46a3d3bd3669db806f53
    │   │   │   ├── 865ffbfd3659d458cd5770aa5a3ba8fa86ad3e
    │   │   │   └── caa35d10be002765c641a567fb229fffc619eb
    │   │   ├── 77
    │   │   │   ├── 32388a6cb65fead9c10e491732defd1510fb43
    │   │   │   ├── 7a55a318a25c8ed27b812b4c3d2f5536c38b7f
    │   │   │   └── 9c9e7214a01cd4edb9889f73411fd91d7e5c30
    │   │   ├── 78
    │   │   │   └── 2442a7478bf6eb419a17f3b9cbc07383570729
    │   │   ├── 7d
    │   │   │   └── 8d3f10e3d5d21be2916c65b5775aa116139355
    │   │   ├── 7e
    │   │   │   ├── 3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71
    │   │   │   └── bdd3dff161fe47b3317c1e4103a88b2a9c3ab1
    │   │   ├── 7f
    │   │   │   ├── 0d44aacf14a51d0cf19ddd6d0cc1020e36bf17
    │   │   │   ├── 1193218bd3b433f82aca633b3c1f7ab73f20ce
    │   │   │   └── 2b2138aede8bbae419ac98212250f50a1fbb39
    │   │   ├── 80
    │   │   │   ├── 37fe250bcced941fdcc957b034b44225d2d4cc
    │   │   │   ├── d8639c68fa98baa3d613c1740c8bbeab69ec08
    │   │   │   └── ff64eca9a251e05588220c2f359932c6784b6a
    │   │   ├── 81
    │   │   │   ├── 8ee8faf2e6c09fc4cddb43dcaecbd9d7c9738e
    │   │   │   └── afeea53c93ec9135834ae9b9b90066a065134e
    │   │   ├── 82
    │   │   │   ├── 37c750b89983abf69dfc14776db8e465cbd756
    │   │   │   └── 77d3c0de00ad842a09d03f15221354cf7d292c
    │   │   ├── 83
    │   │   │   ├── 2a568f2cb3b7a3234193273fdd839e1aa410f0
    │   │   │   ├── 68d67aa0b44ba26bb39da14a4221f77d8b567d
    │   │   │   ├── d72b2d09c89f2fca2b87a801e96d50bb568c59
    │   │   │   └── ebbce11e7ff4368e221397a359cd322ecad89b
    │   │   ├── 85
    │   │   │   └── ceefb28002417bd57bdede0534e41fe3358d53
    │   │   ├── 86
    │   │   │   ├── 04aee4a81785c1261b7d03b7a4c6532e0b4857
    │   │   │   └── 4096a9358918eaecd05c5ae9979bd082d22402
    │   │   ├── 87
    │   │   │   └── 586b5a69bdf907397c0778cc28be2aa8d14ef5
    │   │   ├── 88
    │   │   │   ├── 32657bf83e2f361543aa61e52528bb96d6a2f3
    │   │   │   └── 75be3f8ed0e71852d6fd893d77ae302b4dc10d
    │   │   ├── 89
    │   │   │   ├── 64dd27d406f8fdd866454ddcaf176caad74cf3
    │   │   │   └── aa7c06dfce58abd6b182a1a80acb4bf319e7b3
    │   │   ├── 8a
    │   │   │   ├── 283750331514f8da8520bcdb901f9da868ce49
    │   │   │   └── 4685d8e69d548e483012b061d029946b0a1751
    │   │   ├── 8b
    │   │   │   └── e0cff46b001f6583c7c1d764c4db708cc7fd89
    │   │   ├── 8c
    │   │   │   ├── 0541bdd8a3d8648d4ec6cfdf4d099b0f6cf546
    │   │   │   ├── cf79577822dcddc37269c3bd3cb89176a2ee50
    │   │   │   └── f8f7fe0d254ae54b188158bfed861b598742a7
    │   │   ├── 8d
    │   │   │   ├── 59f884fbc43c44832b883b660b1ef52c76d988
    │   │   │   └── b8cc094db09e0e396687a892156330094e2db3
    │   │   ├── 8e
    │   │   │   ├── 85fb83f8c48d202cd43790d8823982816b67b7
    │   │   │   ├── d8d79cb8edd3481f253a8ac5d15bd445370c0f
    │   │   │   ├── dfc04cbffc7aa6cc39e0980c98cee992171a18
    │   │   │   ├── e6c152132cc46dbeabaaa3c8d191f841b01628
    │   │   │   └── edb64afa4971743d2c42964c8852ac29da1ef4
    │   │   ├── 8f
    │   │   │   ├── 3d6f49ba6b8b5229d5c6eae675eb03d634bc96
    │   │   │   ├── 9fc660a774da4dca6b674689dff6cb7d1e6d58
    │   │   │   └── e720decb26b73a9915ee8214353102e42e9261
    │   │   ├── 90
    │   │   │   ├── 2d3cf1a1113e4126fde0407e0a8680662530a7
    │   │   │   └── 537b7673f6a65fb6e03d33844e98532c7f4e53
    │   │   ├── 91
    │   │   │   └── 1768fe77be1d27428ed35f77d6188abad5180c
    │   │   ├── 92
    │   │   │   └── 9a0938bf3c19092cae78cb3dbd2d081798773d
    │   │   ├── 93
    │   │   │   ├── 24848b2bd69b3626ed949acc4797d75cbf20da
    │   │   │   ├── 2a3ab9c9b428135392d2318e394b22640b2b77
    │   │   │   ├── 8a554ca89d7cc47822a40b2dff52a8b09a6fe6
    │   │   │   └── c6ec9b5581fd69e6ab2a3cf79bd40de99c05f8
    │   │   ├── 95
    │   │   │   └── 78c3e030afff0b5d8fd4e794dd3865fda7d54e
    │   │   ├── 96
    │   │   │   ├── 255f3e12bc1374b85a9ad27e3c24fc711ecaff
    │   │   │   ├── 2fa93d1b427a11ea153ba7ffa637686eabccc9
    │   │   │   ├── 573662bd2b38a66655c468b1266ab909d228ab
    │   │   │   ├── 83d1d936cd51b64d8b32e0fc8e66e5f35ec543
    │   │   │   ├── 9aa7ba87a9e425644e4f5c6ac92d191ca5a1f2
    │   │   │   └── e4c4dc7112c15aac1b1b5d1feb0fe6e4b6db7b
    │   │   ├── 97
    │   │   │   ├── 3a42febf9b23f4d385552cc98a11d88d14ece7
    │   │   │   └── da41fdff69e076e4366e0313eac2c32b69e76b
    │   │   ├── 98
    │   │   │   ├── 8320021f0645a00c4757fd1c1e413cb138ae4c
    │   │   │   └── d7b0d5ad30f57eeca2ad3fe619d16f96c6f8a7
    │   │   ├── 9a
    │   │   │   └── 91dd020a902856b43fd8d9aca8d144db65bfcb
    │   │   ├── 9c
    │   │   │   ├── 0fb3779ddecc92d4d636296b0d50dcb8aca35e
    │   │   │   ├── ea42ea8bc5a365ac5d2dff4a44f80e9d5b8ddf
    │   │   │   └── eeefc666088ea2e67b06ea5ff1145d572a9d86
    │   │   ├── 9d
    │   │   │   ├── 2f5f422089967157023465233eb45d01138e90
    │   │   │   ├── 7c9422a3d0030700c498ea222f11f0d944ff4e
    │   │   │   ├── 7cf220f98402e6908795046cd3c124886fc54a
    │   │   │   └── 9ae100f52fc9d41c38f45808e82f43421f873f
    │   │   ├── 9e
    │   │   │   ├── 38e394fbb8bbd5cbc8caa9c6b5b25f52bf40f9
    │   │   │   └── 6b756607730789c3c2678d0be516500558360a
    │   │   ├── 9f
    │   │   │   ├── 1b143281e010ba2b6faa3d8d9706ea741a9d1b
    │   │   │   ├── 4fafb617c4861f314ba89b7bdba072ae94a7c9
    │   │   │   ├── 4fe66cfc7562bf36eafa17cc017b7e0015a256
    │   │   │   └── 623e0021bad8480f902921ff58bed6e46ca179
    │   │   ├── a0
    │   │   │   ├── 297fe21d94d0ad7b384d6fa0abbdbab5bccd6f
    │   │   │   └── eff0ed206e42ac8ed39b89c87ca98a97f42c4b
    │   │   ├── a1
    │   │   │   └── c999a284c0d077c2cb89cc04a65747cf9b9614
    │   │   ├── a3
    │   │   │   └── 8365d420884b4f5dba7281715a05120b9026e3
    │   │   ├── a4
    │   │   │   └── a09c6e324acfb822d04fd170877d7636015bc6
    │   │   ├── a5
    │   │   │   ├── 45fa4ff531535b6f350149a9bcaa519bef6ab0
    │   │   │   ├── 536f5d54791d4127dbd08383fa219daa0f03c1
    │   │   │   └── 6965064215ce7efb8156581ff62c159854a5bb
    │   │   ├── a6
    │   │   │   └── e504709f43aab0ab597778467c7f65738e2a57
    │   │   ├── a8
    │   │   │   └── 51c8594c80a6a530b104f08d01789267bd876b
    │   │   ├── a9
    │   │   │   ├── 48a6d32d0d60e59565c54c21710678f8e506c6
    │   │   │   ├── 4be40ab583d8bbb5309bf2772089f42ca17e71
    │   │   │   └── acd182559a123fa80fdd5790a459dae5d9316f
    │   │   ├── aa
    │   │   │   ├── 0b39789be8eb686fa96d7804d2cba9a6957e46
    │   │   │   └── 413e66975ca1bfc8b9da28d8204acd0f77915a
    │   │   ├── ab
    │   │   │   ├── 1c1aa2ac1bf3a0a4e7a5e716df49890c30317a
    │   │   │   ├── 34b70cdbf8c98594c10332668d7c3cf0c43d76
    │   │   │   ├── 5101e634be68c73602279372d662d8f4d22a4a
    │   │   │   ├── 7d11baceec7e6b5899301b8c1cbd42e9eeb96e
    │   │   │   └── 9886ad110015139505424d60f0054a0b4092e3
    │   │   ├── ac
    │   │   │   ├── bccf71398485676078fdfe6a745b90be300922
    │   │   │   ├── bf406bf6ccb54e5c5d2f668e66fb4fdef684d1
    │   │   │   └── f278e2dcc8d1882c3d4cd697a11c20b1774a10
    │   │   ├── ad
    │   │   │   └── 5e40fcd9e91a2cbd5b97547d2607255580de51
    │   │   ├── ae
    │   │   │   ├── dce7c92237998c165a5c60c0aeefb633430837
    │   │   │   └── ff7c299fe34b9cf00aba66925a358e4c398a35
    │   │   ├── b3
    │   │   │   ├── 39b725ea968ae4767a009e40b8f55f4cb9d56a
    │   │   │   └── 78c3a4d79be4074a896a3df8eb2cdffb701cdd
    │   │   ├── b4
    │   │   │   ├── 0ce774d1f6a9e0d13acd68aa17fa22b1f6b201
    │   │   │   ├── ad6e4b55cdee388bd84c9cf7c7d749de952a0e
    │   │   │   ├── bdc827b68e65c794e8a7ca6212671ad4ffbb57
    │   │   │   ├── c05f4e6311077be200cae79e5f98b82fdc7e54
    │   │   │   └── e2f13a1ceafce49f49f425403cace8902ba375
    │   │   ├── b6
    │   │   │   ├── c5e1ae3a41f143a1792a843735a16751246eb9
    │   │   │   └── c78c4e89aaa1eb824da8d43fffc11d2a60f475
    │   │   ├── b7
    │   │   │   ├── 0db7af45e694eb3c7519225a02a8e642f4107c
    │   │   │   └── d6070cac8a65f38a8be89cb9d03ec6ffb64b45
    │   │   ├── b9
    │   │   │   └── aedcd49d084a7a02213f4a5f7d9f5df090b900
    │   │   ├── ba
    │   │   │   └── 02c0aea3ca8af1d4b8be93a521c28d5b8d9628
    │   │   ├── bc
    │   │   │   ├── 4afe9f7a7966316d4f1dd16b9599226ebf3cb1
    │   │   │   └── 61cfd8c67811a57aeb5945395177db50b8b07e
    │   │   ├── bd
    │   │   │   └── 7a42eb157e71aed21d18a5f485a1a608130c83
    │   │   ├── be
    │   │   │   ├── 2d45bfd3998e57a082e7239b026c4ae550cbed
    │   │   │   └── f87c8ebbe9986f138d79626c56a319a1ae0f41
    │   │   ├── c0
    │   │   │   ├── 4cb7ba4c2b1978cb1da086a3b7abe93b33323c
    │   │   │   ├── 96473e92af3dafcd31220be7d17e1206bec24d
    │   │   │   ├── becd65da87b771601e8728299d85ac0b36e6a7
    │   │   │   └── ce79745483f490aaa1539b7a3a455f6da3c049
    │   │   ├── c1
    │   │   │   └── fab4429d85d4762d3d172a98f1914c7e0adffc
    │   │   ├── c2
    │   │   │   ├── 3c41fa692811388b2ba107bd184a307790504d
    │   │   │   ├── 9c62967f9ac71647e114f49ac28705748bbf41
    │   │   │   ├── a37656041271b12950365e8352f6d6d3d9fa30
    │   │   │   └── ff6db867bf2cc28690cda313f67384f064b6b9
    │   │   ├── c3
    │   │   │   ├── 4f61cf4644264214c49f3de679f29c4a23313b
    │   │   │   ├── abaefb284004df30fc3017c7fa7985b412405d
    │   │   │   ├── ccd4915848679df617a03dcde70ed71646de27
    │   │   │   └── d203cab23c28c118072f84354787c2ee4bcc9f
    │   │   ├── c4
    │   │   │   └── ada271b46739f1d4f91ad9d6cb2853174629b1
    │   │   ├── c5
    │   │   │   ├── 2b121cb05780e78a502e9cb7d9e8ac575e021c
    │   │   │   ├── 48af9df2c37c95fee5a9308a32711b635c8ce7
    │   │   │   ├── a1bb3abb2e057ff076fd374b3cac90539bba7a
    │   │   │   └── fd655595335b573ad40a8bcf9db8e813e06ee5
    │   │   ├── c7
    │   │   │   └── 1c549d3f3c6d4c48d601c21efbdca7d3596ead
    │   │   ├── c8
    │   │   │   ├── 3fab08521407ab9f5a4184e8753225c120dfcd
    │   │   │   ├── 8572cd2d48b759464f0989a688bcc47b8bb188
    │   │   │   └── a30729740752dd4e6ea7f71d23214570934ccc
    │   │   ├── c9
    │   │   │   ├── 1dbbb1fa9ec53c22dda20f91dce0b1a9f3d7c3
    │   │   │   ├── 23e1010cfacda1f7370dc6b747b8855b7e66b8
    │   │   │   ├── 904dabd4abc7207cb76b83c1f0da44d02950a2
    │   │   │   └── bb24035082f4401fdd1cff8e8c16d241db7dbd
    │   │   ├── cb
    │   │   │   └── c35b6826bc1e216c744ac6a485e0fa5ef7348c
    │   │   ├── cc
    │   │   │   └── 42da443919720ae8f80bbbaa4691fe5475b9bd
    │   │   ├── cd
    │   │   │   ├── 11c01f17eb90b003c542e73cb0a018c4f6c5d2
    │   │   │   ├── 7af0a7427e40f04ea19ed834a98673676d6fdd
    │   │   │   └── a6fe06419efe7fe3ef02a6ade7c0c77bab8385
    │   │   ├── ce
    │   │   │   ├── 805fee077e4543845957f181cbdc13015c8a78
    │   │   │   └── a36fc88136d9158b0b9bedb5790eefdeab2e62
    │   │   ├── cf
    │   │   │   ├── 9ac2160a7e27e6246681a5a39add6383c56c75
    │   │   │   ├── ab1dc9819ee481e5f2f02516d119fae466a243
    │   │   │   └── d4fbd66e54facad1a612129de864c93248f67e
    │   │   ├── d0
    │   │   │   ├── e1088248316aed64342b7a88ec051e8ba7856e
    │   │   │   └── f72b07537f7462967add2f810f7915189c7384
    │   │   ├── d1
    │   │   │   ├── b3af2dca6efa5d8b826796ec1df6486f341899
    │   │   │   └── b5e4ac23f105d2125682ba5b0aff217698f441
    │   │   ├── d2
    │   │   │   ├── 66b4bbdfd6b81734a514121b0cc4190a32c0b9
    │   │   │   ├── 69187b4b85e38658666ca001b7ac87b838a4d7
    │   │   │   ├── 6a64ce015967fb5c70924f803d8f08e98f7ba0
    │   │   │   └── 75f253f78510b02ac39977c8c2f48b9b633bd8
    │   │   ├── d3
    │   │   │   └── 137882b97264041e819dc5083797be0a71d1c2
    │   │   ├── d4
    │   │   │   └── 88981621336f0081df12f812d25841be51612f
    │   │   ├── d5
    │   │   │   ├── 1221af2b255560bcb313fbcc22cc43167c173f
    │   │   │   └── b824d4817d31287c1d0ba80b1ce6406db85236
    │   │   ├── d6
    │   │   │   └── 29e984895d8ff4442fe7bdce1ed4dc754730ca
    │   │   ├── d7
    │   │   │   ├── 966d1b080d08e41a1073d1833adc5d4dea8389
    │   │   │   └── a2490705f8fbd92a679295d41888d2c01658ed
    │   │   ├── d8
    │   │   │   ├── 8dfb9259de6c5c08c342649b2a72e5eb36bcf6
    │   │   │   └── f6c97e071b820d08b27d9837b9ee936a910c50
    │   │   ├── d9
    │   │   │   ├── 668fc439acacb25f05a1047708eebca8907c7f
    │   │   │   └── 82930dc978f9a987951ec621b7ee29c4d3b4af
    │   │   ├── da
    │   │   │   ├── 892f81703140bb64d6b26d49b687d212fa95d1
    │   │   │   └── bdc7ca7ae405a526e45058d77863dab8cf1329
    │   │   ├── db
    │   │   │   ├── 71dce7e620112ab121d1b34ff46d106aef99dc
    │   │   │   └── cccc92e4443936f59d54f33d034242c5017691
    │   │   ├── dc
    │   │   │   ├── 71ed29b2671924111bd8b51787728844128fc4
    │   │   │   ├── 9c76f0f99a418a805e3f18b6001402ad0f70b9
    │   │   │   └── beca44157f0a1616cb5f08a18e63c403c908f7
    │   │   ├── dd
    │   │   │   ├── 2842b5494b362eb6dec85d0641b35d8e864687
    │   │   │   ├── 91a143a47f495bf22ec66a7938d5040920394e
    │   │   │   └── b9a82f18e0283e5f58c5b54d4d2f894e5763c6
    │   │   ├── de
    │   │   │   ├── 0ca20a924addb39b4c337a8a24accb72a72589
    │   │   │   └── 44a213f2fb918c304177de6217fcd98e01084c
    │   │   ├── df
    │   │   │   └── 83cb02bf3893f485b78ec34df4ff72b6d60cb8
    │   │   ├── e0
    │   │   │   ├── 1e079dcb92989036416d813dd559020a18dca3
    │   │   │   ├── 53b860485b521ab7e4b53b3486b944b33aaa19
    │   │   │   └── ad248b0f6b7ef83b8be26f2956a3c1fbd35ee9
    │   │   ├── e1
    │   │   │   └── c25a01c0c38619225d41b84d76f9d1fa42eeb2
    │   │   ├── e3
    │   │   │   ├── 5027b64ea4707869c1730cc431d0a856f24082
    │   │   │   └── de6e118463b916453299de43bad78977dc9dd6
    │   │   ├── e4
    │   │   │   ├── 3c848bb3d3b9429c32cf89eae98302d9a34510
    │   │   │   └── 7418c7d61f29b24a8cf5a19ace1f035ebea9d1
    │   │   ├── e5
    │   │   │   ├── 12af823440549ac9908f75b1d04c9da8a48bb2
    │   │   │   ├── 4480cddb64a17efc33a44a35ee0aa007bcc760
    │   │   │   ├── 8e966e13f2e26e2ec2c80edc4c9921831e3588
    │   │   │   └── ccae553d1541d2d532fd3e73d378f6229b7715
    │   │   ├── e6
    │   │   │   └── d0a22e21dbdbc35688c4bfb6d80d79186debcd
    │   │   ├── e7
    │   │   │   └── 0c357377a97f8c9bba36112495861b17ab154e
    │   │   ├── e8
    │   │   │   ├── 8bc4af435555c98682b8b4b615802ac5760bfe
    │   │   │   └── f5922fdaae47c9777b19f17a271c88968e5b60
    │   │   ├── e9
    │   │   │   ├── c34d6dd9789a7bfbd5801058fa4d323ae192a1
    │   │   │   └── f191d77213820c45f8d2b3ad632966cfb9f34d
    │   │   ├── ea
    │   │   │   ├── 59550d1402f40457c2d14728947c4a1081656b
    │   │   │   ├── 5e161fd37660af55ee8ac79cc329dab7d30f54
    │   │   │   └── b74903db3b40be5fe448c9b677b48e12a9a6f0
    │   │   ├── eb
    │   │   │   └── 3b406b8b9caf3475fb457fd75760ce23b744c0
    │   │   ├── ec
    │   │   │   ├── a2980f05ae6995c9003024ae6a6105427ee1bf
    │   │   │   ├── a2be506b2d9524f7349506feaed7aa2395271e
    │   │   │   ├── dca9ab70cdd6b2c780f45b04d1aa06b5943413
    │   │   │   ├── e393792e7ff22bd118fb3a309c14f8cbee35c0
    │   │   │   ├── e75c0ece70e4b52d0de7fe9a558b7a1e58d28e
    │   │   │   └── ff628e3dc0d93169e3bf0a3eefd2e660b1542b
    │   │   ├── ed
    │   │   │   ├── 6953195f93af5ae4c30074e3df6252141153d6
    │   │   │   └── f56aff4da0383cf6f8a919b701ad100230b585
    │   │   ├── ee
    │   │   │   └── cac41af1a65c91990640b4eaddb1aed0578c1d
    │   │   ├── ef
    │   │   │   └── 9ed1b441235bc6c5d0478f58876def61a02ae7
    │   │   ├── f0
    │   │   │   ├── 6a043d35910d636738dfb901cbc3fddc6572a7
    │   │   │   └── 80aa7f4383494d0f0a9d3c9fd855e0e389dfa4
    │   │   ├── f1
    │   │   │   └── 3bbde0e76aeeaa203d874954d7c1a1f5ea5326
    │   │   ├── f2
    │   │   │   ├── b60c2fb1215f3e453aa699d4d0e18d3bc94926
    │   │   │   └── fbdfb361577c68ae83ad0cb412116ba09f1c11
    │   │   ├── f3
    │   │   │   ├── 202f1491affc434528d676de6108cde4adcdbe
    │   │   │   ├── 3931d878c62013784bba1493ac90b070ca7fd7
    │   │   │   ├── 65227091d3cb04273ae1ed0fe269daed9f59e7
    │   │   │   └── 657e22c074d1fdd3f6e20aefff5644d8581999
    │   │   ├── f4
    │   │   │   └── 5fce51aa2336aab029c672ac562a710a6ca098
    │   │   ├── f5
    │   │   │   ├── c4a8524ce0c63635dbdd4aec51b004716ec911
    │   │   │   └── eed9ece50b8b4955321569c8ef51f8fd45d129
    │   │   ├── f7
    │   │   │   └── 3d68126331e9a60ef8ba63213c13c4ff2ca982
    │   │   ├── f8
    │   │   │   └── 6c8de32b61dab9b7d870b2e90493edfd0d44ff
    │   │   ├── f9
    │   │   │   └── ce3ed18c493f98b27c083c23be820413b46735
    │   │   ├── fa
    │   │   │   └── 0fca0ab766b224f0efcc18724de626cfeb58a7
    │   │   ├── fb
    │   │   │   ├── 47d4b060a71d336f726b0a2d8c1092b351d4a8
    │   │   │   ├── 8f9d96f9e5008ef8f23212a365c5439e473b05
    │   │   │   └── eccd35faf73a68f21aa836c27bddaf220bb1c5
    │   │   ├── fc
    │   │   │   ├── 168b583871ae135828f7c9249506f82def9d1f
    │   │   │   ├── 7365f67e2c23536c815b3bca3492e37d3ba7ad
    │   │   │   ├── 90bacaa9b7623b849e90df5bc8322d4f5c4683
    │   │   │   └── cb3cde16aaa6624784232f432f1ef6320ee1b3
    │   │   ├── fd
    │   │   │   ├── 95791b2aa405306d84a3a59607624a5248dd7b
    │   │   │   └── f4b42cf201bb1140f5a1f69944687b46160686
    │   │   ├── ff
    │   │   │   ├── 524b03929d81b901975ecded4cc08a09886dc0
    │   │   │   ├── 54192e954caabebac6d241dd950eb23e61aa31
    │   │   │   └── 9accbe0dc12c5333dab0936ca3ab488a79148b
    │   │   ├── info
    │   │   └── pack
    │   │       ├── pack-02b158e8d7b0947d438c80ba10e36836faa39b51.idx
    │   │       ├── pack-02b158e8d7b0947d438c80ba10e36836faa39b51.pack
    │   │       └── pack-02b158e8d7b0947d438c80ba10e36836faa39b51.rev
    │   ├── packed-refs
    │   └── refs
    │       ├── heads
    │       │   └── main
    │       ├── remotes
    │       │   └── origin
    │       │       ├── HEAD
    │       │       ├── final-working
    │       │       ├── main
    │       │       └── mid-working
    │       └── tags
    ├── .github
    │   └── workflows
    │       └── static.yml
    └── data-vis
        ├── .DS_Store
        ├── .eslintrc
        ├── .vscode
        │   └── settings.json
        ├── ai-check.js
        ├── assets
        │   ├── roboto_font
        │   │   ├── Roboto-Black.ttf
        │   │   ├── Roboto-BlackItalic.ttf
        │   │   ├── Roboto-Bold.ttf
        │   │   ├── Roboto-BoldItalic.ttf
        │   │   ├── Roboto-ExtraBold.ttf
        │   │   ├── Roboto-ExtraBoldItalic.ttf
        │   │   ├── Roboto-ExtraLight.ttf
        │   │   ├── Roboto-ExtraLightItalic.ttf
        │   │   ├── Roboto-Italic.ttf
        │   │   ├── Roboto-Light.ttf
        │   │   ├── Roboto-LightItalic.ttf
        │   │   ├── Roboto-Medium.ttf
        │   │   ├── Roboto-MediumItalic.ttf
        │   │   ├── Roboto-Regular.ttf
        │   │   ├── Roboto-SemiBold.ttf
        │   │   ├── Roboto-SemiBoldItalic.ttf
        │   │   ├── Roboto-Thin.ttf
        │   │   ├── Roboto-ThinItalic.ttf
        │   │   ├── Roboto_Condensed-Black.ttf
        │   │   ├── Roboto_Condensed-BlackItalic.ttf
        │   │   ├── Roboto_Condensed-Bold.ttf
        │   │   ├── Roboto_Condensed-BoldItalic.ttf
        │   │   ├── Roboto_Condensed-ExtraBold.ttf
        │   │   ├── Roboto_Condensed-ExtraBoldItalic.ttf
        │   │   ├── Roboto_Condensed-ExtraLight.ttf
        │   │   ├── Roboto_Condensed-ExtraLightItalic.ttf
        │   │   ├── Roboto_Condensed-Italic.ttf
        │   │   ├── Roboto_Condensed-Light.ttf
        │   │   ├── Roboto_Condensed-LightItalic.ttf
        │   │   ├── Roboto_Condensed-Medium.ttf
        │   │   ├── Roboto_Condensed-MediumItalic.ttf
        │   │   ├── Roboto_Condensed-Regular.ttf
        │   │   ├── Roboto_Condensed-SemiBold.ttf
        │   │   ├── Roboto_Condensed-SemiBoldItalic.ttf
        │   │   ├── Roboto_Condensed-Thin.ttf
        │   │   ├── Roboto_Condensed-ThinItalic.ttf
        │   │   ├── Roboto_SemiCondensed-Black.ttf
        │   │   ├── Roboto_SemiCondensed-BlackItalic.ttf
        │   │   ├── Roboto_SemiCondensed-Bold.ttf
        │   │   ├── Roboto_SemiCondensed-BoldItalic.ttf
        │   │   ├── Roboto_SemiCondensed-ExtraBold.ttf
        │   │   ├── Roboto_SemiCondensed-ExtraBoldItalic.ttf
        │   │   ├── Roboto_SemiCondensed-ExtraLight.ttf
        │   │   ├── Roboto_SemiCondensed-ExtraLightItalic.ttf
        │   │   ├── Roboto_SemiCondensed-Italic.ttf
        │   │   ├── Roboto_SemiCondensed-Light.ttf
        │   │   ├── Roboto_SemiCondensed-LightItalic.ttf
        │   │   ├── Roboto_SemiCondensed-Medium.ttf
        │   │   ├── Roboto_SemiCondensed-MediumItalic.ttf
        │   │   ├── Roboto_SemiCondensed-Regular.ttf
        │   │   ├── Roboto_SemiCondensed-SemiBold.ttf
        │   │   ├── Roboto_SemiCondensed-SemiBoldItalic.ttf
        │   │   ├── Roboto_SemiCondensed-Thin.ttf
        │   │   └── Roboto_SemiCondensed-ThinItalic.ttf
        │   ├── uol_logo.png
        │   └── user_logo.png
        ├── canvas_design.js
        ├── climate-change.js
        ├── data
        │   ├── food
        │   │   ├── avg-intake-weighted-reference-nutrient-intakes - FULL.csv
        │   │   ├── avg-intake-weighted-reference-nutrient-intakes.csv
        │   │   └── uk-food-attitudes-2018.csv
        │   ├── pay-gap
        │   │   ├── all-employees-hourly-pay-by-gender-1997-2017.csv
        │   │   ├── occupation-hourly-pay-by-gender-2017.csv
        │   │   └── sources
        │   │       ├── PROV - Occupation SOC10 (2) Table 2.5a Hourly pay - Gross 2017.xls
        │   │       └── ashe19972017timeseries.xls
        │   ├── surface-temperature
        │   │   ├── source
        │   │   │   └── GLB.Ts+dSST.csv
        │   │   └── surface-temperature.csv
        │   ├── survey
        │   │   ├── ai_double_check_survey.csv
        │   │   └── ai_usage_survey.csv
        │   └── tech-diversity
        │       ├── gender-2018.csv
        │       ├── race-2018.csv
        │       └── source
        │           └── tech-diversity.xlsx
        ├── gallery.js
        ├── helper-functions.js
        ├── index.html
        ├── lib
        │   ├── p5.dom.min.js
        │   └── p5.min.js
        ├── nutrient-intakes.js
        ├── pay-gap-1997-2017.js
        ├── pay-gap-by-job-2017.js
        ├── pie-chart.js
        ├── sketch.js
        ├── style.css
        ├── tech-diversity-gender.js
        ├── tech-diversity-race.js
        └── uk-food-attitudes-2018.js
```
=======
Check the data visualization tool made fully using javascript!!

https://bbucalonserra.github.io/data-visualization-tool-js/
>>>>>>> e2a8aa68d4741873d5a4fdf82a919b76a2a3de37
