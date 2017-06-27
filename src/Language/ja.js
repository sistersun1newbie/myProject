import zhlocale from 'element-ui/lib/locale/lang/ja'
export default {
	...zhlocale,
	languageName: '日本語',
	exit: 'サインアウト',
	noAuthority: '不正アクセスには、管理者に連絡してください！',
	tabbar: {
		left: 'ヘルプ',
		mine: 'メンバーセンター',
		service: 'ヘルプ',
		language: '言語'
	},

	myMap: {
		position: '位置情報'
	},
	functionalNavigation: 'メニューナビゲーション',
	copyright: '© 2017 ilyo. All Rights Reserved.',
	login: {
		title: 'Ville Road ログイン',
		required: {
			name: 'ユーザー名を入力して下さい',
			pwd: 'パスワードを入力して下さい'
		},
		form: {
			usernameplaceholder: "アカウント名",
			passwordplaceholder: "パスワード"
		},
		rememberName: '口座を覚える',
		submit: '登録',
		customerType: {
			business: '商家',
			admin: '司書'
		}
	},
	commom: {
		all:'ALL',
		mainpage: 'ホームページ',
		add: '足を付ける',
		search: "検索",
		cancel: "キャンセル",
		sure: "確定",
		yes: "は",
		no: "否",
		detail: '詳細',
		edit: '編集',
		delete: '削除',
		alertTitle: "ヒント",
		phoneType:'此功能只支持手机端，请手机版登录',
		update: "編集",
		loading: "執行中...",
		required: "该字段不能为空",
		numberType: "そのフィールドは数字を埋めるべきだ",
		intType: "当該フィールドは整数を記入すべきだ",
		createTime: '創建時間',
		modifyTime: '修正時間',
		creator: "作成者",
		modifyor: "改正人",
		operation: 'をする',
		zhName: '中国語名',
		enName: '英語名',
		jaName: '日本語名',
		koName: '韓国語名',

		zh: '中国語',
		en: '英語',
		ja: '日本語',
		ko: '韓国語',
		
		zhTitle: '中国のタイトル',
		jaTitle: '日本語タイトル',
		koTitle: '韓国のタイトル',
		enTitle: 'イギリスのタイトル',
		up: '販売について',
		down: '在庫',
		longitude: '経度',
		latitude: '緯度',
		addr: 'アドレス',
		deleConfim: '永久にデータの削除があります、続けることを望みますか？',
		selectFile: '画像を選択',
		select: 'を選択してください',
		input: 'を入力してください',
		apay: "alipay",
		wepay: 'wechat賃金',
		status: '状態',
		storyinfostatus: '@:commom.select@:commom.status',
		seqcode: 'スキャン',
		seq: 'ランク',
	},
	shopManag: {
		searchAlert: "お店の名前を入力してください",
	},
	userManag: {
		searchAlert: "ユーザー名を入力してください",
	},
	commentManag: {
		searchAlert: "コメント入力してください",
	},
	typeManag: {
		searchAlert: "入力をタイプしてください",
	},
	sysresources: {
		searchAlert: "入力したリソースの名前をしてください",
		commom: {
			resourceNameZh: "@:commom.zhName",
			resourceNameEn: "@:commom.enName",
			resourceNameKo: "@:commom.koName",
			resourceNameJa: "@:commom.jaName",
			parentName: "優れた資源",
			icon: "アイコン",
			component: "コンポーネントのパス",
			resType: "リソースタイプ",
			identity: "システムの指定",
			permission: "認可識別子",
			seq: "オーダー",
			isShow: "表示しないか",
			url: "リソースリンク"
		},
		addModal: {
			addResoure: "リソースの追加",
			updateResoure: "@:commom.edit資源",

		},
		delResources: "このリソースを削除したいのですか？",
	},
	appmanag: {
		bootPage: {
			seq: '表示順',
			pictureUrl: '絵',
			show: 'イネーブル',
			hidden: '可能にされていない',
			isShow: 'を有効にするか'
		},
		validate: {
			pictureUrl: 'ブーツのページの画像は空にできません',
			seq: '整数に記入してください',
		},
		usermanager: {
			search: '@:commom.inputアカウント',

			username: 'アカウント名',
			email: 'メールボックス',
			userimg: 'ユーザーのアバター',
			phone: '携帯電話番号',
			//表单
			realName: '本当の名前',
			gender: 'ジェンダー',
			genderunknow: '不明',
			gendermale: '男性',
			genderfemale: '女性',
			userCode: 'ユーザー数',
			nikeName: '愛称',
			passportNo: 'パスポートでない',
			cfType: 'ユーザー・ソース',

			deviceType: '装置のタイプ',
			deviceCode: 'デバイス番号',
			userCountry: 'ユーザーの国',
			icon: 'ユーザーのアバター',

			userName: 'アカウント名',
			userPwd: 'ユーザーのパスワード',
			telPrefix: "電話国番号",
			phoneform: 'ユーザーの電話番号',
			emailform: '電子メール',

			vuserimg: '@:commom.input@:appmanag.usermanager.userimg',
			vrealName: '@:commom.input@:appmanag.usermanager.realName',
			vgender: '@:commom.input@:appmanag.usermanager.gender',
			vuserCode: '@:commom.input@:appmanag.usermanager.userCode',
			vnikeName: '@:commom.input@:appmanag.usermanager.nikeName',
			vpassportNo: '@:commom.input@:appmanag.usermanager.passportNo',
			vcfType: '@:commom.input@:appmanag.usermanager.cfType',
			vdeviceType: '@:commom.input@:appmanag.usermanager.deviceType',
			vdeviceCode: '@:commom.input@:appmanag.usermanager.deviceCode',
			vuserCountry: '@:commom.input@:appmanag.usermanager.userCountry',
			vicon: '@:commom.input@:appmanag.usermanager.icon',

			vuserName: '@:commom.input@:appmanag.usermanager.userName',
			vuserPwd: '@:commom.input@:appmanag.usermanager.userPwd',
			vtelPrefix: '@:commom.input@:appmanag.usermanager.telPrefix',
			vphoneform: '@:commom.input@:appmanag.usermanager.phoneform',
			vemailform: '@:commom.input@:appmanag.usermanager.emailform',
		}
	},
	article: {
		story: {
			search: '@:commom.input領域',

			title: 'タイトル',
			author: '著者',
			classify: 'カテゴリー名',
			binfoDescription: '物語の詳細',
			up: '棚',
			down: '既製品',
			areaId: '領域',
			binfoZhCnDescription: '@:article.story.binfoDescription(@:commom.zh)',
			binfoJaJpDescription: '@:article.story.binfoDescription(@:commom.ja)',
			binfoKoKrDescription: '@:article.story.binfoDescription(@:commom.ko)',
			binfoEnUsDescription: '@:article.story.binfoDescription(@:commom.en)',

			binfoZhCnName: '@:commom.input@:commom.zhName',
			binfoKoKrName: '@:commom.input@:commom.koName',
			binfoEnUsName: '@:commom.input@:commom.enName',
			binfoJaJpName: '@:commom.input@:commom.jaName',

			storyinfoAuthor: '@:commom.input@:article.story.author',
			storyinfostatus: '@:commom.select@:commom.status',
			storyinfoarea: '@:commom.select@:article.story.areaId',

			vinfoZhCnDescription: '@:commom.input@:article.story.binfoDescription(@:commom.zh)',
			vinfoJaJpDescription: '@:commom.input@:article.story.binfoDescription(@:commom.ja)',
			vinfoKoKrDescription: '@:commom.input@:article.story.binfoDescription(@:commom.ko)',
			vinfoEnUsDescription: '@:commom.input@:article.story.binfoDescription(@:commom.en)',
		},
		cartoon: {
			binfoDescription: 'コミックの詳細',
			binfoZhCnDescription: '@:article.cartoon.binfoDescription(@:commom.zh)',
			binfoJaJpDescription: '@:article.cartoon.binfoDescription(@:commom.ja)',
			binfoKoKrDescription: '@:article.cartoon.binfoDescription(@:commom.ko)',
			binfoEnUsDescription: '@:article.cartoon.binfoDescription(@:commom.en)',
			vinfoZhCnDescription: '@:commom.input@:article.cartoon.binfoDescription(@:commom.zh)',
			vinfoJaJpDescription: '@:commom.input@:article.cartoon.binfoDescription(@:commom.ja)',
			vinfoKoKrDescription: '@:commom.input@:article.cartoon.binfoDescription(@:commom.ko)',
			vinfoEnUsDescription: '@:commom.input@:article.cartoon.binfoDescription(@:commom.en)',
		},
		gameMission: {
			search: '@:commom.inputゲームタスク',

			name: '名称',
			zhinfo: '中国語の概要',
			eninfo: '英語の概要',
			jainfo: '日本語の概要',
			koinfo: '韓国語の概要',

			zhdetail: '中国語の詳しい事情',
			endetail: '英語の詳しい事情',
			jadetail: '日本語の詳しい事情',
			kodetail: '韓国語の詳しい事情',

			status1: '通常',
			status2: 'ポーズ',
			gift: 'ギフト',
			qrCode: '二次元コード',

			vZhName: '@:commom.input@:commom.zhName',
			vEnName: '@:commom.input@:commom.enName',
			vJaName: '@:commom.input@:commom.jaName',
			vKoName: '@:commom.input@:commom.koName',

			vZhInfo: '@:commom.input@:article.gameMission.zhinfo',
			vEnInfo: '@:commom.input@:article.gameMission.eninfo',
			vJaInfo: '@:commom.input@:article.gameMission.jainfo',
			vKoInfo: '@:commom.input@:article.gameMission.koinfo',

			vZhDescription: '@:commom.input@:article.gameMission.zhdetail',
			vEnDescription: '@:commom.input@:article.gameMission.endetail',
			vJaDescription: '@:commom.input@:article.gameMission.jadetail',
			vKoDescription: '@:commom.input@:article.gameMission.kodetail',

			vqrCode: '@:commom.input@:article.gameMission.qrCode',
			vgift: '@:commom.select@:article.gameMission.gift',
		},
		areaGame: {
			desc: '通知の内容',
			zhDesc: '通知の内容(@:commom.zh)',
			enDesc: '通知の内容(@:commom.en)',
			jaDesc: '通知の内容(@:commom.ja)',
			koDesc: '通知の内容(@:commom.ko)',
			distance: '距離',
			act: 'アクション',
			game: 'ゲームの名称',
			type1: '参加ボタン',
			type2: 'スキャンボタン',

			vZhDescription: '@:commom.input@:article.areaGame.zhDesc',
			vEnDescription: '@:commom.input@:article.areaGame.enDesc',
			vJaDescription: '@:commom.input@:article.areaGame.jaDesc',
			vKoDescription: '@:commom.input@:article.areaGame.koDesc',
			vdistance: '@:commom.input@:article.areaGame.distance',
			vdistance0: '@:article.areaGame.distance より大きい 0',

			vact: '@:commom.select@:article.areaGame.act',
			vgame: '@:commom.select@:article.areaGame.game',

		}

	},
	business: {
		account: {
			account: '決済',
			chooseDate: '選択日',
			inputSearch: '店舗名を入力して下さい',

			isVerification: '決済状態',
			isVerificationFalse: '未決済',
			isVerificationTrue: '決済済み',

			totalPrice: '総計',

			name: '製品名',
			num: '製品量',
			goodsuom: '通貨',
			goodsimg: '製品画像',

			appUserName: 'ニックネーム',
			createTime: '受注時間',
		},
		shopManag: {
			areaId: '位置登録エリア',
			ruleId: '積分則',
			binfoName: 'ショップ名',
			binfoAddr: '店の住所',
			binfoTitle: 'ショップのタイトル',
			type: '商人のタイプ',
			binfoIcon: '商人のアイコン',
			shopTab: '商人の情報',
			userTab: 'アカウント情報',
			isShow: '是否显示',
			state1:'显示',
			state2:'隐藏',
			state3:'锁定',
			binfoZhCnTitle: '中国の簡介',
			binfoJaJpTitle: '日本語簡介',
			binfoKoKrTitle: '韓国の簡介',
			binfoEnUsTitle: 'イギリスの簡介',
			binfoZhCnAddr: '中国のアドレス',
			binfoJaJpAddr: '日本の住所',
			binfoKoKrAddr: '韓国のアドレス',
			binfoEnUsAddr: 'イングリッシュ・アドレス',
			binfoDescription: '商人の詳細',
			binfoZhCnDescription: '@:business.shopManag.binfoDescription(@:commom.zh)',
			binfoJaJpDescription: '@:business.shopManag.binfoDescription(@:commom.ja)',
			binfoKoKrDescription: '@:business.shopManag.binfoDescription(@:commom.ko)',
			binfoEnUsDescription: '@:business.shopManag.binfoDescription(@:commom.en)',
		},
		paymentAccountManag: {
			isSys: 'プラットフォームのアカウント',
			accountType: 'アカウントの種類',
			wechatAppid: 'wechatappId',
			partner: '商人アカウントid番号',
			privateKey: '秘密鍵',
			certPath: 'wechat証明書経路',
			accountName: 'アカウント名',
		},
		validate: {
			binfoZhCnTitle: '@:commom.input@:business.shopManag.binfoZhCnTitle',
			binfoJaJpTitle: '@:commom.input@:business.shopManag.binfoJaJpTitle',
			binfoKoKrTitle: '@:commom.input@:business.shopManag.binfoKoKrTitle',
			binfoEnUsTitle: '@:commom.input@:business.shopManag.binfoEnUsTitle',
			binfoZhCnAddr: '@:commom.input@:business.shopManag.binfoZhCnAddr',
			binfoJaJpAddr: '@:commom.input@:business.shopManag.binfoJaJpAddr',
			binfoKoKrAddr: '@:commom.input@:business.shopManag.binfoKoKrAddr',
			binfoEnUsAddr: '@:commom.input@:business.shopManag.binfoEnUsAddr',
			binfoZhCnName: '@:commom.input@:commom.zhName',
			binfoKoKrName: '@:commom.input@:commom.koName',
			binfoEnUsName: '@:commom.input@:commom.enName',
			binfoJaJpName: '@:commom.input@:commom.jaName',
			binfoLongitude: '@:commom.select@:commom.longitude',
			binfoLatitude: '@:commom.select@:commom.latitude',
			typeId: '@:commom.select@:business.shopManag.type',
			typeCode: '@:commom.input@:business.typeManag.typeCode',
			buyFlag: '@:commom.select オンライン支払いを支持するかどうか',
			shopUserName: '@:commom.input@:login.form.usernameplaceholder',
			shopUserPwd: '@:commom.input@:login.form.passwordplaceholder',
			shopUserTel: '@:commom.input電話番号',
			shopRealName: '@:commom.input真実名前',
			shopUserEmail: '正しいメール入力を入力して下さい',
			wechatAppid: '@:commom.input Wechat appId',
			partner: '@:commom.input アカウント Id/商家番号',
			privateKey: '@:commom.input私钥',
			certPath: '@:commom.input Wechat 証明書の経路',
			accountName: '@:commom.input アカウント名',
			accountType: '@:commom.select アカウントタイプ',
			shopUserRoleId: '@:commom.select キャラクタータイプ',
			areaId: '@:commom.select@:business.shopManag.areaId',
			ruleId: '@:commom.select@:business.shopManag.ruleId',
			clientSecret:'clientSecret最长50位',
			clientId:'clientId必须是不能大于16位的整数'

		},
		typeManag: {
			typeName: "タイプ名",
			typeCode: 'タイプ符号化',
			buyFlag: 'オンラインで購入',
			typeIcon: 'タイプ・アイコン'
		},
		userManag: {
			shopUserName: '@:login.form.usernameplaceholder',
			shopUserPwd: '@:login.form.passwordplaceholder',
			shopUserTel: "電話",
			shopRealName: "フルネーム",
			shopUserEmail: "メールボックス",
			shopUserIcon: 'の頭の肖像画',
			shopUserRoleId: '役割'
		},
		pointrules: {
			search: '@:commom.input@:business.pointrules.ruleTitle',
			//启用，禁用
			up: 'イネーブル',
			down: 'を無効にする',
			ruleTitle: 'ルールの名前',
			pointCount: '贈り物の数',
			pointAmount: '消費量',

			binfoZhCnName: '@:commom.input@:business.pointrules.ruleTitle(@:commom.zh)',
			binfoKoKrName: '@:commom.input@:business.pointrules.ruleTitle(@:commom.ko)',
			binfoEnUsName: '@:commom.input@:business.pointrules.ruleTitle(@:commom.en)',
			binfoJaJpName: '@:commom.input@:business.pointrules.ruleTitle(@:commom.ja)',

			vinfopointCount: '@:commom.input@:business.pointrules.pointCount',
			vinfopointCountRange: '@:business.pointrules.pointCount的范围必须0到100',
			vinfopointAmount: '@:commom.input@:business.pointrules.pointAmount',
		},

		goodsManager: {
			search: '@:commom.input@:business.goodsManager.title',
			title: '標題',
			name: '製品名',
			state: '状態',
			price: '価格',
			total: '商品の数',
			uom: '単位',
			ticket:'商品タイプ',

			goodsimg: '画像',
			discountPrice: '割引価格',
			currencyUnit: '通貨',
			state1: '通常',
			state2: '下線',

			vgoodsimg: '@:commom.input@:business.goodsManager.goodsimg',
			vprice: '@:commom.input@:business.goodsManager.price',
			vdiscountPrice: '@:commom.input@:business.goodsManager.discountPrice',
			vtotal: '@:commom.input@:business.goodsManager.total',
			vcurrencyUnit: '@:commom.select@:business.goodsManager.currencyUnit',
			vuom: '@:commom.select@:business.goodsManager.uom',

			vinfoZhCnTitle: '@:commom.input@:commom.zhTitle',
			vinfoKoKrTitle: '@:commom.input@:commom.koTitle',
			vinfoEnUsTitle: '@:commom.input@:commom.enTitle',
			vinfoJaJpTitle: '@:commom.input@:commom.jaTitle',

			vinfoZhCnName: '@:commom.input@:commom.zhName',
			vinfoKoKrName: '@:commom.input@:commom.koName',
			vinfoEnUsName: '@:commom.input@:commom.enName',
			vinfoJaJpName: '@:commom.input@:commom.jaName',
		},
		giftList: {
			search: '@:commom.input@:business.giftList.id',
			
			time: '帳消し時間',
			gift: '帳消しプレゼント',
			checkcode: '帳消しプレゼント',
			title: 'プレゼントの数量を入力してください',	
			ticket:'请输入兑换数量',
			tip: '请输入两位以内的数字',
					
			id: 'ユーザーID',
			head: '画像',
			name: '@:sysUserLogin.nickname',
			gamename: '@:article.areaGame.game',
			searchAlert: '@:commom.input @:article.areaGame.game',
			giftname: '礼物名称',
			gettime: '领取时间',
		},
		myOrderList: {
			search: '@:commom.input@:business.myOrderList.name',
			state: '受注状態',
			name: '製品名',
			price: '価格',
			num: '商品の数',
			total: '総額',
			checkcode: '帳消し手形',
			goodsuom: '通貨',
			goodsimg: '製品画像',
			tickNum: '未使用の切符',
			appUserName: 'ユーザー名',
		},
		busibanner: {
			seq: '表示順',
			bannerimg: '画像',
			binfoName: "店舗名",
			bannerType:'轮播类型',
			bannerType1:'店铺',
			bannerType2:'商品', 

			vseq: '@:commom.input@:business.busibanner.seq',
			vbannerimg: '@:commom.input@:business.busibanner.bannerimg',
			vbinfoName: "@:commom.input@:business.busibanner.binfoName",
		}

	},
	sys: { //字典
		sysDictionary: {

		}
	},
	sysRole: {
		showRole: "図の役割",
		addRole: "役割の追加",
		upDateRole: "役割を変更する",
		roleLevel: "役割階層",
		roleName: "役割名",
		isShow: "表示しないか",
		zhCnName: "@:commom.zhName",
		enUsName: "@:commom.enName",
		jaJpName: "@:commom.jaName",
		koKrName: "@:commom.koName",
		koKrDescription: "韓国語の記述",
		zhCnDescription: "中国語の記述",
		enUsDescription: "英語の説明",
		jaJpDescription: "日本語の説明",
		systemName: "システム名",
		roleResources: "リソース名",
		deleteRoleAlert: "この役割を削除したいのですか!",
		searchPlaceHolder: "文字の名前を入力してください",
		type: "キャラクタータイプ",
		shopType: "商家役割",
		systemType: "システムキャラクター",
	},
	dictionaries: {
		search: {
			name: '辞書名による検索',
			dictType: '辞書式検索'
		},
		dictType: "辞書型",
		dictCode: "辞書符号化",
		isSys: 'システムレベル',
		seq: '表示順',
		ext1: '拡張情報1',
		ext2: '拡張情報2',
		ext3: '拡張情報3',
		name: "辞書名",
		description: '辞書の記述',
		searchAlert: '@:commom.input@:dictionaries.name',
		validate: {
			dictType: "@:commom.input@:dictionaries.dictType",
			dictCode: "@:commom.input@:dictionaries.dictCode",
			isSys: '@:commom.select@:dictionaries.isSys',
			dictZhCnName: '@:commom.input@:commom.zhName',
			dictJaJpName: '@:commom.input@:commom.jaName',
			dictKoKrName: '@:commom.input@:commom.koName',
			dictEnUsName: '@:commom.input@:commom.enName',
			dictZhCnDescription: '@:commom.input@:sysRole.zhCnDescription',
			dictJaJpDescription: '@:commom.input@:sysRole.jaJpDescription',
			dictKoKrDescription: '@:commom.input@:sysRole.koKrDescription',
			dictEnUsDescription: '@:commom.input@:sysRole.enUsDescription',

		}
	},

	sysUserLogin: {
		userName: "ユーザー名",
		passWord: "パスワード",
		realName: "真実名前",
		nickName: "ニックネーム",
		phone: "電話",
		email: "電子メール",
		sex: "性别",
		headImg: "アバター",
		resetPws: "パスワードリセット",
		deleConfim: 'パスワードをリセットして、継続するかどうか？',
		vuserName: '@:commom.input@:sysUserLogin.userName',
		vpassWord: '@:commom.input@:sysUserLogin.passWord',
		vpassWordsecond: '再入力パスワードを再入力して下さい',
		vpassWordNotSame: '2次入力のパスワードは不一緻!',
		vpassWordLength: 'パスワードの長さは少なくとも八人',
		vroleName: '@:commom.select キャラクター名',

		newpassword: 'あなたの新しいパスワードは：',

	},
	mapArea: {
		areaName: "エリア名",
		areaCode: "エリアコード化",
		pointX1: "左上角経度",
		pointY1: "左上角緯度",
		pointX2: "右下角経度",
		pointY2: "右下角緯度",
		centLongitude: "石の経度",
		centLatitude: "石の緯度",
		centIcon: "石のアイコン",
		
		stoneZhCnName:"童子石名称(@:commom.zh)", 
		stoneJaJpName:"童子石名称(@:commom.ja)", 
		stoneKoKrName:"童子石名称(@:commom.ko)", 
		stoneEnUsName:"童子石名称(@:commom.en)", 
		stoneName:"童子石名称", 
		searchAlert: '@:commom.input@:mapArea.areaName',
		validate: {
			areaName: '@:commom.input@:mapArea.areaName',
			areaCode: '@:commom.input@:mapArea.areaCode',
			pointX1: '@:commom.select@:mapArea.pointX1 ',
			pointY1: '@:commom.select@:mapArea.pointY1',
			pointX2: '@:commom.select@:mapArea.pointX2',
			pointY2: '@:commom.select@:mapArea.pointY2',
			centLongitude: '@:commom.select@:mapArea.centLongitude',
			centLatitude: '@:commom.select@:mapArea.centLatitude',
			stoneZhCnName:'@:commom.input@:mapArea.stoneZhCnName',
			stoneJaJpName:'@:commom.input@:mapArea.stoneJaJpName',
			stoneKoKrName:'@:commom.input@:mapArea.stoneKoKrName',
			stoneEnUsName:'@:commom.input@:mapArea.stoneEnUsName',
		}
	},

	gamePrizes: {
		giftName: '奖品名称',
		giftEnUsName: '賞品の名称(@:commom.en)',
		giftJaJpName: '賞品の名称(@:commom.ja)',
		giftKoKrName: '賞品の名称(@:commom.ko)',
		giftZhCnName: '賞品の名称(@:commom.zh)',
		giftCount: '数',
		giftPrice: '価格',
		giftStatus: '状態',

		giftIcon: '賞品のピクチャー',
		searchAlert: '@:commom.input @:gamePrizes.giftName',
		validate: {
			giftEnUsName: '@:commom.input@:gamePrizes.giftEnUsName',
			giftJaJpName: '@:commom.input@:gamePrizes.giftJaJpName',
			giftKoKrName: '@:commom.input@:gamePrizes.giftKoKrName ',
			giftZhCnName: '@:commom.input@:gamePrizes.giftZhCnName',
			giftCount: '@:commom.input@:gamePrizes.giftCount',
			giftStatus: '@:commom.input@:gamePrizes.giftStatus',
		}

	},
	company: {
		companyZhCnName: '会社名(@:commom.zh)',
		companyJpJaName: '会社名(@:commom.ja)',
		companyEnUsName: '会社名(@:commom.en)',
		companyKoKrName: '会社名(@:commom.ko)',
		addressZhCn: '会社のアドレス(@:commom.zh)',
		addressJpJa: '会社のアドレス(@:commom.ja)',
		addressEnUs: '会社のアドレス(@:commom.en)',
		addressKoKr: '会社のアドレス(韩国語)',
		phone: '電話',
		email: '会社のメールボックス',
		fax: '株式会社ファックス',
		station: 'サイトのid',
		address: '会社の住所',
		companyName: '会社名',
		validate: {
			companyZhCnName: '@:commom.input@:company.companyZhCnName',
			companyJpJaName: '@:commom.input@:company.companyJpJaName',
			companyEnUsName: '@:commom.input@:company.companyEnUsName',
			companyKoKrName: '@:commom.input@:company.companyKoKrName',
			addressZhCn: '@:commom.input@:company.addressZhCn',
			addressJpJa: '@:commom.input@:company.addressJpJa',
			addressEnUs: '@:commom.input@:company.addressEnUs',
			addressKoKr: '@:commom.input@:company.addressKoKr',
			phone: '@:commom.input@:company.phone',
			email: '@:commom.input@:company.email',
			fax: '@:commom.input@:company.fax',
		}
	},
	msgTemplate: {
		sendType: '型を送ってください',
		noticeType: '通知タイプ',
		sendType1: 'プッシュ',
		sendType2: 'SMS',
		sendType3: '邮件',
		noticeType1: 'すべての',
		noticeType2: 'ユーザグループ',
		noticeType3: '個人',

		templateType: 'テンプレートタイプ',
		templateVars: '変数リスト',
		templateContent: 'テンプレートの内容',
		messageTitle: 'メッセージタイトル',

		tempZh: '@:msgTemplate.templateContent(@:commom.zh)',
		tempKo: '@:msgTemplate.templateContent(@:commom.ko)',
		tempEn: '@:msgTemplate.templateContent(@:commom.en)',
		tempJa: '@:msgTemplate.templateContent(@:commom.ja)',

		titleZh: '@:msgTemplate.messageTitle(@:commom.zh)',
		titleKo: '@:msgTemplate.messageTitle(@:commom.ko)',
		titleEn: '@:msgTemplate.messageTitle(@:commom.en)',
		titleJa: '@:msgTemplate.messageTitle(@:commom.ja)',

		vtemplateVars: '@:commom.input@:msgTemplate.templateVars',
		vnoticeType: '@:commom.select@:msgTemplate.noticeType',
		vsendType: '@:commom.select@:msgTemplate.sendType',
		vtemplateCode: '@:commom.select@:msgTemplate.templateType',

		vtemp: '@:commom.input@:msgTemplate.messageTitle',
		vtempZh: '@:commom.input@:msgTemplate.tempZh',
		vtempKo: '@:commom.input@:msgTemplate.tempKo',
		vtempEn: '@:commom.input@:msgTemplate.tempEn',
		vtempJa: '@:commom.input@:msgTemplate.tempJa',

		vtitleZh: '@:commom.input@:msgTemplate.titleZh',
		vtitleKo: '@:commom.input@:msgTemplate.titleKo',
		vtitleEn: '@:commom.input@:msgTemplate.titleEn',
		vtitleJa: '@:commom.input@:msgTemplate.titleJa',
	},
	
	sysMessage: {
		detail: '詳細',
		title: 'タイトルのお知らせ',
		summary: '簡介',
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
		msgTitle: 'メッセージタイトル',
		msgContent: 'メッセージの内容',
		infotime: '通知時間',

		msgtype: 'メッセージタイプ',
		msgtype1: 'システム通知',
		msgtype2: 'メッセージが注意する',
		msgtype3: 'メールで注意する',

		searchAlert: '@:commom.input@:msgDetail.msgTitle',
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
		noUser:'暂无用户',
		over:'结束当前对话',
		sendMsg:'发送',
		userList:'用户等待列表',
		active:'当前用户'
	},
	user: {
		online: 'オンライン'
	},
	loadingText: 'ロード中'
}