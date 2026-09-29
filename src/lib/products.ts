// Static product catalogue for the frontend-only demo build.
// Exported from the production database — no Postgres connection is needed.

export type Product = {
  id: number;
  slug: string;
  titleUr: string;
  titleEn: string;
  author: string;
  price: number;
  image: string;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    "id": 5,
    "slug": "biaan-ul-quran-4-vols",
    "titleUr": "بیان القرآن چار جلدیں",
    "titleEn": "Biaan-ul-Quran 4 Volumes",
    "author": "Dr Israr Ahmed",
    "price": 8400,
    "image": "/images/bianulquran_4vols.png",
    "description": "قرآن حکیم نوعِ انسانی کے لیے اللہ تعالیٰ کا آخری اور تکمیلی پیغامِ ہدایت ہے‘ جسے نبی آخر الزماں ٌمحمد رسول اللہﷺ کی دعوت و تبلیغ میں مرکز و محور کی حیثیت حاصل تھی۔ آپﷺ نے اس قرآن کی بنیاد پر نہ صرف دنیا کو ایک نظامِ عدلِ اجتماعی عطا فرمایا بلکہ اس عادلانہ نظام پر مبنی ایک صالح معاشرہ بھی بالفعل قائم کر کے دکھایا۔"
  },
  {
    "id": 6,
    "slug": "mukhtasir-biaan-ul-quran-1-vol",
    "titleUr": "﴾مختصر بیان القرآن ﴿ایک جلد میں",
    "titleEn": "Mukhtasir Biaan-ul-Quran (in 1 volume)",
    "author": "Dr Israr Ahmed",
    "price": 2500,
    "image": "/images/mukhtasir_bianulquran.png",
    "description": "حترم ڈاکٹر صاحب نے اپنے دورۂ ترجمہ ٔقرآن (بیان القرآن) میں بھی قرآن کریم کی اس امتیازی حیثیت کو پیش نظر رکھا ہے‘ جسے دعوت رجوع الی القرآن کے انتہائی اہم سنگ میل کی حیثیت حاصل ہے۔ اس بات کی ضرورت شدت سے محسوس ہو رہی تھی کہ اس شہرۂ آفاق ’’بیان القرآن‘‘ کو مرتب کر کے کتابی صورت میں پیش کیا جائے۔"
  },
  {
    "id": 7,
    "slug": "rah-e-nijaat-short-edition",
    "titleUr": "راہ نجات مختصر ایڈیشن",
    "titleEn": "Rah-e-Nijaat short edition",
    "author": "Dr Israr Ahmed",
    "price": 60,
    "image": "/images/raah_e_nijaat.png",
    "description": "س کتابچے پربعض بزرگوں نے یہ گرفت فرمائی ہےکہ اس کی بعض عبارات سے عاصی اور گناہگار اہلِ ایمان کے اپنے گناہوں کے بقدر سزا پانے کے بعد جہنم سےرہائی پانے کی نفی ہوتی ہے۔مَیں اس سے براءت کرتا ہوں۔میری رائے بھی یہی ہےکہ جس مسلمان کے دل میں رائی کے دانے کے برابر بھی ایمان ہوگاوہ بالآخر جہنم سے نجات پا جائے گا۔اس کتابچے میں جہاں جہاں لفظ نجات آیا ہےاُس سے مراد اوّل دھلے میں نجات ،ہے یعنی یہ کہ انسان کو جہنم میں بالکل ڈالا ہی نہ جائےاور میدانِ حشر ہی میں رحمت و مغفرتِ خداوندی اُس پر سایہ فگن ہو جائے!"
  },
  {
    "id": 8,
    "slug": "quran-aor-amane-alam",
    "titleUr": "قرآن اور امنِ عالم",
    "titleEn": "Quran aor Aman-e-Alam",
    "author": "Dr Israr Ahmed",
    "price": 20,
    "image": "/images/quran_aor_amanealam.png",
    "description": "ستمبر۱۹۶۸ء میں مجلس طلبائے اسلام پاکستان نے بمقام بنات الاسلام اکیڈمی‘ گلبرگ‘ لائل پور ( فیصل آباد) اپنا پہلا سالانہ تربیتی اجتماع منعقد کرنے کا فیصلہ کیا تھا‘ جس میں بانی تنظیم اسلامی محترم ڈاکٹر اسرار احمد رحمہ اللہ علیہ کو’’اسلام اور امن ِعالم‘‘ کے موضوع پر خطاب کرنے کی دعوت دی گئی تھی۔ اس اجتماع کی عمومی نشستیں تو بعد میں حکام کے امتناعی احکام کے پیش نظر منعقد نہ ہو سکیں‘ البتہ کچھ شہر کے مقامی طلبہ اور کچھ باہر سے آنے والے مندوبین اپنے خصوصی اجلاس منعقد کرتے رہے۔ ایسی ہی ایک نشست میں محترم ڈاکٹر صاحب نے نہایت فکر انگیز اظہارِ خیال فرمایا‘ جسے افادۂ عام کی غرض سے کتابچے کی صورت میں شائع کر دیا گیا۔ امن و امان کی موجودہ عالمی صورتِ حال اور اہل ِمغرب کے اسلام اور مسلمانوں پر دہشت گردی کے الزامات کے تناظر میں آج اس تحریر کی افادیت بہت زیادہ بڑھ گئی ہے اور اسے بہت بڑے پیمانے پر عام کرنے کی ضرورت ہے (ادارہ)"
  }
];

export async function getProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getProduct(id: number): Promise<Product | null> {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}
