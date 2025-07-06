"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// 证书数据
const certificates = [
  {
    id: 1,
    title: "高新技术企业认证",
    issuer: "科学技术部",
    date: "2022-05-12",
    validUntil: "2025-05-11",
    description: "认定新吉波船舶科技有限公司为国家高新技术企业，享受相关税收优惠政策。"
  },
  {
    id: 2,
    title: "ISO9001质量管理体系认证",
    issuer: "国际标准化组织",
    date: "2021-03-18",
    validUntil: "2024-03-17",
    description: "证明公司质量管理体系符合ISO9001:2015标准要求。"
  },
  {
    id: 3,
    title: "ISO14001环境管理体系认证",
    issuer: "国际标准化组织",
    date: "2021-03-18",
    validUntil: "2024-03-17",
    description: "证明公司环境管理体系符合ISO14001:2015标准要求。"
  },
  {
    id: 4,
    title: "中国船级社(CCS)技术认证",
    issuer: "中国船级社",
    date: "2020-11-05",
    validUntil: "2025-11-04",
    description: "公司船舶设备及系统通过中国船级社技术认证，符合相关技术标准和规范。"
  },
  {
    id: 5,
    title: "挪威船级社(DNV)技术认证",
    issuer: "挪威船级社",
    date: "2022-07-22",
    validUntil: "2027-07-21",
    description: "公司智能船舶导航系统通过挪威船级社技术认证，达到国际先进水平。"
  },
  {
    id: 6,
    title: "船舶设备制造许可证",
    issuer: "中华人民共和国工业和信息化部",
    date: "2019-09-10",
    validUntil: "2024-09-09",
    description: "许可公司从事船舶关键设备的制造，符合国家相关技术标准。"
  },
  {
    id: 7,
    title: "软件企业认证",
    issuer: "工业和信息化部",
    date: "2020-06-15",
    validUntil: "2023-06-14",
    description: "认定公司为软件企业，具备相应软件开发和服务能力。"
  },
  {
    id: 8,
    title: "企业信用等级AAA级证书",
    issuer: "中国企业信用评价中心",
    date: "2023-01-20",
    validUntil: "2026-01-19",
    description: "评定公司信用等级为AAA级，表明公司具有极强的信用水平和履约能力。"
  },
  {
    id: 9,
    title: "船舶节能技术专利证书",
    issuer: "国家知识产权局",
    date: "2018-12-05",
    validUntil: "2038-12-04",
    description: "公司自主研发的船舶节能技术获得国家发明专利保护。"
  },
  {
    id: 10,
    title: "船舶智能导航系统专利证书",
    issuer: "国家知识产权局",
    date: "2021-08-17",
    validUntil: "2041-08-16",
    description: "公司自主研发的船舶智能导航系统获得国家发明专利保护。"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // 打开证书详情模态窗口
  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  // 关闭证书详情模态窗口
  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="flex flex-col">
      {/* 页面标题区域 */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image 
            src="/images/playpicture.png" 
            alt="资质证书背景" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">资质证书</h1>
          <p className="text-xl max-w-2xl">新吉波船舶科技有限公司所获得的各项资质认证和专业证书</p>
        </div>
      </section>

      {/* 证书展示区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的认证</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              新吉波船舶科技有限公司始终秉持高标准、严要求，获得了多项国内外权威认证，为客户提供可靠的技术保障。
            </p>
          </div>

          {/* 证书网格展示 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <motion.div 
                key={cert.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openModal(cert)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-64">
                  <Image 
                    src="/images/playpicture.png" 
                    alt={cert.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold">{cert.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">颁发机构:</span>
                    <span className="text-gray-800 font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">有效期至:</span>
                    <span className="text-gray-800 font-medium">{cert.validUntil}</span>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      查看详情
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 证书认证说明 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">关于我们的资质认证</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                新吉波船舶科技有限公司高度重视产品质量和技术创新，积极获取国内外行业资质认证，以确保我们的产品和服务符合最高标准。
              </p>
              <p className="text-gray-700 mb-4">
                我们的技术团队不断精进专业能力，持续更新技术认证，确保公司在船舶技术领域保持领先地位。我们获得的认证包括但不限于：国家高新技术企业认证、ISO9001质量管理体系认证、ISO14001环境管理体系认证、中国船级社(CCS)和挪威船级社(DNV)等国际权威机构的技术认证。
              </p>
              <p className="text-gray-700">
                这些认证不仅是对我们技术实力和产品质量的肯定，也是我们为客户提供可靠服务的重要保障。我们将继续保持高标准，为海洋工程和航运业提供更加优质的技术解决方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 证书详情模态窗口 */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <motion.div 
            className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <Image 
                src="/images/playpicture.png" 
                alt={selectedCert.title} 
                fill
                style={{ objectFit: 'contain' }}
                className="bg-gray-100 p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedCert.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600 mb-1">颁发机构</p>
                  <p className="font-medium">{selectedCert.issuer}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">颁发日期</p>
                  <p className="font-medium">{selectedCert.date}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">有效期至</p>
                  <p className="font-medium">{selectedCert.validUntil}</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-2">
                <p className="text-gray-600 mb-1">证书说明</p>
                <p className="text-gray-800">{selectedCert.description}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={closeModal}
                >
                  关闭
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 