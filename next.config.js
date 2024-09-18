module.exports = {
  compress: true,
  async headers() {
    return [
      {
        // 캐싱 할 정적 파일 위치
        source: "/_next/static/(.*)",
        headers: [
          {
            // 캐싱 시간 설정
            key: "Cache-Control",
            value: "public, max-age=86400, immutable",
          },
          {
            // 캐시 제어, 리소스의 버전을 식별
            key: "ETag",
            value: 'W/"etag-value"',
          },
          // {
          //   key: "Last-Modified",
          //   value: @TODO : implement file's last modified date,
          // },
        ],
      },
    ];
  },
};
