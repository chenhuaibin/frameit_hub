import { createI18n } from "vue-i18n";
import chinese from "@/language/config/zh_CN";
import english from "@/language/config/en_US";
//这是我自己创建的语言包

//创建messages对象，里面注册相应的语言包，这里面我注册了自己定义的语言包
const messages = {
    en: {
        ...english,
    },
    zh: {
        ...chinese,
    },
};
// 进行持久化处理，防止在页面刷新之后数据丢失

const i18n = createI18n({
    legacy: false, // 使用composition API
    locale: 'zh',
    globalInjection: true,
    messages,
});

export default i18n
