import zhlocale from 'element-ui/lib/locale/lang/en'
export default {
	...zhlocale,
	languageName: 'English',
	exit: 'Sign out',
	noAuthority: 'Unauthorized access, please contact the administrator!',
	tabbar: {
		left: 'Help',
		mine: 'Mine',
		service: 'Service',
		language: 'Language'
	},

	myMap: {
		position: 'Position Information'
	},
	functionalNavigation: 'Menu Navigation',
	copyright: '© 2017 ilyo. All Rights Reserved.',
	login: {
		title: 'Ville Road Login',
		required: {
			name: 'Please input account',
			pwd: 'Please input password'
		},
		form: {
			usernameplaceholder: "Account",
			passwordplaceholder: "Password"
		},
		rememberName: 'Remember Me',
		submit: 'Login',
		customerType: {
			business: 'Merchant',
			admin: 'Administrators'
		}
	},
	commom: {
		all:'ALL',
		mainpage: 'Home',
		add: 'Add',
		search: "Search",
		cancel: "Cancel",
		sure: "OK",
		yes: "Yes",
		no: "No",
		detail: 'Details',
		edit: 'Edit',
		delete: 'Delete',
		alertTitle: "Notice",
		phoneType:'Only support the mobile, please login by mobile',
		update: "Edit",
		loading: "Running...",
		required: "Can not be empty",
		numberType: "Please fill in the numbers",
		intType: "Please fill in integer",
		createTime: 'Create Time',
		modifyTime: 'Modification Time',
		creator: "Creator",
		modifyor: "Modifier",
		operation: 'Operation',
		zhName: 'Chinese Name',
		enName: 'English Name',
		jaName: 'Japanese Name',
		koName: 'Korean Name',

		zh: 'Chinese',
		en: 'English',
		ja: 'Japanese',
		ko: 'Korean',

		zhTitle: 'Chinese Title',
		jaTitle: 'Japanese Title',
		koTitle: 'Korean Title',
		enTitle: 'English Title',
		up: 'On Sale',
		down: 'In Stock',
		longitude: 'Longitude',
		latitude: 'Latitude',
		addr: 'Address',
		deleConfim: 'There will be delete the data permanently, Do you want to continue?',
		selectFile: 'Choose Picture',
		select: 'Please Choose',
		input: 'Please input',
		apay: "Alipay",
		wepay: 'Wechat Pay',
		status: 'Status',
		storyinfostatus: '@:commom.select @:commom.status',
		qrcode: 'Scan',
		seq: 'Rank',
	},
	shopManag: {
		searchAlert: "Please input shop name",
	},
	userManag: {
		searchAlert: "Please input user name",
	},
	commentManag: {
		searchAlert: "Please input comments",
	},
	typeManag: {
		searchAlert: "Please input type",
	},
	sysresources: {
		searchAlert: "Please input resource name",
		commom: {
			resourceNameZh: "@:commom.zhName",
			resourceNameEn: "@:commom.enName",
			resourceNameKo: "@:commom.koName",
			resourceNameJa: "@:commom.jaName",
			parentName: "Superior resources",
			icon: "Icon",
			component: "Component path",
			resType: "Resource type",
			identity: "Identity",
			permission: "Authorization identifier",
			seq: "Rank",
			isShow: "Display or Not",
			url: "URL"
		},
		addModal: {
			addResoure: "Add resource",
			updateResoure: "@:commom.edit resource",

		},
		delResources: "Do you want to delete this resource?",
	},
	appmanag: {
		bootPage: {
			seq: 'Display Order',
			pictureUrl: 'Picture',
			show: 'Enable',
			hidden: 'Not enabled',
			isShow: 'Enable or Not'
		},
		validate: {
			pictureUrl: 'Boot page image cannot be empty',
			seq: 'Please fill in integer',
		},
		usermanager: {
			search: '@:commom.input account',

			username: 'Account',
			email: 'Email',
			userimg: 'Picture',
			phone: 'Telephone',
			//表单
			realName: 'Full Name',
			gender: 'Gender',
			genderunknow: 'Secret',
			gendermale: 'Male',
			genderfemale: 'Female',
			userCode: 'User No.',
			nikeName: 'Nickname',
			passportNo: 'Passport No.',
			cfType: 'User source',

			deviceType: 'Device type',
			deviceCode: 'Device No.',
			userCountry: 'User country',
			icon: 'Picture',

			userName: 'Account',
			userPwd: 'Password',
			telPrefix: "Country Code",
			phoneform: 'Telephone',
			emailform: 'Email',

			vuserimg: '@:commom.input @:appmanag.usermanager.userimg',
			vrealName: '@:commom.input @:appmanag.usermanager.realName',
			vgender: '@:commom.input @:appmanag.usermanager.gender',
			vuserCode: '@:commom.input @:appmanag.usermanager.userCode',
			vnikeName: '@:commom.input @:appmanag.usermanager.nikeName',
			vpassportNo: '@:commom.input @:appmanag.usermanager.passportNo',
			vcfType: '@:commom.input @:appmanag.usermanager.cfType',
			vdeviceType: '@:commom.input @:appmanag.usermanager.deviceType',
			vdeviceCode: '@:commom.input @:appmanag.usermanager.deviceCode',
			vuserCountry: '@:commom.input @:appmanag.usermanager.userCountry',
			vicon: '@:commom.input @:appmanag.usermanager.icon',

			vuserName: '@:commom.input @:appmanag.usermanager.userName',
			vuserPwd: '@:commom.input @:appmanag.usermanager.userPwd',
			vtelPrefix: '@:commom.input @:appmanag.usermanager.telPrefix',
			vphoneform: '@:commom.input @:appmanag.usermanager.phoneform',
			vemailform: '@:commom.input @:appmanag.usermanager.emailform',
		}
	},
	article: {
		story: {
			search: '@:commom.input region name',

			title: 'Title',
			author: 'Author',
			classify: 'Category',
			binfoDescription: 'Story Details',
			up: 'On Sale',
			down: 'In Stock',
			areaId: 'Region',
			binfoZhCnDescription: '@:article.story.binfoDescription(@:commom.zh)',
			binfoJaJpDescription: '@:article.story.binfoDescription(@:commom.ja)',
			binfoKoKrDescription: '@:article.story.binfoDescription(@:commom.ko)',
			binfoEnUsDescription: '@:article.story.binfoDescription(@:commom.en)',

			binfoZhCnName: '@:commom.input @:commom.zhName',
			binfoKoKrName: '@:commom.input @:commom.koName',
			binfoEnUsName: '@:commom.input @:commom.enName',
			binfoJaJpName: '@:commom.input @:commom.jaName',

			storyinfoAuthor: '@:commom.input @:article.story.author',
			storyinfostatus: '@:commom.select @:commom.status',
			storyinfoarea: '@:commom.select @:article.story.areaId',

			vinfoZhCnDescription: '@:commom.input @:article.story.binfoDescription(@:commom.zh)',
			vinfoJaJpDescription: '@:commom.input @:article.story.binfoDescription(@:commom.ja)',
			vinfoKoKrDescription: '@:commom.input @:article.story.binfoDescription(@:commom.ko)',
			vinfoEnUsDescription: '@:commom.input @:article.story.binfoDescription(@:commom.en)',
		},
		cartoon: {
			binfoDescription: 'Comic details',
			binfoZhCnDescription: '@:article.cartoon.binfoDescription(@:commom.zh)',
			binfoJaJpDescription: '@:article.cartoon.binfoDescription(@:commom.ja)',
			binfoKoKrDescription: '@:article.cartoon.binfoDescription(@:commom.ko)',
			binfoEnUsDescription: '@:article.cartoon.binfoDescription(@:commom.en)',
			vinfoZhCnDescription: '@:commom.input @:article.cartoon.binfoDescription(@:commom.zh)',
			vinfoJaJpDescription: '@:commom.input @:article.cartoon.binfoDescription(@:commom.ja)',
			vinfoKoKrDescription: '@:commom.input @:article.cartoon.binfoDescription(@:commom.ko)',
			vinfoEnUsDescription: '@:commom.input @:article.cartoon.binfoDescription(@:commom.en)',
		},
		gameMission: {
			search: '@:commom.input Task Name',

			name: 'Name',
			zhinfo: 'Chinese Summary',
			eninfo: 'English Summary',
			jainfo: 'Japanese Summary',
			koinfo: 'Korean Summary',

			zhdetail: 'Chinese Details',
			endetail: 'English Details',
			jadetail: 'Japanese Details',
			kodetail: 'Korean Details',

			status1: 'Normal',
			status2: 'Pause',
			gift: 'Gifts',
			qrCode: 'QR Code',

			vZhName: '@:commom.input @:commom.zhName',
			vEnName: '@:commom.input @:commom.enName',
			vJaName: '@:commom.input @:commom.jaName',
			vKoName: '@:commom.input @:commom.koName',

			vZhInfo: '@:commom.input @:article.gameMission.zhinfo',
			vEnInfo: '@:commom.input @:article.gameMission.eninfo',
			vJaInfo: '@:commom.input @:article.gameMission.jainfo',
			vKoInfo: '@:commom.input @:article.gameMission.koinfo',

			vZhDescription: '@:commom.input @:article.gameMission.zhdetail',
			vEnDescription: '@:commom.input @:article.gameMission.endetail',
			vJaDescription: '@:commom.input @:article.gameMission.jadetail',
			vKoDescription: '@:commom.input @:article.gameMission.kodetail',

			vqrCode: '@:commom.input @:article.gameMission.qrCode',
			vgift: '@:commom.select @:article.gameMission.gift',
		},
		areaGame: {
			desc: 'Notice Information',
			zhDesc: 'Notice Information(@:commom.zh)',
			enDesc: 'Notice Information(@:commom.en)',
			jaDesc: 'Notice Information(@:commom.ja)',
			koDesc: 'Notice Information(@:commom.ko)',
			distance: 'Distance',
			act: 'Action',
			game: 'Game Name',
			type1: 'Join Button',
			type2: 'Scan Button',

			vZhDescription: '@:commom.input @:article.areaGame.zhDesc',
			vEnDescription: '@:commom.input @:article.areaGame.enDesc',
			vJaDescription: '@:commom.input @:article.areaGame.jaDesc',
			vKoDescription: '@:commom.input @:article.areaGame.koDesc',
			vdistance: '@:commom.input @:article.areaGame.distance',
			vdistance0: '@:article.areaGame.distance must greater than 0',

			vact: '@:commom.select @:article.areaGame.act',
			vgame: '@:commom.select @:article.areaGame.game',

		}

	},
	business: {
		account: {
			account: 'Settlement',
			chooseDate: 'Choose Date',
			inputSearch: 'Please input shop name',

			isVerification: 'Settlement Status',
			isVerificationFalse: 'Unsettled',
			isVerificationTrue: 'Settled',

			totalPrice: 'Total',

			name: 'Item Name',
			num: 'Item Quantity ',
			goodsuom: 'Currency',
			goodsimg: 'Item Picture',

			appUserName: 'Nickname',
			createTime: 'Order Time',
		},
		shopManag: {
			areaId: 'Area',
			ruleId: 'Points Rule',
			binfoName: 'Shop Name',
			binfoAddr: 'Shop Address',
			binfoTitle: 'Shop Title',
			type: 'Merchant Type',
			binfoIcon: 'Merchant Icon',
			shopTab: 'Merchant Information',
			userTab: 'Account',
			isShow: 'Show Or Not',
			state1:'Show',
			state2:'Hidden',
			state3:'Lock',
			binfoZhCnTitle: 'Chinese Summary',
			binfoJaJpTitle: 'Japanese Summary',
			binfoKoKrTitle: 'Korean Summary',
			binfoEnUsTitle: 'English Summary',
			binfoZhCnAddr: 'Chinese Address',
			binfoJaJpAddr: 'Japanese Address',
			binfoKoKrAddr: 'Korean Address',
			binfoEnUsAddr: 'English Address',
			binfoDescription: 'Merchant Details',
			binfoZhCnDescription: '@:business.shopManag.binfoDescription(@:commom.zh)',
			binfoJaJpDescription: '@:business.shopManag.binfoDescription(@:commom.ja)',
			binfoKoKrDescription: '@:business.shopManag.binfoDescription(@:commom.ko)',
			binfoEnUsDescription: '@:business.shopManag.binfoDescription(@:commom.en)',
		},
		paymentAccountManag: {
			isSys: 'Platform Account',
			accountType: 'Account Type',
			wechatAppid: 'WeChat appId',
			partner: 'Account Id/ merchant number',
			privateKey: 'Private Key',
			certPath: 'WeChat certificate path',
			accountName: 'Account',
		},
		validate: {
			binfoZhCnTitle: '@:commom.input @:business.shopManag.binfoZhCnTitle',
			binfoJaJpTitle: '@:commom.input @:business.shopManag.binfoJaJpTitle',
			binfoKoKrTitle: '@:commom.input @:business.shopManag.binfoKoKrTitle',
			binfoEnUsTitle: '@:commom.input @:business.shopManag.binfoEnUsTitle',
			binfoZhCnAddr: '@:commom.input @:business.shopManag.binfoZhCnAddr',
			binfoJaJpAddr: '@:commom.input @:business.shopManag.binfoJaJpAddr',
			binfoKoKrAddr: '@:commom.input @:business.shopManag.binfoKoKrAddr',
			binfoEnUsAddr: '@:commom.input @:business.shopManag.binfoEnUsAddr',
			binfoZhCnName: '@:commom.input @:commom.zhName',
			binfoKoKrName: '@:commom.input @:commom.koName',
			binfoEnUsName: '@:commom.input @:commom.enName',
			binfoJaJpName: '@:commom.input @:commom.jaName',
			binfoLongitude: '@:commom.select @:commom.longitude',
			binfoLatitude: '@:commom.select @:commom.latitude',
			typeId: '@:commom.select @:business.shopManag.type',
			typeCode: '@:commom.input @:business.typeManag.typeCode',
			buyFlag: 'Please choose pay online or not',
			shopUserName: '@:commom.input @:login.form.usernameplaceholder',
			shopUserPwd: '@:commom.input @:login.form.passwordplaceholder',
			shopUserTel: '@:commom.input @:usermanager.phone',
			shopRealName: '@:commom.input @:usermanager.realName',
			shopUserEmail: '@:commom.input @:usermanager.emailform',
			wechatAppid: '@:commom.input @:paymentAccountManag.wechatAppid',
			partner: '@:commom.input @:paymentAccountManag.partner',
			privateKey: '@:commom.input @:paymentAccountManag.privateKey',
			certPath: '@:commom.input @:paymentAccountManag.certPath',
			accountName: '@:commom.input @:paymentAccountManag.accountName',
			accountType: '@:commom.select @:paymentAccountManag.accountType',
			shopUserRoleId: '@:commom.select @:sysRole.roleName',
			areaId: '@:commom.select @:business.shopManag.areaId',
			ruleId: '@:commom.select @:business.shopManag.ruleId',
			clientSecret:'clientSecret is no more than 50 digits',
			clientId:'clientId is Integer, no more than 16 digits'

		},
		typeManag: {
			typeName: "Type Name",
			typeCode: 'Type Code',
			buyFlag: 'Online Shopping',
			typeIcon: 'Type Icon'
		},
		userManag: {
			shopUserName: '@:login.form.usernameplaceholder',
			shopUserPwd: '@:login.form.passwordplaceholder',
			shopUserTel: "Telephone",
			shopRealName: "Full Name",
			shopUserEmail: "Email",
			shopUserIcon: 'Picture',
			shopUserRoleId: 'Role'
		},
		pointrules: {
			search: '@:commom.input @:business.pointrules.ruleTitle',
			//启用，禁用
			up: 'Enable',
			down: 'Disable',
			ruleTitle: 'Rule Name',
			pointCount: 'Gift points quantity',
			pointAmount: 'Amount',

			binfoZhCnName: '@:commom.input @:business.pointrules.ruleTitle(@:commom.zh)',
			binfoKoKrName: '@:commom.input @:business.pointrules.ruleTitle(@:commom.ko)',
			binfoEnUsName: '@:commom.input @:business.pointrules.ruleTitle(@:commom.en)',
			binfoJaJpName: '@:commom.input @:business.pointrules.ruleTitle(@:commom.ja)',

			vinfopointCount: '@:commom.input @:business.pointrules.pointCount',
			vinfopointCountRange: '@:business.pointrules.pointCount between is 0 to 100',
			vinfopointAmount: '@:commom.input @:business.pointrules.pointAmount',
		},

		goodsManager: {
			search: '@:commom.input @:business.goodsManager.title',
			title: 'Item Title',
			name: 'Item Name',
			state: 'Item State',
			price: 'Item Price',
			total: 'Quantity',
			uom: 'Unit',
			ticket:'Item Type',

			goodsimg: 'Item Picture',
			discountPrice: 'Discounted Price',
			currencyUnit: 'Currency',
			state1: 'Normal',
			state2: 'Offline',

			vgoodsimg: '@:commom.input @:business.goodsManager.goodsimg',
			vprice: '@:commom.input @:business.goodsManager.price',
			vdiscountPrice: '@:commom.input @:business.goodsManager.discountPrice',
			vtotal: '@:commom.input @:business.goodsManager.total',
			vcurrencyUnit: '@:commom.select @:business.goodsManager.currencyUnit',
			vuom: '@:commom.select @:business.goodsManager.uom',

			vinfoZhCnTitle: '@:commom.input @:commom.zhTitle',
			vinfoKoKrTitle: '@:commom.input @:commom.koTitle',
			vinfoEnUsTitle: '@:commom.input @:commom.enTitle',
			vinfoJaJpTitle: '@:commom.input @:commom.jaTitle',

			vinfoZhCnName: '@:commom.input @:commom.zhName',
			vinfoKoKrName: '@:commom.input @:commom.koName',
			vinfoEnUsName: '@:commom.input @:commom.enName',
			vinfoJaJpName: '@:commom.input @:commom.jaName',
		},
		giftList: {
			search: '@:commom.input @:business.giftList.id',

			time: 'Verification Time',
			gift: 'Verification Gifts',
			checkcode: 'Verification Gifts',
			title: 'Please input gift quantity',
			ticket:'Please input the quantity',
			tip: 'Please input an integer less than two digits',
			
			id: 'User ID',
			head: 'User Picture',
			name: '@:sysUserLogin.nickname',
			gamename: '@:article.areaGame.game',
			searchAlert: '@:commom.input @:article.areaGame.game',
			giftname: 'Gift Name',
			gettime: 'Gift Time',
		},
		myOrderList: {
			search: '@:commom.input @:business.myOrderList.name',
			state: 'Order Status',
			name: 'Item Name',
			price: 'Item Price',
			num: 'Item Quantity',
			total: 'Total',
			checkcode: 'Verification Ticket',
			goodsuom: 'Currency',
			goodsimg: 'Item Picture',
			tickNum: 'Unused Ticket',
			appUserName: 'User Name',
		},
		busibanner: {
			seq: 'Rank',
			bannerimg: 'Slide',
			binfoName: "Shop Name",
			bannerType:'Change Type',
			bannerType1:'Shop',
			bannerType2:'Item', 
			vseq: '@:commom.input @:business.busibanner.seq',
			vbannerimg: '@:commom.input @:business.busibanner.bannerimg',
			vbinfoName: "@:commom.input @:business.busibanner.binfoName",
		}

	},
	sys: { //字典
		sysDictionary: {

		}
	},
	sysRole: {
		showRole: "View Roles",
		addRole: "Add Role",
		upDateRole: "Modify Role",
		roleLevel: "Role Level",
		roleName: "Role Name",
		isShow: "Display or Not",
		zhCnName: "@:commom.zhName",
		enUsName: "@:commom.enName",
		jaJpName: "@:commom.jaName",
		koKrName: "@:commom.koName",
		koKrDescription: "Korean description",
		zhCnDescription: "Chinese description",
		enUsDescription: "English description",
		jaJpDescription: "Japanese description",
		systemName: "System Name",
		roleResources: "Resource Name",
		deleteRoleAlert: "Do you want to delete this role!",
		searchPlaceHolder: "Please input role name",
		type: "Role type",
		shopType: "Shop Role",
		systemType: "System Role",
	},
	dictionaries: {
		search: {
			name: 'Search by dictionary name',
			dictType: 'Search by dictionary type'
		},
		dictType: "Dictionary type",
		dictCode: "Dictionary coding",
		isSys: 'System level',
		seq: 'Display Order',
		ext1: 'Extended information1',
		ext2: 'Extended information2',
		ext3: 'Extended information3',
		name: "Dictionary name",
		description: 'Dictionary description',
		searchAlert: '@:commom.input @:dictionaries.name',
		validate: {
			dictType: "@:commom.input @:dictionaries.dictType",
			dictCode: "@:commom.input @:dictionaries.dictCode",
			isSys: '@:commom.select @:dictionaries.isSys',
			dictZhCnName: '@:commom.input @:commom.zhName',
			dictJaJpName: '@:commom.input @:commom.jaName',
			dictKoKrName: '@:commom.input @:commom.koName',
			dictEnUsName: '@:commom.input @:commom.enName',
			dictZhCnDescription: '@:commom.input @:sysRole.zhCnDescription',
			dictJaJpDescription: '@:commom.input @:sysRole.jaJpDescription',
			dictKoKrDescription: '@:commom.input @:sysRole.koKrDescription',
			dictEnUsDescription: '@:commom.input @:sysRole.enUsDescription',

		}
	},

	sysUserLogin: {
		userName: "Account",
		passWord: "Password",
		realName: "Full Name",
		nickName: "Nickname",
		phone: "Telephone",
		email: "Email",
		sex: "Gender",
		headImg: "Picture",
		resetPws: "Reset password",
		deleConfim: 'Reset password, continue?',
		vuserName: '@:commom.input @:sysUserLogin.userName',
		vpassWord: '@:commom.input @:sysUserLogin.passWord',
		vpassWordsecond: 'Please input password again',
		vpassWordNotSame: 'Two passwords are inconsistent!',
		vpassWordLength: 'Password length at least eight',
		vroleName: '@:commom.select role name',

		newpassword: 'Your new password：',

	},
	mapArea: {
		areaName: "Region name",
		areaCode: "Region coding",
		pointX1: "Top-left longitude",
		pointY1: "Top-left latitude",
		pointX2: "Lower-right longitude",
		pointY2: "Lower-right latitude",
		centLongitude: "Stone longitude",
		centLatitude: "Stone latitude",
		centIcon: "Stone Icon",
		stoneZhCnName:"Stone Name(@:commom.zh)", 
		stoneJaJpName:"Stone Name(@:commom.ja)", 
		stoneKoKrName:"Stone Name(@:commom.ko)", 
		stoneEnUsName:"Stone Name(@:commom.en)", 
		stoneName:"Stone Name", 
		searchAlert: '@:commom.input @:mapArea.areaName',
		validate: {
			areaName: '@:commom.input @:mapArea.areaName',
			areaCode: '@:commom.input @:mapArea.areaCode',
			pointX1: '@:commom.select @:mapArea.pointX1 ',
			pointY1: '@:commom.select @:mapArea.pointY1',
			pointX2: '@:commom.select @:mapArea.pointX2',
			pointY2: '@:commom.select @:mapArea.pointY2',
			centLongitude: '@:commom.select @:mapArea.centLongitude',
			centLatitude: '@:commom.select @:mapArea.centLatitude',
			stoneZhCnName:'@:commom.input@:mapArea.stoneZhCnName',
			stoneJaJpName:'@:commom.input@:mapArea.stoneJaJpName',
			stoneKoKrName:'@:commom.input@:mapArea.stoneKoKrName',
			stoneEnUsName:'@:commom.input@:mapArea.stoneEnUsName',
		}
	},

	gamePrizes: {
		giftName: 'Gift Name',
		giftEnUsName: 'Prize Name(@:commom.en)',
		giftJaJpName: 'Prize Name(@:commom.ja)',
		giftKoKrName: 'Prize Name(@:commom.ko)',
		giftZhCnName: 'Prize Name(@:commom.zh)',
		giftCount: 'Quantity',
		giftPrice: 'Price',
		giftStatus: 'State',
		giftIcon: 'Picture',
		searchAlert: '@:commom.input @:gamePrizes.giftName',
		validate: {
			giftEnUsName: '@:commom.input @:gamePrizes.giftEnUsName',
			giftJaJpName: '@:commom.input @:gamePrizes.giftJaJpName',
			giftKoKrName: '@:commom.input @:gamePrizes.giftKoKrName ',
			giftZhCnName: '@:commom.input @:gamePrizes.giftZhCnName',
			giftCount: '@:commom.input @:gamePrizes.giftCount',
			giftStatus: '@:commom.input @:gamePrizes.giftStatus',
		}

	},
	company: {
		companyZhCnName: 'Company name(@:commom.zh)',
		companyJpJaName: 'Company name(@:commom.ja)',
		companyEnUsName: 'Company name(@:commom.en)',
		companyKoKrName: 'Company name(@:commom.ko)',
		addressZhCn: 'Company address (@:commom.zh)',
		addressJpJa: 'Company address (@:commom.ja)',
		addressEnUs: 'Company address (@:commom.en)',
		addressKoKr: 'Company address (@:commom.ko)',
		phone: 'Telephone',
		email: 'Email',
		fax: 'Fax',
		station: 'Site ID',
		address: 'Company address',
		companyName: 'Company name',
		validate: {
			companyZhCnName: '@:commom.input @:company.companyZhCnName',
			companyJpJaName: '@:commom.input @:company.companyJpJaName',
			companyEnUsName: '@:commom.input @:company.companyEnUsName',
			companyKoKrName: '@:commom.input @:company.companyKoKrName',
			addressZhCn: '@:commom.input @:company.addressZhCn',
			addressJpJa: '@:commom.input @:company.addressJpJa',
			addressEnUs: '@:commom.input @:company.addressEnUs',
			addressKoKr: '@:commom.input @:company.addressKoKr',
			phone: '@:commom.input @:company.phone',
			email: '@:commom.input @:company.email',
			fax: '@:commom.input @:company.fax',
		}
	},
	msgTemplate: {
		sendType: 'Send Type',
		noticeType: 'Notice Type',
		sendType: 'Send Type',
		noticeType: 'Notice Type',
		sendType1: 'Push',
		sendType2: 'SMS',
		sendType3: 'Email',
		noticeType1: 'ALL',
		noticeType2: 'User Group',
		noticeType3: 'Person',
		templateCode:'Template Code',
		templateType: 'Template Type',
		templateVars: 'Variable List',
		templateContent: 'Template Content',
		messageTitle: 'Notice Title',

		tempZh: '@:msgTemplate.templateContent(@:commom.zh)',
		tempKo: '@:msgTemplate.templateContent(@:commom.ko)',
		tempEn: '@:msgTemplate.templateContent(@:commom.en)',
		tempJa: '@:msgTemplate.templateContent(@:commom.ja)',

		titleZh: '@:msgTemplate.messageTitle(@:commom.zh)',
		titleKo: '@:msgTemplate.messageTitle(@:commom.ko)',
		titleEn: '@:msgTemplate.messageTitle(@:commom.en)',
		titleJa: '@:msgTemplate.messageTitle(@:commom.ja)',

		vtemplateVars: '@:commom.input @:msgTemplate.templateVars',
		vnoticeType: '@:commom.select @:msgTemplate.noticeType',
		vsendType: '@:commom.select @:msgTemplate.sendType',
		vtemplateCode: '@:commom.select @:msgTemplate.templateType',

		vtemp: '@:commom.input @:msgTemplate.messageTitle',
		vtempZh: '@:commom.input @:msgTemplate.tempZh',
		vtempKo: '@:commom.input @:msgTemplate.tempKo',
		vtempEn: '@:commom.input @:msgTemplate.tempEn',
		vtempJa: '@:commom.input @:msgTemplate.tempJa',

		vtitleZh: '@:commom.input @:msgTemplate.titleZh',
		vtitleKo: '@:commom.input @:msgTemplate.titleKo',
		vtitleEn: '@:commom.input @:msgTemplate.titleEn',
		vtitleJa: '@:commom.input @:msgTemplate.titleJa',
	},

	sysMessage: {
		detail: 'Detail',
		title: 'Message Title',
		summary: 'Summary',
		searchtitle: '@:commom.input @:sysMessage.title',

		summaryZh: '@:sysMessage.summary(@:commom.zh)',
		summaryKo: '@:sysMessage.summary(@:commom.ko)',
		summaryEn: '@:sysMessage.summary(@:commom.en)',
		summaryJa: '@:sysMessage.summary(@:commom.ja)',

		titleZh: '@:sysMessage.title(@:commom.zh)',
		titleKo: '@:sysMessage.title(@:commom.ko)',
		titleEn: '@:sysMessage.title(@:commom.en)',
		titleJa: '@:sysMessage.title(@:commom.ja)',

		detailZh: '@:sysMessage.detail(@:commom.zh)',
		detailKo: '@:sysMessage.detail(@:commom.ko)',
		detailEn: '@:sysMessage.detail(@:commom.en)',
		detailJa: '@:sysMessage.detail(@:commom.ja)',

		vsummaryZh: '@:commom.input@:sysMessage.summary(@:commom.zh)',
		vsummaryKo: '@:commom.input@:sysMessage.summary(@:commom.ko)',
		vsummaryEn: '@:commom.input@:sysMessage.summary(@:commom.en)',
		vsummaryJa: '@:commom.input@:sysMessage.summary(@:commom.ja)',

		vtitleZh: '@:commom.input@:sysMessage.title(@:commom.zh)',
		vtitleKo: '@:commom.input@:sysMessage.title(@:commom.ko)',
		vtitleEn: '@:commom.input@:sysMessage.title(@:commom.en)',
		vtitleJa: '@:commom.input@:sysMessage.title(@:commom.ja)',

		vdetailZh: '@:commom.input@:sysMessage.detail(@:commom.zh)',
		vdetailKo: '@:commom.input@:sysMessage.detail(@:commom.ko)',
		vdetailEn: '@:commom.input@:sysMessage.detail(@:commom.en)',
		vdetailJa: '@:commom.input@:sysMessage.detail(@:commom.ja)',
	},
	msgDetail: {
		msgTitle: '@:sysMessage.title',
		msgContent: 'Message Content',
		infotime: 'Notice Time',

		msgtype: 'Message Type',
		msgtype1: 'System Notice',
		msgtype2: 'Message',
		msgtype3: 'SMS',

		searchAlert: '@:commom.input @:msgDetail.msgTitle',
		titleZh: '@:msgDetail.msgTitle(@:commom.zh)',
		titleKo: '@:msgDetail.msgTitle(@:commom.ko)',
		titleEn: '@:msgDetail.msgTitle(@:commom.en)',
		titleJa: '@:msgDetail.msgTitle(@:commom.ja)',

		detailZh: '@:msgDetail.msgContent(@:commom.zh)',
		detailKo: '@:msgDetail.msgContent(@:commom.ko)',
		detailEn: '@:msgDetail.msgContent(@:commom.en)',
		detailJa: '@:msgDetail.msgContent(@:commom.ja)',

	},
	service:{
		noUser:'No User',
		over:'Close this conversation',
		sendMsg:'Send',
		userList:'User Waitting List',
		active:'Current User'
	},
	user: {
		online: 'Online'
	},
	loadingText: 'Loading...'
}