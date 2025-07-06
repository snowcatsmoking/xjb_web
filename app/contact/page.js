"use client";

import Image from 'next/image';

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* 页面标题区域 */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center">
        <div className="absolute inset-0 opacity-20 z-0">
          <Image 
            src="/images/playpicture.png" 
            alt="联系我们背景" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl max-w-2xl">我们期待与您交流，为您的需求提供专业解决方案</p>
        </div>
      </section>

      {/* 联系信息和服务流程区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* 服务流程和承诺 */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">我们的服务流程</h2>
              
              <div className="space-y-8">
                {/* 流程1 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="h-full w-0.5 bg-blue-200 mx-auto mt-3 mb-1 hidden md:block"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">需求咨询</h3>
                    <p className="text-gray-600 mb-2">
                      通过电话、邮件或实地拜访，我们的专业团队会详细了解您的船舶技术需求和具体应用场景。
                    </p>
                    <p className="text-sm text-blue-600">服务热线: 400-123-4567</p>
                  </div>
                </div>
                
                {/* 流程2 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="h-full w-0.5 bg-blue-200 mx-auto mt-3 mb-1 hidden md:block"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">方案定制</h3>
                    <p className="text-gray-600">
                      我们的技术团队会根据您的需求定制专属解决方案，并进行详细的技术交流和方案讲解。
                    </p>
                  </div>
                </div>
                
                {/* 流程3 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="h-full w-0.5 bg-blue-200 mx-auto mt-3 mb-1 hidden md:block"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">合作确认</h3>
                    <p className="text-gray-600">
                      确认方案和合作细节后，我们将提供明确的项目实施计划和时间节点，确保项目顺利进行。
                    </p>
                  </div>
                </div>
                
                {/* 流程4 */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">实施与支持</h3>
                    <p className="text-gray-600">
                      我们提供专业的产品安装、调试和技术培训服务，并建立长期的售后支持机制，确保系统稳定运行。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">我们的服务承诺</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">24小时技术支持响应</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">定期系统检查和维护</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">全年无休的紧急故障处理</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">定制化技术培训和文档支持</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 联系信息 */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">联系方式</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">公司地址</h3>
                      <p className="text-gray-600 mt-1">上海市浦东新区XXX路XXX号</p>
                      <p className="text-gray-600">邮编: 200000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">联系电话</h3>
                      <p className="text-gray-600 mt-1">总机: 021-12345678</p>
                      <p className="text-gray-600">客服: 400-123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">电子邮箱</h3>
                      <p className="text-gray-600 mt-1">客服: contact@xinjibo.com</p>
                      <p className="text-gray-600">商务合作: business@xinjibo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">工作时间</h3>
                      <p className="text-gray-600 mt-1">周一至周五: 9:00 - 18:00</p>
                      <p className="text-gray-600">周末及节假日休息</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 公司位置图片 */}
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image 
                  src="/images/playpicture.png" 
                  alt="公司位置" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-blue-900/10 flex items-center justify-center">
                  <span className="bg-white/80 px-4 py-2 rounded-md text-blue-800 font-medium">
                    公司位置示意图
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ部分 - 简洁版 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">常见问题</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">如何获取产品报价？</h3>
                <p className="text-gray-600">您可以直接拨打我们的客服电话或发送邮件咨询产品报价。我们的销售团队会根据您的具体需求提供定制化方案和报价。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">产品是否提供安装和技术支持服务？</h3>
                <p className="text-gray-600">是的，我们为所有产品提供专业的安装服务和技术支持。我们的工程师团队会确保产品正确安装并稳定运行，并提供必要的培训和后续支持。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">如何安排产品演示或实地考察？</h3>
                <p className="text-gray-600">您可以联系我们的客户经理安排产品演示或到我们的展示中心实地考察。对于重要客户，我们也可以安排参观已使用我们产品的实际船舶案例。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 