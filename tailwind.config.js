// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#F97316', // Giả sử đây là màu cam của bạn
      },
      
      // ✨ Thêm toàn bộ phần typography này vào
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Tùy chỉnh chung cho các tiêu đề
            'h1, h2, h3, h4': {
              color: theme('colors.gray.800'),
              fontWeight: '700',
            },
            // Tùy chỉnh riêng cho H1 để giống thiết kế cũ
            'h1': {
              marginTop: '0',
              marginBottom: theme('margin.6'),
              paddingBottom: theme('padding.3'),
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.300'),
            },
            // Tùy chỉnh cho chữ đậm
            'strong': {
              color: theme('colors.gray.800'),
            },
            // Tùy chỉnh cho các đoạn trích dẫn (có gạch cam bên trái)
            'blockquote': {
              borderLeftColor: theme('colors.orange-primary'),
              fontStyle: 'normal',
              color: theme('colors.gray.600'),
              paddingLeft: theme('padding.4'),
            },
            // Tùy chỉnh màu của các gạch đầu dòng
            'ul > li::marker': {
              color: theme('colors.gray.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};