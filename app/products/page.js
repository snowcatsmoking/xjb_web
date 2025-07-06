"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// 产品数据
const products = [
  {
    id: 1,
    name: "智能船舶导航系统",
    category: "导航系统",
    shortDesc: "基于人工智能和大数据技术，提供精准导航和路线优化。",
    description: "新吉波智能船舶导航系统是一套集成了先进人工智能算法和大数据分析的综合性导航解决方案。该系统能够实时分析海况、天气和航行数据，为船舶提供最优航线选择，大幅提高航行安全性和效率。系统配备了高精度雷达和卫星定位装置，具备自动避碰、航线优化和智能预警等功能，为航行提供全方位的技术支持。",
    features: [
      "基于深度学习的障碍物识别与避碰",
      "实时海况分析与航线优化",
      "船舶性能实时监控与分析",
      "高精度GPS和北斗双系统定位",
      "多层次航行安全预警机制"
    ],
    specs: {
      "雷达精度": "0.5海里",
      "定位精度": "±3米",
      "航线规划能力": "可同时规划10条备选航线",
      "数据处理速度": "毫秒级响应",
      "系统兼容性": "兼容主流船舶操作系统"
    },
    applications: ["商业货轮", "豪华客轮", "科考船", "军用舰艇"]
  },
  {
    id: 2,
    name: "船舶能源优化系统",
    category: "节能系统",
    shortDesc: "通过先进的能源管理技术，降低船舶能耗，减少排放。",
    description: "新吉波船舶能源优化系统采用创新的能源管理技术，通过对船舶动力系统进行实时监控和智能调节，显著降低燃料消耗和排放。该系统能根据船舶负载、航速和海况等因素，自动调整发动机参数，实现最佳能效比。同时，系统还集成了废热回收和能量再利用模块，进一步提高能源利用效率，帮助船东降低运营成本，符合国际环保标准。",
    features: [
      "智能发动机参数调控",
      "多级废热回收系统",
      "船舶能耗实时监测与分析",
      "燃料利用率优化算法",
      "符合IMO最新环保标准"
    ],
    specs: {
      "节能效果": "降低能耗15-25%",
      "排放减少": "CO2减排20%，NOx减排30%",
      "适用动力范围": "5000-100000马力",
      "系统响应时间": "0.5秒",
      "安装周期": "7-14工作日"
    },
    applications: ["大型货轮", "集装箱船", "油轮", "渔船"]
  },
  {
    id: 3,
    name: "远程船舶监控平台",
    category: "监控系统",
    shortDesc: "实时监控船舶运行状态，提供远程诊断和预测性维护服务。",
    description: "新吉波远程船舶监控平台是一套基于云技术的综合船队管理系统，可实时监控全球范围内船舶的运行状态和关键参数。平台通过卫星通信网络，将船舶各系统数据传输至陆地控制中心，实现对发动机、导航、货物状态等的全天候监测。系统还配备了先进的故障预测算法，能提前发现潜在问题，并提供预测性维护建议，大幅降低维修成本和停运风险。",
    features: [
      "全球实时船舶状态监控",
      "AI驱动的故障预测系统",
      "自动报告生成与分析",
      "移动端远程控制与查看",
      "多维数据可视化展示"
    ],
    specs: {
      "监控参数数量": "超过200项",
      "数据刷新频率": "5-60秒可调",
      "预测准确率": "故障预测准确率>90%",
      "支持船舶数量": "单系统可支持500艘船同时监控",
      "数据存储": "支持5年数据存储与分析"
    },
    applications: ["航运公司船队", "海洋工程船", "远洋渔船", "科考船"]
  },
  {
    id: 4,
    name: "船舶自动化控制系统",
    category: "自动化系统",
    shortDesc: "提供船舶关键系统的自动化控制，提高操作效率和安全性。",
    description: "新吉波船舶自动化控制系统是一套全面集成的船舶智能管理解决方案，实现对船舶推进、发电、锅炉、辅机等关键系统的自动化控制。系统采用分布式架构和冗余设计，确保高可靠性和安全性。通过直观的人机界面，船员可以轻松监控和控制各系统运行参数，减少人为操作错误。系统还具备自诊断和报警功能，能及时发现并处理异常情况。",
    features: [
      "推进系统智能控制",
      "发电机组自动并车与负载分配",
      "辅机系统自动化管理",
      "故障自诊断与自动备份切换",
      "人性化图形操作界面"
    ],
    specs: {
      "控制精度": "±1%",
      "系统响应时间": "<0.1秒",
      "安全冗余度": "三重备份",
      "自动化级别": "符合ABS/CCS AUT-0标准",
      "操作终端": "支持多终端同时操作与监控"
    },
    applications: ["各类商业船舶", "特种作业船", "海洋平台", "军用舰艇"]
  },
  {
    id: 5,
    name: "高效船舶推进系统",
    category: "推进系统",
    shortDesc: "创新的船舶推进技术，提供更高效、更可靠的动力输出。",
    description: "新吉波高效船舶推进系统融合了流体力学优化设计和先进材料科技，为船舶提供卓越的推进效能。系统采用创新的桨叶设计和智能变距技术，能根据不同航速和海况自动调整最佳工作参数。配合专有的水动力学优化软件，系统能显著降低水阻和能耗，同时减少振动和噪音。产品采用高强度复合材料制造，具有优异的耐腐蚀性和使用寿命。",
    features: [
      "智能变距技术自动适应不同工况",
      "流体动力学优化设计",
      "高强度复合材料制造",
      "低噪音、低振动设计",
      "与船舶能源优化系统无缝集成"
    ],
    specs: {
      "效率提升": "较传统系统提高15-20%",
      "噪音降低": "降低8-12分贝",
      "使用寿命": "设计寿命25年",
      "适用航速范围": "5-35节",
      "最大输出功率": "可定制，最高达80000千瓦"
    },
    applications: ["集装箱船", "邮轮", "高速客轮", "特种工程船"]
  },
  {
    id: 6,
    name: "船舶数字孪生系统",
    category: "智能系统",
    shortDesc: "创建船舶的数字孪生模型，提供全生命周期的模拟分析和优化。",
    description: "新吉波船舶数字孪生系统通过建立高精度的船舶数字模型，实现对实体船舶的全方位虚拟映射。系统可对船舶结构、性能和各系统运行状态进行实时模拟和分析，为船舶设计、建造、运营和维护提供数据支持。通过虚拟环境中的测试和优化，可以在不影响实际船舶运营的情况下验证各种操作和改进方案的有效性，大幅降低研发成本和风险。",
    features: [
      "高精度船舶数字模型构建",
      "实时数据同步与状态映射",
      "多场景模拟与分析",
      "预测性能评估与优化",
      "虚拟现实(VR)交互界面"
    ],
    specs: {
      "模型精度": "毫米级结构精度",
      "数据同步延迟": "<1秒",
      "支持分析类型": "结构、流体、热力、电气等多物理场",
      "模拟场景数量": "可定制100+预设场景",
      "系统兼容性": "支持主流CAD/CAE软件数据导入"
    },
    applications: ["船舶设计与建造", "船员培训", "性能优化", "故障诊断与维护"]
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // 提取所有产品类别
  const categories = ['all', ...new Set(products.map(product => product.category))];

  // 根据类别筛选产品
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // 打开产品详情模态窗口
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // 关闭产品详情模态窗口
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col">
      {/* 页面标题区域 */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image 
            src="/images/playpicture.png" 
            alt="产品介绍背景" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">产品介绍</h1>
          <p className="text-xl max-w-2xl">新吉波船舶科技有限公司致力于为航运业提供创新的技术解决方案</p>
        </div>
      </section>

      {/* 产品分类筛选 */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-gray-700">产品分类:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'all' ? '全部产品' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示区域 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <div className="relative h-64">
                  <Image 
                    src="/images/playpicture.png" 
                    alt={product.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 h-12 line-clamp-2">{product.shortDesc}</p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => openModal(product)}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      查看详情
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术优势介绍 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">我们的技术优势</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              新吉波船舶科技有限公司拥有多项核心技术专利，依托强大的研发团队，不断推动船舶技术的创新发展。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  前沿研发能力
                </h3>
                <p className="text-gray-600">
                  公司拥有由多名博士和高级工程师组成的专业研发团队，与国内外知名高校和研究机构保持密切合作，持续跟踪国际先进船舶技术发展趋势。
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  智能集成技术
                </h3>
                <p className="text-gray-600">
                  公司产品采用模块化设计和开放式架构，可实现与各类船舶系统的无缝集成。先进的人工智能算法确保系统在复杂环境下的高效运行。
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  可靠性与安全性
                </h3>
                <p className="text-gray-600">
                  所有产品经过严格的质量控制和多轮测试验证，确保在恶劣海况下依然保持高可靠性。多重冗余设计和安全机制保障船舶和人员安全。
                </p>
              </div>
            </div>
            
            <div className="relative h-[500px]">
              <Image 
                src="/images/playpicture.png" 
                alt="技术优势展示" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 定制解决方案 */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">需要定制解决方案？</h2>
            <p className="text-blue-100 mb-8">
              我们深知每艘船舶都有其独特需求，新吉波技术团队可以为您提供量身定制的船舶技术解决方案。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-medium hover:bg-blue-100 transition-colors"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>

      {/* 产品详情模态窗口 */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={closeModal}>
          <motion.div 
            className="bg-white rounded-lg max-w-4xl w-full overflow-hidden my-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <Image 
                src="/images/playpicture.png" 
                alt={selectedProduct.name} 
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute top-4 right-4">
                <button 
                  onClick={closeModal}
                  className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded mb-2">
                  {selectedProduct.category}
                </span>
                <h2 className="text-white text-3xl font-bold">{selectedProduct.name}</h2>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">产品介绍</h3>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    产品特点
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    技术规格
                  </h4>
                  <ul className="space-y-2">
                    {Object.entries(selectedProduct.specs).map(([key, value], index) => (
                      <li key={index} className="grid grid-cols-2">
                        <span className="text-gray-600">{key}:</span>
                        <span className="text-gray-800 font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  应用场景
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((app, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end border-t border-gray-200 pt-6">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  咨询此产品
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 