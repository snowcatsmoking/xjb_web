import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* 页面标题区域 */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image 
            src="/images/playpicture.png" 
            alt="关于我们背景" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl max-w-2xl">了解新吉波船舶科技有限公司的发展历程、企业文化和团队力量</p>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">公司简介</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-6 leading-relaxed">
                新吉波船舶科技有限公司成立于2015年，是一家专注于船舶技术研发与创新的高新技术企业。公司总部位于上海浦东新区，在国内多个沿海城市设有分支机构和技术研发中心。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                多年来，我们坚持以技术创新为驱动，以客户需求为导向，不断提升产品质量和服务水平，已成长为国内领先的船舶技术解决方案提供商。公司拥有一支由行业资深专家和优秀青年工程师组成的专业团队，技术力量雄厚。
              </p>
              <p className="text-gray-700 leading-relaxed">
                新吉波船舶科技有限公司主要业务涵盖智能船舶系统研发、船舶设计、船舶节能技术、船舶自动化系统以及相关技术服务等领域，产品和解决方案已广泛应用于国内外各类船舶和海洋工程项目中。
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px]">
              <Image 
                src="/images/playpicture.png" 
                alt="公司外观" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">发展历程</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-blue-600 pl-8 space-y-12 relative">
              {/* 时间点装饰 */}
              <div className="absolute left-[-10px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="absolute left-[-10px] top-[20%] w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="absolute left-[-10px] top-[40%] w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="absolute left-[-10px] top-[60%] w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="absolute left-[-10px] top-[80%] w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="absolute left-[-10px] bottom-0 w-4 h-4 rounded-full bg-blue-600"></div>
              
              {/* 时间线内容 */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">2015年</h3>
                <p className="text-gray-700">
                  新吉波船舶科技有限公司在上海成立，开始专注于船舶技术研发与创新。初创团队由5名资深船舶工程师组成，开展船舶节能技术研究。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">2017年</h3>
                <p className="text-gray-700">
                  成功研发第一代智能船舶导航系统，获得多项国家专利。开始为国内主要船厂提供技术支持和服务，公司规模扩大到20人。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">2019年</h3>
                <p className="text-gray-700">
                  设立青岛研发中心，团队扩展至50人，专注于船舶自动化系统开发。同年，公司获得A轮融资，开始国际业务拓展。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">2021年</h3>
                <p className="text-gray-700">
                  推出船舶能源优化系统，该系统在实际应用中帮助客户减少能耗15%以上。公司被评为"上海市专精特新企业"。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">2023年</h3>
                <p className="text-gray-700">
                  完成B轮融资，公司估值超过10亿元。发布远程船舶监控平台，实现对全球船队的实时监控和管理。员工规模超过100人。
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">2025年</h3>
                <p className="text-gray-700">
                  成立海外分公司，产品和服务覆盖亚洲、欧洲和北美主要航运市场。开始研发新一代基于人工智能的自主航行系统。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使命愿景 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">我们的使命</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                通过持续的技术创新和卓越服务，为全球航运业提供更安全、高效、环保的船舶技术解决方案，助力海洋经济可持续发展。
              </p>
              <div className="mt-8 relative h-[200px]">
                <Image 
                  src="/images/playpicture.png" 
                  alt="公司使命" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">我们的愿景</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                成为全球领先的船舶技术创新企业，引领行业技术发展方向，为航运业的智能化、数字化、绿色化转型提供强大的技术支持。
              </p>
              <div className="mt-8 relative h-[200px]">
                <Image 
                  src="/images/playpicture.png" 
                  alt="公司愿景" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">核心价值观</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">创新引领</h3>
              <p className="text-gray-600">
                持续技术创新是我们发展的核心驱动力，我们鼓励团队不断探索、勇于尝试，引领行业技术发展。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">品质至上</h3>
              <p className="text-gray-600">
                我们对每一项技术和产品都精益求精，严控品质，确保为客户提供稳定可靠的解决方案。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">团队协作</h3>
              <p className="text-gray-600">
                我们重视团队精神和集体智慧，鼓励开放交流和跨部门协作，共同解决复杂技术难题。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65a2.5 2.5 0 00-2.5-2.5H8.5a2.5 2.5 0 00-2.5 2.5v.085a1 1 0 00.5.866l.191.11c.51.294 1.048.582 1.6.864a10.52 10.52 0 01.732.459" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">环保责任</h3>
              <p className="text-gray-600">
                我们致力于开发节能减排技术，帮助航运业降低环境影响，促进海洋生态的可持续发展。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 管理团队 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">核心管理团队</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-80">
                <Image 
                  src="/images/playpicture.png" 
                  alt="张志远 - 创始人兼CEO" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">张志远</h3>
                <p className="text-blue-600 mb-4">创始人兼CEO</p>
                <p className="text-gray-600 mb-4">
                  上海交通大学船舶与海洋工程博士，曾任某国际船级社高级工程师，拥有20年船舶技术研发经验，主导过多个大型船舶项目，持有15项发明专利。
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-80">
                <Image 
                  src="/images/playpicture.png" 
                  alt="李明 - 首席技术官" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">李明</h3>
                <p className="text-blue-600 mb-4">首席技术官</p>
                <p className="text-gray-600 mb-4">
                  哈尔滨工程大学自动化专业博士，曾在德国著名船舶研究所工作10年，专注于船舶智能系统研发，领导团队开发了公司核心技术产品。
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-80">
                <Image 
                  src="/images/playpicture.png" 
                  alt="王海燕 - 运营副总裁" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">王海燕</h3>
                <p className="text-blue-600 mb-4">运营副总裁</p>
                <p className="text-gray-600 mb-4">
                  复旦大学MBA，拥有15年航运行业管理经验，曾任国际航运公司中国区运营总监，负责公司整体运营管理、市场拓展和客户服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企业荣誉 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">企业荣誉</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-3">资质认证</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">高新技术企业认证</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">ISO9001质量管理体系认证</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">ISO14001环境管理体系认证</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">中国船级社(CCS)技术认证</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">挪威船级社(DNV)技术认证</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-3">奖项荣誉</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700">2023年度中国航运技术创新奖</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700">上海市专精特新企业称号</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700">2022年度节能环保技术示范企业</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700">中国海洋工程科技进步奖</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700">国家级重点研发计划参与单位</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">合作伙伴</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              我们与全球领先的航运公司、船厂、科研院所和高校建立了长期稳定的合作关系，共同推进船舶技术创新和行业发展。
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md flex items-center justify-center h-24">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/playpicture.png" 
                    alt={`合作伙伴${index + 1}`} 
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 