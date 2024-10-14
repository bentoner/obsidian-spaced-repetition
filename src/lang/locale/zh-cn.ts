// 简体中文

export default {
    // flashcard-modal.tsx
    DECKS: "卡组",
    DUE_CARDS: "到期卡片",
    NEW_CARDS: "新卡片",
    TOTAL_CARDS: "全部卡片",
    BACK: "返回",
    SKIP: "略过",
    EDIT_CARD: "编辑卡片",
    RESET_CARD_PROGRESS: "重置卡片",
    HARD: "较难",
    GOOD: "记得",
    EASY: "简单",
    SHOW_ANSWER: "显示答案",
    CARD_PROGRESS_RESET: "卡片已被重置。",
    SAVE: "储存",
    CANCEL: "取消",
    NO_INPUT: "没有提供输入。",
    CURRENT_EASE_HELP_TEXT: "目前掌握程度：",
    CURRENT_INTERVAL_HELP_TEXT: "目前间隔：",
    CARD_GENERATED_FROM: "生成自：${notePath}",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "打开一个笔记开始复习",
    REVIEW_CARDS: "复习卡片",
    REVIEW_DIFFICULTY_FILE_MENU: "复习：${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "标记为“${difficulty}”",
    REVIEW_ALL_CARDS: "复习所有笔记中的卡片",
    CRAM_ALL_CARDS: "选择要集中复习的卡组",
    REVIEW_CARDS_IN_NOTE: "复习此笔记中的卡片",
    CRAM_CARDS_IN_NOTE: "集中复习此笔记中的卡片",
    VIEW_STATS: "查看数据",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR: "复习: ${dueNotesCount} 笔记, ${dueFlashcardsCount} 卡片已到期",
    SYNC_TIME_TAKEN: "同步时间 ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "笔记保存在已被忽略的路径中（检查设置选项）。",
    PLEASE_TAG_NOTE: "请将需要复习的笔记中加入正确的标签（检查设置选项）。",
    RESPONSE_RECEIVED: "反馈已收到",
    NO_DECK_EXISTS: "没有 ${deckName} 卡组",
    ALL_CAUGHT_UP: "都复习完啦，你真棒！",

    // scheduling.ts
    DAYS_STR_IVL: "${interval}天",
    MONTHS_STR_IVL: "${interval}月",
    YEARS_STR_IVL: "${interval}年",
    DAYS_STR_IVL_MOBILE: "${interval}天",
    MONTHS_STR_IVL_MOBILE: "${interval}月",
    YEARS_STR_IVL_MOBILE: "${interval}年",

    // settings.ts
    SETTINGS_HEADER: "间隔重复插件",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: '了解更多, 请点击<a href="${wikiUrl}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussionsUrl}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issuesUrl}">here</a> if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE:
        'The project\'s source code is available on <a href="${githubProjectUrl}">GitHub</a>.',
    CODE_CONTRIBUTION_INFO:
        '<a href="${codeContributionUrl}">Here\'s</a> how to contribute code to the plugin.',
    TRANSLATION_CONTRIBUTION_INFO:
        '<a href="${translationContributionUrl}">Here\'s</a> how to translate the plugin to another language.',
    FOLDERS_TO_IGNORE: "忽略此文件夹",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "卡片",
    FLASHCARD_EASY_LABEL: "“简单”按钮文本",
    FLASHCARD_GOOD_LABEL: "“记得”按钮文本",
    FLASHCARD_HARD_LABEL: "“较难”按钮文本",
    FLASHCARD_EASY_DESC: "自定义“简单”按钮的标签",
    FLASHCARD_GOOD_DESC: "自定义“记得”按钮的标签",
    FLASHCARD_HARD_DESC: "自定义“较难”按钮的标签",
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "卡片标签",
    FLASHCARD_TAGS_DESC: "输入标签，用空格或新建行分隔，例如：#flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "是否将文件夹内容转换为卡片组和子卡片组？",
    CONVERT_FOLDERS_TO_DECKS_DESC: "此选项为卡片标签选项的替代选项。",
    INLINE_SCHEDULING_COMMENTS: "是否将计划重复时间保存在卡片最后一行的同一行？",
    INLINE_SCHEDULING_COMMENTS_DESC: "HTML注释不再破坏列表格式",
    BURY_SIBLINGS_TILL_NEXT_DAY: "将关联卡片隐藏至下一天？",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC: "关联卡片是来自同一卡片的不同形式， 例如：完形填空卡片",
    SHOW_CARD_CONTEXT: "在卡片中显示上下文？",
    SHOW_CARD_CONTEXT_DESC: "例如：标题 > 副标题 > 小标题 > ... > 小标题",
    CARD_MODAL_HEIGHT_PERCENT: "卡片高度百分比",
    CARD_MODAL_SIZE_PERCENT_DESC: "请在移动端使用并需要浏览较大图片时设为100%",
    RESET_DEFAULT: "重置为默认",
    CARD_MODAL_WIDTH_PERCENT: "卡片宽度百分比",
    RANDOMIZE_CARD_ORDER: "复习时随机显示卡片？",
    REVIEW_CARD_ORDER_WITHIN_DECK: "复习时卡片组内的卡片排序",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "卡片组内顺序 (全部新卡片优先)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL: "卡片组内顺序 (全部到期卡片优先)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "卡片组内乱序 (全部新卡片优先)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "卡片组内乱序 (全部到期卡片优先)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "卡片组及卡片都乱序",
    REVIEW_DECK_ORDER: "复习时卡片组的排序",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL: "顺序 (在前一卡片组内卡片都复习完后)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM: "乱序 (在前一卡片组内卡片都复习完后)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "卡片组及卡片都乱序",
    DISABLE_CLOZE_CARDS: "不进行完形填空？",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "将 ==高亮== 转换为完形填空？",
    CONVERT_BOLD_TEXT_TO_CLOZES: "将 **粗体** 转换为完形填空？",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "将 {{大括号}} 转换为完形填空？",
    CLOZE_PATTERNS: "完形填空模式",
    CLOZE_PATTERNS_DESC:
        '输入以换行符分隔的完形填空模式. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "单行卡片的分隔符",
    FIX_SEPARATORS_MANUALLY_WARNING: "注意：更改此选项后你将需要自行更改已存在卡片的分隔符。",
    INLINE_REVERSED_CARDS_SEPARATOR: "单行翻转卡片的分隔符",
    MULTILINE_CARDS_SEPARATOR: "多行卡片的分隔符",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "多行翻转卡片的分隔符",
    MULTILINE_CARDS_END_MARKER: "表示填空和多行闪卡结束的字符",
    NOTES: "笔记",
    REVIEW_PANE_ON_STARTUP: "启动时开启笔记复习窗格",
    TAGS_TO_REVIEW: "复习标签",
    TAGS_TO_REVIEW_DESC: "输入标签，用空格或新建行分隔，例如：#review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "复习随机笔记",
    OPEN_RANDOM_NOTE_DESC: "关闭此选项，笔记将以重要度(PageRank)排序。",
    AUTO_NEXT_NOTE: "复习后自动打开下一个笔记",
    ENABLE_FILE_MENU_REVIEW_OPTIONS: "请在文件菜单中启用复习选项（例如：复习：简单、良好、困难",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "如果您在文件菜单中禁用复习选项，您可以使用插件命令来复习笔记，如果您定义了相关快捷键，也可以使用它们。",
    MAX_N_DAYS_REVIEW_QUEUE: "右边栏中显示的最大天数",
    MIN_ONE_DAY: "天数最小值为1",
    VALID_NUMBER_WARNING: "请输入有效的数字。",
    UI: "User Interface",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "甲板树最初应显示为展开",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "关闭此选项可折叠同一张卡片中的嵌套牌组。如果您的卡片属于同一文件中的许多套牌，则很有用。",
    ALGORITHM: "算法",
    CHECK_ALGORITHM_WIKI: '了解更多, 请点击<a href="${algoUrl}">算法实现</a>.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "基础掌握程度",
    BASE_EASE_DESC: "最小值130，推荐值约250.",
    BASE_EASE_MIN_WARNING: "基础掌握程度的最小值为130。",
    LAPSE_INTERVAL_CHANGE: "将复习时标注为“较难”的卡片或笔记复习间隔缩短",
    LAPSE_INTERVAL_CHANGE_DESC: "新复习间隔 = 原复习间隔 * 间隔改变系数 / 100.",
    EASY_BONUS: "简单奖励",
    EASY_BONUS_DESC: "简单奖励设定“记得”和“简单”卡片或笔记的复习间隔差距（最小值100%）。",
    EASY_BONUS_MIN_WARNING: "简单奖励至少为100。",
    MAX_INTERVAL: "最大间隔（天）",
    MAX_INTERVAL_DESC: "设定复习的最大间隔时间（默认值100年）。",
    MAX_INTERVAL_MIN_WARNING: "最大间隔至少为1天",
    MAX_LINK_CONTRIB: "最大链接收益",
    MAX_LINK_CONTRIB_DESC: "链接笔记的加权掌握程度对原始掌握程度的最大贡献。",
    LOGGING: "记录中",
    DISPLAY_SCHEDULING_DEBUG_INFO: "在开发者控制台中显示调试信息",
    DISPLAY_PARSER_DEBUG_INFO: "Show the parser's debugging information on the developer console",
    SCHEDULING: "Scheduling",
    EXPERIMENTAL: "Experimental",
    HELP: "Help",
    STORE_IN_NOTES: "In the notes",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "笔记复习序列",
    CLOSE: "临近",
    NEW: "新",
    YESTERDAY: "昨天",
    TODAY: "今天",
    TOMORROW: "明天",

    // stats-modal.tsx
    STATS_TITLE: "数据",
    MONTH: "月",
    QUARTER: "季",
    YEAR: "年",
    LIFETIME: "全部",
    FORECAST: "预期",
    FORECAST_DESC: "将要到期的卡片数量",
    SCHEDULED: "已排期",
    DAYS: "天",
    NUMBER_OF_CARDS: "卡片数量",
    REVIEWS_PER_DAY: "平均: 复习${avg} /天",
    INTERVALS: "间隔",
    INTERVALS_DESC: "到下一次复习的时间间隔",
    COUNT: "计数",
    INTERVALS_SUMMARY: "平均间隔时间: ${avg}, 最长间隔时间: ${longest}",
    EASES: "掌握程度",
    EASES_SUMMARY: "平均掌握程度: ${avgEase}",
    CARD_TYPES: "卡片类型",
    CARD_TYPES_DESC: "如有，将显示隐藏的卡片",
    CARD_TYPE_NEW: "新",
    CARD_TYPE_YOUNG: "较新",
    CARD_TYPE_MATURE: "熟悉",
    CARD_TYPES_SUMMARY: "总卡片数: ${totalCardsCount}",
};
