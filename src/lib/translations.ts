export type Language = 'en' | 'hi' | 'mr' | 'gu';

export interface Translations {
  languageName: string;
  dashboard: {
    hello: string;
    welcomeBack: string;
    search: string;
    uploadDocument: string;
    uploadDocumentDesc: string;
    issuedDocuments: string;
    issuedDocumentsDesc: string;
    sharedWithMe: string;
    sharedWithMeDesc: string;
    recentDocuments: string;
    verified: string;
    insuranceGuide: string;
    insuranceGuideDesc: string;
  };
  insuranceGuide: {
    title: string;
    subtitle: string;
    introduction: string;
    stepsTitle: string;
    steps: {
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
      step4: { title: string; description: string };
      step5: { title: string; description: string };
      step6: { title: string; description: string };
    };
    documentsTitle: string;
    documentsRequired: string[];
    importantNotesTitle: string;
    importantNotes: string[];
    backToDashboard: string;
  };
  common: {
    logout: string;
    back: string;
    selectLanguage: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    languageName: 'English',
    dashboard: {
      hello: 'Hello',
      welcomeBack: 'Welcome back',
      search: 'Search your documents...',
      uploadDocument: 'Upload Document',
      uploadDocumentDesc: 'Add new documents securely',
      issuedDocuments: 'Issued Documents',
      issuedDocumentsDesc: 'Government verified',
      sharedWithMe: 'Shared with Me',
      sharedWithMeDesc: '3 documents',
      recentDocuments: 'Recent Documents',
      verified: 'Verified',
      insuranceGuide: 'Insurance Claims Guide',
      insuranceGuideDesc: 'Step-by-step claim process',
    },
    insuranceGuide: {
      title: 'Insurance Claims Guide',
      subtitle: 'Complete guide for filing insurance claims',
      introduction: 'Filing an insurance claim can seem complex, but following these steps will make the process smooth and efficient. Keep all your documents ready before starting.',
      stepsTitle: 'Steps to File Your Claim',
      steps: {
        step1: {
          title: 'Notify Your Insurance Company',
          description: 'Contact your insurance company immediately after the incident. Most insurers have a 24/7 helpline. Note down the claim reference number.',
        },
        step2: {
          title: 'Collect All Required Documents',
          description: 'Gather policy documents, ID proof, incident reports, medical bills (for health insurance), repair estimates, and photographs of damage.',
        },
        step3: {
          title: 'File a Police Report (if applicable)',
          description: 'For vehicle accidents, theft, or major incidents, file an FIR at the nearest police station and obtain a copy.',
        },
        step4: {
          title: 'Fill the Claim Form',
          description: 'Complete the claim form accurately with all details. Attach all supporting documents. Double-check before submission.',
        },
        step5: {
          title: 'Submit Your Claim',
          description: 'Submit the claim form online through the insurance portal or at the nearest branch. Keep acknowledgment receipt.',
        },
        step6: {
          title: 'Follow Up Regularly',
          description: 'Track your claim status online or call customer service. Respond promptly to any additional document requests.',
        },
      },
      documentsTitle: 'Documents Required',
      documentsRequired: [
        'Insurance policy copy',
        'Claim form (duly filled)',
        'Government ID proof (Aadhar/PAN)',
        'Incident report or FIR copy',
        'Medical bills and prescriptions (health insurance)',
        'Repair estimates and bills (vehicle/property)',
        'Bank account details for payment',
        'Photographs of damage',
      ],
      importantNotesTitle: 'Important Notes',
      importantNotes: [
        'File your claim as soon as possible - delays may affect processing',
        'Keep copies of all submitted documents',
        'Be honest and accurate in all information provided',
        'Respond quickly to any queries from the insurance company',
        'Average claim processing time is 15-30 days',
        'You can escalate to insurance ombudsman if claim is rejected unfairly',
      ],
      backToDashboard: 'Back to Dashboard',
    },
    common: {
      logout: 'Logout',
      back: 'Back',
      selectLanguage: 'Select Language',
    },
  },
  hi: {
    languageName: 'हिंदी',
    dashboard: {
      hello: 'नमस्ते',
      welcomeBack: 'वापसी पर स्वागत है',
      search: 'अपने दस्तावेज़ खोजें...',
      uploadDocument: 'दस्तावेज़ अपलोड करें',
      uploadDocumentDesc: 'नए दस्तावेज़ सुरक्षित रूप से जोड़ें',
      issuedDocuments: 'जारी दस्तावेज़',
      issuedDocumentsDesc: 'सरकार द्वारा सत्यापित',
      sharedWithMe: 'मेरे साथ साझा',
      sharedWithMeDesc: '3 दस्तावेज़',
      recentDocuments: 'हाल के दस्तावेज़',
      verified: 'सत्यापित',
      insuranceGuide: 'बीमा दावा गाइड',
      insuranceGuideDesc: 'दावा प्रक्रिया के चरण',
    },
    insuranceGuide: {
      title: 'बीमा दावा गाइड',
      subtitle: 'बीमा दावा दायर करने के लिए पूर्ण गाइड',
      introduction: 'बीमा दावा दायर करना जटिल लग सकता है, लेकिन इन चरणों का पालन करने से प्रक्रिया सरल और कुशल हो जाएगी। शुरू करने से पहले अपने सभी दस्तावेज़ तैयार रखें।',
      stepsTitle: 'अपना दावा दायर करने के चरण',
      steps: {
        step1: {
          title: 'अपनी बीमा कंपनी को सूचित करें',
          description: 'घटना के तुरंत बाद अपनी बीमा कंपनी से संपर्क करें। अधिकांश बीमाकर्ताओं के पास 24/7 हेल्पलाइन है। दावा संदर्भ संख्या नोट करें।',
        },
        step2: {
          title: 'सभी आवश्यक दस्तावेज़ इकट्ठा करें',
          description: 'पॉलिसी दस्तावेज़, पहचान प्रमाण, घटना रिपोर्ट, मेडिकल बिल (स्वास्थ्य बीमा के लिए), मरम्मत अनुमान और क्षति की तस्वीरें इकट्ठा करें।',
        },
        step3: {
          title: 'पुलिस रिपोर्ट दर्ज करें (यदि लागू हो)',
          description: 'वाहन दुर्घटना, चोरी या बड़ी घटनाओं के लिए, निकटतम पुलिस स्टेशन में एफआईआर दर्ज करें और एक प्रति प्राप्त करें।',
        },
        step4: {
          title: 'दावा फॉर्म भरें',
          description: 'सभी विवरणों के साथ दावा फॉर्म सटीक रूप से भरें। सभी सहायक दस्तावेज़ संलग्न करें। जमा करने से पहले दोबारा जांचें।',
        },
        step5: {
          title: 'अपना दावा जमा करें',
          description: 'बीमा पोर्टल के माध्यम से ऑनलाइन या निकटतम शाखा में दावा फॉर्म जमा करें। पावती रसीद रखें।',
        },
        step6: {
          title: 'नियमित रूप से फॉलो अप करें',
          description: 'ऑनलाइन अपने दावे की स्थिति ट्रैक करें या ग्राहक सेवा को कॉल करें। किसी भी अतिरिक्त दस्तावेज़ अनुरोध का तुरंत जवाब दें।',
        },
      },
      documentsTitle: 'आवश्यक दस्तावेज़',
      documentsRequired: [
        'बीमा पॉलिसी की प्रति',
        'दावा फॉर्म (विधिवत भरा हुआ)',
        'सरकारी पहचान प्रमाण (आधार/पैन)',
        'घटना रिपोर्ट या एफआईआर की प्रति',
        'चिकित्सा बिल और नुस्खे (स्वास्थ्य बीमा)',
        'मरम्मत अनुमान और बिल (वाहन/संपत्ति)',
        'भुगतान के लिए बैंक खाता विवरण',
        'क्षति की तस्वीरें',
      ],
      importantNotesTitle: 'महत्वपूर्ण नोट्स',
      importantNotes: [
        'जितनी जल्दी हो सके अपना दावा दायर करें - देरी प्रोसेसिंग को प्रभावित कर सकती है',
        'सभी जमा किए गए दस्तावेज़ों की प्रतियां रखें',
        'प्रदान की गई सभी जानकारी में ईमानदार और सटीक रहें',
        'बीमा कंपनी से किसी भी प्रश्न का शीघ्र उत्तर दें',
        'औसत दावा प्रोसेसिंग समय 15-30 दिन है',
        'यदि दावा अनुचित रूप से अस्वीकार किया जाता है तो आप बीमा लोकपाल से संपर्क कर सकते हैं',
      ],
      backToDashboard: 'डैशबोर्ड पर वापस जाएं',
    },
    common: {
      logout: 'लॉगआउट',
      back: 'वापस',
      selectLanguage: 'भाषा चुनें',
    },
  },
  mr: {
    languageName: 'मराठी',
    dashboard: {
      hello: 'नमस्कार',
      welcomeBack: 'परत स्वागत आहे',
      search: 'तुमचे दस्तऐवज शोधा...',
      uploadDocument: 'दस्तऐवज अपलोड करा',
      uploadDocumentDesc: 'नवीन दस्तऐवज सुरक्षितपणे जोडा',
      issuedDocuments: 'जारी केलेले दस्तऐवज',
      issuedDocumentsDesc: 'सरकारने सत्यापित',
      sharedWithMe: 'माझ्यासोबत शेअर केलेले',
      sharedWithMeDesc: '3 दस्तऐवज',
      recentDocuments: 'अलीकडील दस्तऐवज',
      verified: 'सत्यापित',
      insuranceGuide: 'विमा दावा मार्गदर्शक',
      insuranceGuideDesc: 'दावा प्रक्रिया टप्पे',
    },
    insuranceGuide: {
      title: 'विमा दावा मार्गदर्शक',
      subtitle: 'विमा दावा दाखल करण्यासाठी संपूर्ण मार्गदर्शक',
      introduction: 'विमा दावा दाखल करणे क्लिष्ट वाटू शकते, परंतु या चरणांचे अनुसरण केल्याने प्रक्रिया सुलभ आणि कार्यक्षम होईल. सुरुवात करण्यापूर्वी आपले सर्व कागदपत्रे तयार ठेवा.',
      stepsTitle: 'तुमचा दावा दाखल करण्याचे चरण',
      steps: {
        step1: {
          title: 'तुमच्या विमा कंपनीला सूचित करा',
          description: 'घटनेनंतर लगेच तुमच्या विमा कंपनीशी संपर्क साधा. बहुतेक विमाकर्त्यांकडे 24/7 हेल्पलाइन आहे. दावा संदर्भ क्रमांक नोंदवा.',
        },
        step2: {
          title: 'सर्व आवश्यक कागदपत्रे गोळा करा',
          description: 'पॉलिसी कागदपत्रे, ओळखपत्र, घटना अहवाल, वैद्यकीय बिले (आरोग्य विम्यासाठी), दुरुस्ती अंदाज आणि नुकसानीचे फोटो गोळा करा.',
        },
        step3: {
          title: 'पोलीस अहवाल नोंदवा (लागू असल्यास)',
          description: 'वाहन अपघात, चोरी किंवा मोठ्या घटनांसाठी, जवळच्या पोलीस स्टेशनमध्ये FIR नोंदवा आणि एक प्रत मिळवा.',
        },
        step4: {
          title: 'दावा फॉर्म भरा',
          description: 'सर्व तपशीलांसह दावा फॉर्म अचूकपणे पूर्ण करा. सर्व सहायक कागदपत्रे जोडा. सबमिट करण्यापूर्वी दोनदा तपासा.',
        },
        step5: {
          title: 'तुमचा दावा सबमिट करा',
          description: 'विमा पोर्टलद्वारे ऑनलाइन किंवा जवळच्या शाखेत दावा फॉर्म सबमिट करा. पोचपावती रसीद ठेवा.',
        },
        step6: {
          title: 'नियमितपणे फॉलोअप करा',
          description: 'ऑनलाइन तुमच्या दाव्याची स्थिती ट्रॅक करा किंवा ग्राहक सेवेला कॉल करा. कोणत्याही अतिरिक्त कागदपत्र विनंतीला त्वरित प्रतिसाद द्या.',
        },
      },
      documentsTitle: 'आवश्यक कागदपत्रे',
      documentsRequired: [
        'विमा पॉलिसी प्रत',
        'दावा फॉर्म (योग्यरित्या भरलेला)',
        'सरकारी ओळखपत्र (आधार/पॅन)',
        'घटना अहवाल किंवा FIR प्रत',
        'वैद्यकीय बिले आणि प्रिस्क्रिप्शन (आरोग्य विमा)',
        'दुरुस्ती अंदाज आणि बिले (वाहन/मालमत्ता)',
        'पेमेंटसाठी बँक खाते तपशील',
        'नुकसानीचे फोटो',
      ],
      importantNotesTitle: 'महत्त्वाच्या नोंदी',
      importantNotes: [
        'शक्य तितक्या लवकर तुमचा दावा दाखल करा - विलंबामुळे प्रक्रियेवर परिणाम होऊ शकतो',
        'सर्व सबमिट केलेल्या कागदपत्रांच्या प्रती ठेवा',
        'प्रदान केलेल्या सर्व माहितीमध्ये प्रामाणिक आणि अचूक रहा',
        'विमा कंपनीकडून कोणत्याही प्रश्नांना त्वरित प्रतिसाद द्या',
        'सरासरी दावा प्रक्रिया वेळ 15-30 दिवस आहे',
        'जर दावा अन्यायकारकरित्या नाकारला गेला असेल तर तुम्ही विमा लोकपालांकडे जाऊ शकता',
      ],
      backToDashboard: 'डॅशबोर्डवर परत या',
    },
    common: {
      logout: 'लॉगआउट',
      back: 'मागे',
      selectLanguage: 'भाषा निवडा',
    },
  },
  gu: {
    languageName: 'ગુજરાતી',
    dashboard: {
      hello: 'નમસ્તે',
      welcomeBack: 'પાછા સ્વાગત છે',
      search: 'તમારા દસ્તાવેજો શોધો...',
      uploadDocument: 'દસ્તાવેજ અપલોડ કરો',
      uploadDocumentDesc: 'નવા દસ્તાવેજો સુરક્ષિત રીતે ઉમેરો',
      issuedDocuments: 'જારી કરેલા દસ્તાવેજો',
      issuedDocumentsDesc: 'સરકાર દ્વારા ચકાસાયેલ',
      sharedWithMe: 'મારી સાથે શેર કરેલું',
      sharedWithMeDesc: '3 દસ્તાવેજો',
      recentDocuments: 'તાજેતરના દસ્તાવેજો',
      verified: 'ચકાસાયેલ',
      insuranceGuide: 'વીમા દાવા માર્ગદર્શિકા',
      insuranceGuideDesc: 'દાવા પ્રક્રિયા પગલાં',
    },
    insuranceGuide: {
      title: 'વીમા દાવા માર્ગદર્શિકા',
      subtitle: 'વીમા દાવો દાખલ કરવા માટે સંપૂર્ણ માર્ગદર્શિકા',
      introduction: 'વીમા દાવો દાખલ કરવો જટિલ લાગી શકે છે, પરંતુ આ પગલાંને અનુસરવાથી પ્રક્રિયા સરળ અને કાર્યક્ષમ બનશે. શરૂ કરતા પહેલા તમારા બધા દસ્તાવેજો તૈયાર રાખો.',
      stepsTitle: 'તમારો દાવો દાખલ કરવા માટેના પગલાં',
      steps: {
        step1: {
          title: 'તમારી વીમા કંપનીને જાણ કરો',
          description: 'ઘટના પછી તરત જ તમારી વીમા કંપની સાથે સંપર્ક કરો. મોટાભાગના વીમાદાતાઓ પાસે 24/7 હેલ્પલાઇન છે. દાવા સંદર્ભ નંબર નોંધો.',
        },
        step2: {
          title: 'બધા જરૂરી દસ્તાવેજો એકત્રિત કરો',
          description: 'પોલિસી દસ્તાવેજો, ઓળખ પુરાવા, ઘટના અહેવાલ, તબીબી બિલ (આરોગ્ય વીમા માટે), સમારકામ અંદાજ અને નુકસાનના ફોટા એકત્રિત કરો.',
        },
        step3: {
          title: 'પોલીસ રિપોર્ટ નોંધાવો (જો લાગુ હોય)',
          description: 'વાહન અકસ્માત, ચોરી અથવા મોટી ઘટનાઓ માટે, નજીકના પોલીસ સ્ટેશનમાં FIR નોંધાવો અને એક નકલ મેળવો.',
        },
        step4: {
          title: 'દાવા ફોર્મ ભરો',
          description: 'બધી વિગતો સાથે દાવા ફોર્મ ચોક્કસપણે પૂર્ણ કરો. બધા સહાયક દસ્તાવેજો જોડો. સબમિટ કરતા પહેલા બે વાર તપાસો.',
        },
        step5: {
          title: 'તમારો દાવો સબમિટ કરો',
          description: 'વીમા પોર્ટલ દ્વારા ઓનલાઇન અથવા નજીકની શાખામાં દાવા ફોર્મ સબમિટ કરો. સ્વીકૃતિ રસીદ રાખો.',
        },
        step6: {
          title: 'નિયમિત ફોલોઅપ કરો',
          description: 'તમારા દાવાની સ્થિતિને ઓનલાઇન ટ્રેક કરો અથવા ગ્રાહક સેવાને કૉલ કરો. કોઈપણ વધારાના દસ્તાવેજ વિનંતીને તરત પ્રતિસાદ આપો.',
        },
      },
      documentsTitle: 'જરૂરી દસ્તાવેજો',
      documentsRequired: [
        'વીમા પોલિસી નકલ',
        'દાવા ફોર્મ (યોગ્ય રીતે ભરેલું)',
        'સરકારી ઓળખ પુરાવા (આધાર/પાન)',
        'ઘટના અહેવાલ અથવા FIR નકલ',
        'તબીબી બિલ અને પ્રિસ્ક્રિપ્શન (આરોગ્ય વીમા)',
        'સમારકામ અંદાજ અને બિલ (વાહન/મિલકત)',
        'ચુકવણી માટે બેંક ખાતાની વિગતો',
        'નુકસાનના ફોટા',
      ],
      importantNotesTitle: 'મહત્વપૂર્ણ નોંધો',
      importantNotes: [
        'શક્ય તેટલી જલ્દી તમારો દાવો દાખલ કરો - વિલંબ પ્રક્રિયાને અસર કરી શકે છે',
        'બધા સબમિટ કરેલા દસ્તાવેજોની નકલો રાખો',
        'આપેલી બધી માહિતીમાં પ્રામાણિક અને ચોક્કસ રહો',
        'વીમા કંપનીના કોઈપણ પ્રશ્નોને ઝડપથી પ્રતિસાદ આપો',
        'સરેરાશ દાવા પ્રક્રિયા સમય 15-30 દિવસ છે',
        'જો દાવો અન્યાયી રીતે નકારવામાં આવે તો તમે વીમા લોકપાલને વધારી શકો છો',
      ],
      backToDashboard: 'ડેશબોર્ડ પર પાછા જાઓ',
    },
    common: {
      logout: 'લૉગઆઉટ',
      back: 'પાછળ',
      selectLanguage: 'ભાષા પસંદ કરો',
    },
  },
};
