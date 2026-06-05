import React, { useRef, useEffect } from 'react';

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const editorRef = useRef(null);
  const imageInputRef = useRef(null);

  // Đổ dữ liệu ban đầu vào Editor khi load trang (Sửa bài viết)
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
    }
  }, []);

  // Hàm thực thi lệnh định dạng
  const runCommand = (command, val = null) => {
    document.execCommand(command, false, val);
    handleUpdate();
  };

  // Cập nhật dữ liệu về Form cha
  const handleUpdate = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleImageInsert = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgHtml = `<img src="${event.target.result}" class="max-w-full h-auto my-6 rounded-xl shadow-lg border border-outline-variant/30" alt="img" /><p><br></p>`;
        editorRef.current.focus();
        document.execCommand('insertHTML', false, imgHtml);
        handleUpdate();
      };
      reader.readAsDataURL(file);
    }
  };

  const toolbarGroups = [
    {
      name: 'Chữ',
      items: [
        { cmd: 'bold', icon: 'format_bold', label: 'B' },
        { cmd: 'italic', icon: 'format_italic', label: 'I' },
        { cmd: 'underline', icon: 'format_underlined', label: 'U' },
        { cmd: 'strikethrough', icon: 'format_strikethrough' },
      ]
    },
    {
      name: 'Vị trí',
      items: [
        { cmd: 'justifyLeft', icon: 'format_align_left' },
        { cmd: 'justifyCenter', icon: 'format_align_center' },
        { cmd: 'justifyRight', icon: 'format_align_right' },
        { cmd: 'justifyFull', icon: 'format_align_justify' },
      ]
    },
    {
      name: 'Danh sách',
      items: [
        { cmd: 'insertUnorderedList', icon: 'format_list_bulleted' },
        { cmd: 'insertOrderedList', icon: 'format_list_numbered' },
        { cmd: 'outdent', icon: 'format_indent_decrease' },
        { cmd: 'indent', icon: 'format_indent_increase' },
      ]
    },
    {
      name: 'Tiện ích',
      items: [
        { cmd: 'subscript', icon: 'subscript' },
        { cmd: 'superscript', icon: 'superscript' },
        { cmd: 'removeFormat', icon: 'format_clear' },
      ]
    }
  ];

  return (
    <div className="bg-white border border-outline-variant shadow-sm min-h-[600px] flex flex-col rounded-sm overflow-hidden">
      {/* TOOLBAR ĐẦY ĐỦ TÍNH NĂNG */}
      <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-outline-variant bg-surface-low/30 sticky top-0 z-20">
        
        {/* Dropdown Tiêu đề */}
        <select 
          onChange={(e) => runCommand('formatBlock', e.target.value)}
          className="bg-transparent border border-outline-variant/50 rounded px-2 py-1 text-[11px] font-mono outline-none hover:border-primary cursor-pointer mr-1"
        >
          <option value="P">Văn bản thường</option>
          <option value="H1">Tiêu đề lớn H1</option>
          <option value="H2">Tiêu đề vừa H2</option>
          <option value="H3">Tiêu đề nhỏ H3</option>
        </select>

        <div className="w-px h-6 bg-outline-variant mx-1"></div>

        {/* Render các nhóm nút */}
        {toolbarGroups.map((group, gIdx) => (
          <React.Fragment key={gIdx}>
            {group.items.map((item) => (
              <button
                key={item.cmd}
                type="button"
                onClick={() => runCommand(item.cmd)}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-white hover:shadow-sm text-on-surface-variant hover:text-primary transition-all"
                title={item.cmd}
              >
                {item.label ? <span className="font-bold text-sm font-mono">{item.label}</span> : <span className="material-symbols-outlined text-lg">{item.icon}</span>}
              </button>
            ))}
            <div className="w-px h-6 bg-outline-variant mx-1"></div>
          </React.Fragment>
        ))}

        {/* Màu chữ & Màu nền */}
        <div className="flex items-center gap-1">
          <div className="relative p-1 hover:bg-white rounded transition-all cursor-pointer group">
            <span className="material-symbols-outlined text-lg group-hover:text-primary">format_color_text</span>
            <input type="color" onChange={(e) => runCommand('foreColor', e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" title="Màu chữ" />
          </div>
          <div className="relative p-1 hover:bg-white rounded transition-all cursor-pointer group">
            <span className="material-symbols-outlined text-lg group-hover:text-primary">format_color_fill</span>
            <input type="color" onChange={(e) => runCommand('hiliteColor', e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" title="Màu nền" />
          </div>
        </div>

        <div className="w-px h-6 bg-outline-variant mx-1"></div>

        {/* Link, Ảnh, HR */}
        <button type="button" onClick={() => { const url = prompt("Nhập link:"); if(url) runCommand('createLink', url); }} className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-on-surface-variant hover:text-primary transition-all">
          <span className="material-symbols-outlined text-lg">add_link</span>
        </button>
        
        <button type="button" onClick={() => imageInputRef.current.click()} className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-on-surface-variant hover:text-primary transition-all">
          <span className="material-symbols-outlined text-lg">image</span>
        </button>
        <input type="file" ref={imageInputRef} className="hidden" accept="image/*" onChange={handleImageInsert} />

        <button type="button" onClick={() => runCommand('insertHTML', '<hr className="my-4 border-t-2 border-outline-variant" />')} className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-on-surface-variant hover:text-primary transition-all">
          <span className="material-symbols-outlined text-lg">horizontal_rule</span>
        </button>
      </div>

      {/* VÙNG SOẠN THẢO */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleUpdate}
        className="flex-1 p-12 font-body text-lg leading-loose outline-none min-h-[500px] bg-[#fcf9ee]/5 prose max-w-none focus:bg-white transition-all custom-editor"
        placeholder={placeholder}
      ></div>
    </div>
  );
};

export default RichTextEditor;