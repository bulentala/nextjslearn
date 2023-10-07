import { NextResponse } from "next/server";

export default async function handler(req) {
  try {
    // YouTube API URL
    const apiUrl =
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLBPVr0JQZNobnoYWApfoEi2qbuY3QRwTU&key=AIzaSyCNjPUyB7TwEQNFkDxdV-fM-OXzg1LwkSM";

    // YouTube API'ye istek yap
    const response = await fetch(apiUrl);

    // İstek başarılı değilse hata döndür
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // API'den gelen veriyi JSON formatına çevir
    const data = await response.json();

    // Veriyi 200 OK yanıtıyla döndür
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Hata durumunda 500 Internal Server Error yanıtı döndür
    console.error("Error fetching playlist data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
