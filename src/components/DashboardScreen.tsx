import { Upload, FileText, Share2, Search, User, LogOut, FileCheck, CreditCard, UserPlus, Wallet, Bell, Shield, BarChart3, FileArchive } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Language, translations } from "@/lib/translations";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";
interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
  userName?: string;
  language: Language;
  onLanguageChange: (language: Language) => void;
}
const DashboardScreen = ({
  onNavigate,
  userName = "User",
  language,
  onLanguageChange
}: DashboardScreenProps) => {
  const t = translations[language].dashboard;
  const [activeTab, setActiveTab] = useState("documents");
  const [activeDocCategory, setActiveDocCategory] = useState("all");
  
  const recentDocuments = [{
    name: "Aadhar Card.pdf",
    date: "15 Jan 2025",
    verified: true,
    type: "identity"
  }, {
    name: "PAN Card.pdf",
    date: "12 Jan 2025",
    verified: true,
    type: "identity"
  }, {
    name: "Voter ID.pdf",
    date: "10 Jan 2025",
    verified: true,
    type: "identity"
  }, {
    name: "Driving License.pdf",
    date: "08 Jan 2025",
    verified: true,
    type: "license"
  }, {
    name: "Health Insurance.pdf",
    date: "05 Jan 2025",
    verified: true,
    type: "insurance"
  }, {
    name: "Vehicle Insurance.pdf",
    date: "03 Jan 2025",
    verified: true,
    type: "insurance"
  }, {
    name: "Property Papers.pdf",
    date: "01 Jan 2025",
    verified: false,
    type: "property"
  }, {
    name: "10th Certificate.pdf",
    date: "28 Dec 2024",
    verified: true,
    type: "education"
  }, {
    name: "12th Certificate.pdf",
    date: "26 Dec 2024",
    verified: true,
    type: "education"
  }, {
    name: "Degree Certificate.pdf",
    date: "24 Dec 2024",
    verified: true,
    type: "education"
  }];
  
  const insurancePolicies = [
    {
      name: "Health Insurance",
      provider: "National Health Insurance",
      policyNumber: "HLTH-1234-5678-90",
      validUntil: "31 Dec 2025",
      status: "active"
    },
    {
      name: "Vehicle Insurance",
      provider: "Secure Motors Insurance",
      policyNumber: "VEH-9876-5432-10",
      validUntil: "15 Jun 2025",
      status: "active"
    },
    {
      name: "Life Insurance",
      provider: "LifeSecure Insurance",
      policyNumber: "LIFE-5678-1234-90",
      validUntil: "10 Mar 2035",
      status: "active"
    }
  ];
  
  const nomineeDetails = {
    name: "Rahul Sharma",
    relation: "Spouse",
    contact: "+91 98765 43210",
    email: "rahul.sharma@example.com",
    documents: ["ID Proof", "Address Proof"]
  };
  
  const bankAccounts = [
    {
      bankName: "State Bank of India",
      accountNumber: "XXXX XXXX 5678",
      ifscCode: "SBIN0001234",
      accountType: "Savings"
    },
    {
      bankName: "HDFC Bank",
      accountNumber: "XXXX XXXX 9012",
      ifscCode: "HDFC0000123",
      accountType: "Current"
    }
  ];
  return <div className="min-h-screen bg-background animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 shadow-md px-6 lg:px-12 py-5 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{t.hello}, {userName} 👋</h2>
                <p className="text-sm text-muted-foreground">{t.welcomeBack}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
              <button 
                onClick={() => onNavigate("login")} 
                className="p-2.5 bg-white shadow-sm hover:bg-slate-50 rounded-lg transition-all flex items-center gap-2 border border-slate-200"
              >
                <LogOut className="w-5 h-5 text-slate-600" />
                <span className="font-medium text-slate-700 hidden md:inline">{translations[language].common.logout}</span>
              </button>
            </div>
          </div>

          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input 
              placeholder={t.search} 
              className="pl-12 h-14 rounded-xl border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary" 
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 lg:px-12 py-8 max-w-7xl mx-auto space-y-8 bg-slate-50">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-6 py-3 font-medium text-lg flex items-center space-x-2 ${activeTab === "documents" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-500 hover:text-blue-600"}`}
            onClick={() => setActiveTab("documents")}
          >
            <FileArchive className="h-5 w-5 mr-2" />
            <span>Documents</span>
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg flex items-center space-x-2 ${activeTab === "insurance" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-500 hover:text-blue-600"}`}
            onClick={() => setActiveTab("insurance")}
          >
            <Shield className="h-5 w-5 mr-2" />
            <span>Insurance</span>
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg flex items-center space-x-2 ${activeTab === "nominees" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-500 hover:text-blue-600"}`}
            onClick={() => setActiveTab("nominees")}
          >
            <UserPlus className="h-5 w-5 mr-2" />
            <span>Nominees</span>
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg flex items-center space-x-2 ${activeTab === "banking" 
              ? "text-blue-600 border-b-2 border-blue-600" 
              : "text-gray-500 hover:text-blue-600"}`}
            onClick={() => setActiveTab("banking")}
          >
            <Wallet className="h-5 w-5 mr-2" />
            <span>Banking</span>
          </button>
        </div>

        {/* Documents Tab Content */}
        {activeTab === "documents" && (
          <>
            {/* Document Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Documents</p>
                    <h4 className="text-2xl font-bold">{recentDocuments.length}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileArchive className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    <span className="text-green-500">↑ 12%</span> from last month
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Identity Documents</p>
                    <h4 className="text-2xl font-bold">{recentDocuments.filter(doc => doc.type === "identity").length}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${(recentDocuments.filter(doc => doc.type === "identity").length / recentDocuments.length) * 100}%` }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Education Documents</p>
                    <h4 className="text-2xl font-bold">{recentDocuments.filter(doc => doc.type === "education").length}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-yellow-600 h-1.5 rounded-full" style={{ width: `${(recentDocuments.filter(doc => doc.type === "education").length / recentDocuments.length) * 100}%` }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Verified Documents</p>
                    <h4 className="text-2xl font-bold">{recentDocuments.filter(doc => doc.verified).length}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-600 h-1.5 rounded-full" style={{ width: `${(recentDocuments.filter(doc => doc.verified).length / recentDocuments.length) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Document Categories */}
             <div className="mb-6">
               <h3 className="text-lg font-semibold mb-3">Document Categories</h3>
               <div className="flex flex-wrap gap-3">
                 <button 
                   onClick={() => setActiveDocCategory("identity")}
                   className={`px-4 py-2 rounded-full font-medium transition-colors ${
                     activeDocCategory === "identity" 
                       ? "bg-blue-600 text-white" 
                       : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                   }`}
                 >
                   Identity Documents
                 </button>
                 <button 
                   onClick={() => setActiveDocCategory("insurance")}
                   className={`px-4 py-2 rounded-full font-medium transition-colors ${
                     activeDocCategory === "insurance" 
                       ? "bg-green-600 text-white" 
                       : "bg-green-100 text-green-800 hover:bg-green-200"
                   }`}
                 >
                   Insurance Papers
                 </button>
                 <button 
                   onClick={() => setActiveDocCategory("education")}
                   className={`px-4 py-2 rounded-full font-medium transition-colors ${
                     activeDocCategory === "education" 
                       ? "bg-yellow-600 text-white" 
                       : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                   }`}
                 >
                   School Documents
                 </button>
                 <button 
                   onClick={() => setActiveDocCategory("license")}
                   className={`px-4 py-2 rounded-full font-medium transition-colors ${
                     activeDocCategory === "license" 
                       ? "bg-purple-600 text-white" 
                       : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                   }`}
                 >
                   License Documents
                 </button>
                 <button 
                   onClick={() => setActiveDocCategory("all")}
                   className={`px-4 py-2 rounded-full font-medium transition-colors ${
                     activeDocCategory === "all" 
                       ? "bg-gray-600 text-white" 
                       : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                   }`}
                 >
                   All Documents
                 </button>
               </div>
             </div>
            
            {/* Action Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Card onClick={() => onNavigate("upload")} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-r from-cyan-900 to-blue-800 border-none transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <Upload className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-white">{t.uploadDocument}</h3>
                    <p className="text-sm text-white/80">{t.uploadDocumentDesc}</p>
                  </div>
                </div>
              </Card>

              <Card onClick={() => onNavigate("insurance-guide")} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-900 to-purple-800 border-none transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-white">{t.insuranceGuide}</h3>
                    <p className="text-sm text-white/80">{t.insuranceGuideDesc}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-800 border-none transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <Share2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-white">{t.sharedWithMe}</h3>
                    <p className="text-sm text-white/80">{t.sharedWithMeDesc}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Documents */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">{t.recentDocuments}</h3>
                <button className="text-sm text-primary font-medium hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {recentDocuments
                  .filter(doc => activeDocCategory === "all" || doc.type === activeDocCategory)
                  .map((doc, index) => (
                  <Card 
                    key={index} 
                    onClick={() => onNavigate("document-details")} 
                    className="p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl bg-white border-l-4 border-primary hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        doc.type === "identity" ? "bg-blue-100" : 
                        doc.type === "insurance" ? "bg-green-100" : 
                        doc.type === "education" ? "bg-yellow-100" : 
                        doc.type === "license" ? "bg-purple-100" : 
                        "bg-gray-100"
                      }`}>
                        <FileText className={`w-7 h-7 ${
                          doc.type === "identity" ? "text-blue-600" : 
                          doc.type === "insurance" ? "text-green-600" : 
                          doc.type === "education" ? "text-yellow-600" : 
                          doc.type === "license" ? "text-purple-600" : 
                          "text-gray-600"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate text-lg">{doc.name}</h4>
                        <div className="flex items-center gap-3 mt-1.5">
                          <p className="text-sm text-muted-foreground">{doc.date}</p>
                          {doc.verified && (
                            <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                              {t.verified}
                            </span>
                          )}
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                            doc.type === "identity" ? "bg-blue-100 text-blue-800" : 
                            doc.type === "insurance" ? "bg-green-100 text-green-800" : 
                            doc.type === "education" ? "bg-yellow-100 text-yellow-800" : 
                            doc.type === "license" ? "bg-purple-100 text-purple-800" : 
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {doc.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3 pt-3 border-t border-gray-100">
                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            // Download functionality would go here
                          }} 
                          className="p-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
                          title="Download"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            // Share functionality would go here
                          }} 
                          className="p-1.5 bg-green-50 text-green-600 rounded-md hover:bg-green-100"
                          title="Share"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            // Delete functionality would go here
                          }} 
                          className="p-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Insurance Tab Content */}
        {activeTab === "insurance" && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold">Insurance Policies</h3>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Add New Policy</span>
              </button>
            </div>
            <div className="space-y-4">
              {insurancePolicies.map((policy, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-all border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold">{policy.name}</h4>
                      <p className="text-gray-600">{policy.provider}</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-500">Policy Number: <span className="font-medium text-gray-700">{policy.policyNumber}</span></p>
                        <p className="text-sm text-gray-500">Valid Until: <span className="font-medium text-gray-700">{policy.validUntil}</span></p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">View Details</button>
                      <button className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-sm font-medium">File Claim</button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Nominees Tab Content */}
        {activeTab === "nominees" && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold">Nominee Details</h3>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                <span>Edit Nominee</span>
              </button>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-4">Primary Nominee</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium text-gray-900">{nomineeDetails.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Relation</p>
                      <p className="font-medium text-gray-900">{nomineeDetails.relation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="font-medium text-gray-900">{nomineeDetails.contact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-900">{nomineeDetails.email}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-4">Submitted Documents</h4>
                  <div className="space-y-3">
                    {nomineeDetails.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          <span className="font-medium">{doc}</span>
                        </div>
                        <button className="text-primary hover:underline text-sm">View</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Banking Tab Content */}
        {activeTab === "banking" && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold">Bank Accounts</h3>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span>Add Bank Account</span>
              </button>
            </div>
            <div className="space-y-4">
              {bankAccounts.map((account, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-all border-l-4 border-blue-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-semibold">{account.bankName}</h4>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-500">Account Number: <span className="font-medium text-gray-700">{account.accountNumber}</span></p>
                        <p className="text-sm text-gray-500">IFSC Code: <span className="font-medium text-gray-700">{account.ifscCode}</span></p>
                        <p className="text-sm text-gray-500">Account Type: <span className="font-medium text-gray-700">{account.accountType}</span></p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">Edit Details</button>
                      <button className="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-sm font-medium">Remove</button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>;
};
export default DashboardScreen;