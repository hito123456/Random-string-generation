const parts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ0123456789０１２３４５６７８９ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя?!@#$%&”^`’*=+-~:;,./|<>()[]{}？！＠＃＄￥％＆℃ ¢£ ＊ § ∫∬ Å‰♯♭♪†‡ ¶☆★○●◎◇◆□■△▲▽▼゛‘’“” ゜´ ｀ ¨ ＾￣°′″‐ ＝≠≡≒＋−±×÷＜＞≦≧〜∴∵〓∈∋⊆⊇⊂⊃∪∩∧∨ ¬ ⇒⇔∀∃∠⊥⌒∂∇≪≫√∽∝∞：；、。，．・…‥／＼‖｜（）〔〕［］｛｝〈〉《》「」『』【】＿ヽヾゝゞ〃仝々〆〇ー—♂♀※〒→←↑↓◯─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂";//使用可能な文字列
const minimum = 100;//最小桁数
const maximum = 1000;//最大桁数


module.exports = function(){
    let digit = Math.floor(Math.random() * (maximum + 1 - minimum)) + minimum;
    let Generate = "";
    for(let i = 0;i<digit;i++){
        let where = Math.floor(Math.random() * parts.length + 1);
        Generate = Generate + parts.substring(where -1,where);
    };
    return Generate;
};