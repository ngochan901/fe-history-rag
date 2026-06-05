import React, { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ForceGraph2D from 'react-force-graph-2d';

const KnowledgeGraph = () => {
  const navigate = useNavigate();
  const graphRef = useRef();
  const [selectedEntity, setSelectedEntity] = useState(null);

  // --- DỮ LIỆU MẠNG LƯỚI (Nodes & Links) ---
  const graphData = useMemo(() => {
    const nodes = [
      { id: 1, name: 'Lê Thánh Tông', type: 'Nhân vật', val: 20 },
      { id: 2, name: 'Thăng Long', type: 'Địa danh', val: 12 },
      { id: 3, name: 'Cải cách Hồng Đức', type: 'Sự kiện', val: 15 },
      { id: 4, name: 'Hồng Đức Bản Đồ', type: 'Sử liệu', val: 12 },
      { id: 5, name: 'Bia Vĩnh Lăng', type: 'Sử liệu', val: 10 },
      { id: 6, name: 'Nguyễn Trãi', type: 'Nhân vật', val: 18 },
    ];

    const links = [
      { source: 1, target: 2 },
      { source: 1, target: 3 },
      { source: 1, target: 4 },
      { source: 3, target: 4 },
      { source: 6, target: 5 },
      { source: 1, target: 6 },
    ];

    return { nodes, links };
  }, []);

  // Màu sắc theo loại thực thể
  const getColor = (type) => {
    switch (type) {
      case 'Nhân vật': return '#6B1515'; // Đỏ đô
      case 'Địa danh': return '#dbaf6c'; // Vàng đồng
      case 'Sự kiện': return '#785836'; // Nâu đất
      default: return '#89716f';
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FDFBF0] font-body overflow-hidden">
      {/* 1. TOP ACTION BAR */}
      <header className="h-16 border-b border-outline-variant px-8 flex items-center justify-between bg-white/90 backdrop-blur z-20">
        <div>
           <h2 className="font-headline text-xl text-primary font-bold uppercase tracking-tighter italic">Mạng lưới Tri thức Sử Việt</h2>
           <p className="text-[10px] text-on-surface-variant italic">Mô phỏng quan hệ đa chiều giữa các thực thể lịch sử</p>
        </div>
        <div className="flex items-center gap-3">
           <button onClick={() => graphRef.current.zoomToFit(400)} className="px-4 py-1.5 bg-primary/5 text-primary border border-primary/20 rounded font-mono text-[10px] font-bold hover:bg-primary hover:text-white transition-all">
             CĂN CHỈNH TRUNG TÂM
           </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative">
        {/* 2. KHÔNG GIAN SƠ ĐỒ CHUYỂN ĐỘNG */}
        <section className="flex-1 cursor-grab active:cursor-grabbing bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
          <ForceGraph2D
            ref={graphRef}
            graphData={graphData}
            nodeLabel="name"
            nodeColor={node => getColor(node.type)}
            nodeRelSize={6}
            linkWidth={1.5}
            linkColor={() => '#6B151522'}
            onNodeClick={(node) => setSelectedEntity(node)}
            cooldownTicks={100}
            // Tùy chỉnh vẽ Node đẹp hơn 
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.name;
              const fontSize = 12 / globalScale;
              ctx.font = `${fontSize}px "EB Garamond"`;
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              
              // Vẽ hình tròn
              ctx.shadowColor = 'rgba(0,0,0,0.2)';
              ctx.shadowBlur = 5;
              ctx.fillStyle = getColor(node.type);
              ctx.beginPath();
              ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
              ctx.fill();
              
              // Vẽ chữ
              ctx.shadowBlur = 0;
              ctx.fillStyle = '#1c1c15';
              ctx.fillText(label, node.x, node.y + 10);
            }}
          />

           {/* Chú giải góc trái */}
           <div className="absolute bottom-6 left-6 bg-white/90 p-5 rounded border border-outline-variant shadow-2xl text-[10px] font-mono space-y-3 z-10">
              <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-[#6B1515]"></span> NHÂN VẬT</div>
              <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-[#dbaf6c]"></span> ĐỊA DANH</div>
              <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-[#785836]"></span> SỰ KIỆN</div>
              <div className="pt-2 border-t border-outline-variant italic opacity-60">Lăn chuột để Zoom / Kéo để di chuyển</div>
           </div>
        </section>

        {/* 3. SIDE PANEL CHI TIẾT (Right Sidebar) */}
        <aside className={`fixed right-0 top-16 bottom-0 w-[380px] bg-white border-l border-outline-variant transition-transform duration-500 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] z-30 ${selectedEntity ? 'translate-x-0' : 'translate-x-full'}`}>
           {selectedEntity && (
             <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                   <span className="bg-primary text-white px-3 py-1 rounded-sm font-mono text-[9px] font-bold uppercase tracking-widest shadow-md">
                     {selectedEntity.type}
                   </span>
                   <button onClick={() => setSelectedEntity(null)} className="material-symbols-outlined text-on-surface-variant hover:text-red-600 transition-colors">close</button>
                </div>

                <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
                   <h3 className="font-headline text-4xl text-primary font-bold leading-tight italic">{selectedEntity.name}</h3>
                   <div className="aspect-video bg-surface-low rounded-sm overflow-hidden border border-outline-variant relative group">
                      <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOciGdtI9vivvhe0-GHrJhG35fWenut4Lt4fS9q6B_4DS8NSY11KrdUNfoSP9DyL33rmJQnH6zseM0dMEx4YMAyD0YIoDpQxdReX54TBlZ0o9X-ybfIxq4Uc-idLs6wDyo3LB2KGc4L2_MsEMSmZpovLFkl_9zFzbi7wc0wdApxFKT8ibiDvBZiU2geYhbogZKRIIXjWJQN9XNtvOQNq51XAjDUg1MiuZQxaQUjy4rxenB7mqHdtRURp1wVGl9OxvwhjrHYrQIuwJ" alt="preview" />
                      <div className="absolute inset-0 bg-primary/5"></div>
                   </div>
                   
                   <p className="font-body text-sm text-on-surface-variant leading-relaxed italic text-justify">
                      "Đây là thực thể quan trọng trong mạng lưới tri thức triều Lê Sơ, có mối liên kết chặt chẽ với các văn bản pháp luật và cương vực địa lý đương thời..."
                   </p>

                   <div className="space-y-4 pt-6 border-t border-outline-variant/30">
                      <h4 className="font-mono text-[10px] font-bold uppercase text-secondary">Liên kết phát hiện (6)</h4>
                      <div className="grid grid-cols-1 gap-2">
                         {['Bộ luật Hồng Đức', 'Hồng Đức Bản Đồ', 'Nguyễn Trãi'].map(item => (
                           <div key={item} className="flex items-center gap-3 p-3 bg-[#fcf9ee] border border-outline-variant/20 hover:border-primary transition-all cursor-pointer group">
                              <span className="material-symbols-outlined text-primary text-sm group-hover:rotate-45 transition-transform">link</span>
                              <span className="text-xs font-bold">{item}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="pt-6 mt-auto border-t border-outline-variant/30">
                  <button 
                    onClick={() => navigate(`/admin/hub/edit/${selectedEntity.id}`)}
                    className="w-full py-4 bg-primary text-white font-headline font-bold uppercase text-xs tracking-widest shadow-xl hover:brightness-110 active:scale-95 transition-all"
                  >
                    Hiệu đính thực thể
                  </button>
                </div>
             </div>
           )}
        </aside>
      </main>
    </div>
  );
};

export default KnowledgeGraph;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const KnowledgeGraph = () => {
//   const navigate = useNavigate();
//   const [selectedEntity, setSelectedEntity] = useState(null);

//   // Dữ liệu mẫu các nút (Nodes)
//   const nodes = [
//     { id: 1, name: 'Lê Thánh Tông', type: 'Nhân vật', pos: { top: '50%', left: '50%' }, size: 'w-20 h-20' },
//     { id: 2, name: 'Thăng Long', type: 'Địa danh', pos: { top: '30%', left: '40%' }, size: 'w-12 h-12' },
//     { id: 3, name: 'Cải cách Hồng Đức', type: 'Sự kiện', pos: { top: '35%', left: '60%' }, size: 'w-14 h-14' },
//     { id: 4, name: 'Hồng Đức Bản Đồ', type: 'Sử liệu', pos: { top: '75%', left: '45%' }, size: 'w-12 h-12' },
//   ];

//   return (
//     <div className="flex flex-col h-screen bg-surface font-body overflow-hidden">
//       {/* 1. TOP ACTION BAR */}
//       <header className="h-16 border-b border-outline-variant px-8 flex items-center justify-between bg-white/80 backdrop-blur z-20">
//         <div>
//            <h2 className="font-headline text-xl text-primary font-bold uppercase tracking-tighter">Mạng lưới Tri thức</h2>
//            <p className="text-[10px] text-on-surface-variant italic leading-none">Minh họa các mối quan hệ đa chiều trong sử liệu Việt Nam</p>
//         </div>
//         <div className="flex items-center bg-surface-low border border-outline-variant p-1 rounded-lg">
//            <button className="p-1.5 hover:bg-white rounded transition-all"><span className="material-symbols-outlined text-sm">zoom_in</span></button>
//            <button className="p-1.5 hover:bg-white rounded transition-all"><span className="material-symbols-outlined text-sm">zoom_out</span></button>
//            <div className="w-px h-4 bg-outline-variant mx-1"></div>
//            <button className="p-1.5 hover:bg-white rounded transition-all text-[10px] font-bold px-3">TỰ ĐỘNG CĂN CHỈNH</button>
//         </div>
//       </header>

//       <main className="flex-1 flex overflow-hidden">
//         {/* 2. KHÔNG GIAN SƠ ĐỒ (GRAPH CANVAS) */}
//         <section className="flex-1 relative overflow-hidden bg-[#FDFBF0]">
//            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#89716f 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           
//            {/* Các đường nối (SVG Lines) */}
//            <svg className="absolute inset-0 w-full h-full opacity-30">
//               <line x1="50%" y1="50%" x2="40%" y2="30%" stroke="#4b0004" strokeWidth="1" strokeDasharray="4" />
//               <line x1="50%" y1="50%" x2="60%" y2="35%" stroke="#4b0004" strokeWidth="1" />
//               <line x1="50%" y1="50%" x2="45%" y2="75%" stroke="#4b0004" strokeWidth="1" />
//            </svg>

//            {/* Các thực thể (Nodes) */}
//            {nodes.map(node => (
//              <div 
//                key={node.id} 
//                onClick={() => setSelectedEntity(node)}
//                style={{ top: node.pos.top, left: node.pos.left }}
//                className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer transition-all hover:scale-110`}
//              >
//                 <div className={`${node.size} rounded-full border-2 border-accent bg-white flex items-center justify-center shadow-lg group-hover:border-primary transition-all`}>
//                    <span className="material-symbols-outlined text-primary">{node.id === 1 ? 'person' : node.id === 3 ? 'event' : 'location_on'}</span>
//                 </div>
//                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
//                    {node.name}
//                 </div>
//              </div>
//            ))}

//            {/* Chú giải góc trái */}
//            <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded-lg border border-outline-variant shadow-xl text-[10px] font-mono space-y-2">
//               <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Nhân vật</div>
//               <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent"></span> Địa danh</div>
//               <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary"></span> Sự kiện</div>
//            </div>
//         </section>

//         {/* 3. SIDE PANEL CHI TIẾT (Right Sidebar) */}
//         <aside className={`w-[350px] bg-white border-l border-outline-variant transition-all duration-500 overflow-y-auto custom-scrollbar ${selectedEntity ? 'translate-x-0' : 'translate-x-full'}`}>
//            {selectedEntity && (
//              <div className="p-8 space-y-8">
//                 <div className="flex justify-between items-start">
//                    <span className="bg-primary/10 text-primary px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">{selectedEntity.type}</span>
//                    <button onClick={() => setSelectedEntity(null)} className="material-symbols-outlined text-sm opacity-30 hover:opacity-100">close</button>
//                 </div>
//                 <div>
//                    <h3 className="font-headline text-3xl text-primary font-bold leading-tight">{selectedEntity.name}</h3>
//                    <p className="text-on-surface-variant text-sm italic mt-2">"Vị minh quân lỗi lạc thời Lê Sơ, người khởi xướng Hồng Đức Bản Đồ..."</p>
//                 </div>
//                 <div className="aspect-video bg-surface-low rounded-lg overflow-hidden border border-outline-variant">
//                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNfiTVo5os9QtaCn3VrsO1XcNZsTmiWe87vp1XlvMoeJuMGsZnOH082GUdhWPAWWyhUqOj5sqccrXHibVO4RsZnfE69p20XFNroA2b9q3x2JeS1yODf0lDdw4NZj1tid9h8_eF4p9NcJwcB4MEKfhjR40Av4MUKpQ6usFe9iRj5qjpxuInHSBK8ZZ4bTckfV-Z-bNiS-DlL6EXFo5gK2qlsM0-xKfR1BV8NNaHvBrsVt3snQnMpJgPuXNLNS2cHm9jEuB6dK0eykY" alt="preview" />
//                 </div>
//                 <div className="space-y-4">
//                    <h4 className="font-mono text-[10px] font-bold uppercase border-b pb-2">Liên kết thực thể (6)</h4>
//                    <div className="space-y-2">
//                       <div className="flex items-center gap-3 p-2 hover:bg-surface-low rounded transition-all cursor-pointer text-sm">
//                          <span className="material-symbols-outlined text-primary text-sm">gavel</span>
//                          <span>Bộ luật Hồng Đức</span>
//                       </div>
//                    </div>
//                 </div>
//                 <button 
//                   onClick={() => navigate(`/admin/hub/edit/${selectedEntity.id}`)}
//                   className="w-full py-3 bg-primary text-white font-headline font-bold uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all"
//                 >
//                   Sửa dữ liệu thực thể
//                 </button>
//              </div>
//            )}
//         </aside>
//       </main>
//     </div>
//   );
// };

// export default KnowledgeGraph;