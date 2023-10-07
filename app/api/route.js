import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Simulate fetching data from an external source
    const data = {
      kind: "youtube#videoListResponse",
      etag: "3_e1kOhHqHKuEb7Vt53BMMKyCxY",
      items: [
        {
          kind: "youtube#video",
          etag: "Bj9EMxmXZWwknaJ6SiirV40KcAU",
          id: "lL9ip-73wtY",
          snippet: {
            publishedAt: "2023-10-07T05:00:18Z",
            channelId: "UCdS7OE5qbJQc7AG4SwlTzKg",
            title:
              "Dilan Polat ve dahası? Avukat Feyza Altun, Fatih Altaylı'nın sorularını yanıtladı",
            description:
              'Teke Tek Bilim ▷ https://www.youtube.com/@TekeTekBilim \n\n00:00 Giriş\n03:59 Dilan Polat nasıl gündeme geldi?\n06:33 Mail Order nedir?\n09:02 Bu değirmenin suyu nereden geliyor?\n14:46 Polat çiftinin fabrikaları nerede?\n17:24 Merdiven altı kozmetik ürünü üretimleri?\n22:38 Feyza Altun, Dilan Polat ile tanışıyor mu?\n23:45 O sırada Sağlık Bakanlığı?\n25:01 Kozmetik mafyaları?\n27:49 Çiftin gelirinin vergilendirildiği nasıl araştırılabilir?\n33:50 Cihaz üretimi yapıyorlar mı?\n36:52 Rakiplerinden şikayet var mı?\n38:08 "Bu bir halk sağlığı sorunudur"\n40:15 Bu ürünler takip edilebilir mi?\n43:58 Bu davanın sonucu ne olur?\n47:45 Ticari zeka ve vergi mükellefliği?\n52:55 Hızlı Boşanma nedir?\n1:02:41 Kadın hakları ve İstanbul Sözleşmesi?\n1:06:39 Kapanış\n\nYouTube kanalına abone olmak için ▷ http://bit.ly/FatihAltayli\n\nGazeteci - Yazar Fatih Altaylı, Youtube kanalına özel gündemi yorumluyor.',
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/lL9ip-73wtY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/lL9ip-73wtY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/lL9ip-73wtY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
              standard: {
                url: "https://i.ytimg.com/vi/lL9ip-73wtY/sddefault.jpg",
                width: 640,
                height: 480,
              },
              maxres: {
                url: "https://i.ytimg.com/vi/lL9ip-73wtY/maxresdefault.jpg",
                width: 1280,
                height: 720,
              },
            },
            channelTitle: "Fatih Altaylı",
            tags: [
              "fatih altaylı kanalı",
              "teke tek",
              "teketek",
              "teke tek özel",
              "fatih altaylı youtube kanalı",
              "fatih altaylı köşe yazıları",
              "fatih altaylı",
              "fatih altaylı video",
              "fatih altaylı youtube",
              "fatih altaylı yorum",
              "dilan polat",
              "dilan polat vergi",
              "dilan polat engin polat",
              "engin polat",
              "dilan polat instagram",
              "fatih altaylı feyza altun",
              "feyza altun dilan polat",
              "dilan polat kardeşi",
              "sıla doğu",
              "sıla doğu dilan polat",
              "dilan polat fatih altaylı",
            ],
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
              title:
                "Dilan Polat ve dahası? Avukat Feyza Altun, Fatih Altaylı'nın sorularını yanıtladı",
              description:
                'Teke Tek Bilim ▷ https://www.youtube.com/@TekeTekBilim \n\n00:00 Giriş\n03:59 Dilan Polat nasıl gündeme geldi?\n06:33 Mail Order nedir?\n09:02 Bu değirmenin suyu nereden geliyor?\n14:46 Polat çiftinin fabrikaları nerede?\n17:24 Merdiven altı kozmetik ürünü üretimleri?\n22:38 Feyza Altun, Dilan Polat ile tanışıyor mu?\n23:45 O sırada Sağlık Bakanlığı?\n25:01 Kozmetik mafyaları?\n27:49 Çiftin gelirinin vergilendirildiği nasıl araştırılabilir?\n33:50 Cihaz üretimi yapıyorlar mı?\n36:52 Rakiplerinden şikayet var mı?\n38:08 "Bu bir halk sağlığı sorunudur"\n40:15 Bu ürünler takip edilebilir mi?\n43:58 Bu davanın sonucu ne olur?\n47:45 Ticari zeka ve vergi mükellefliği?\n52:55 Hızlı Boşanma nedir?\n1:02:41 Kadın hakları ve İstanbul Sözleşmesi?\n1:06:39 Kapanış\n\nYouTube kanalına abone olmak için ▷ http://bit.ly/FatihAltayli\n\nGazeteci - Yazar Fatih Altaylı, Youtube kanalına özel gündemi yorumluyor.',
            },
            defaultAudioLanguage: "tr",
          },
        },
      ],
      pageInfo: {
        totalResults: 1,
        resultsPerPage: 1,
      },
    };

    // Return a JSON response with the fetched data
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors and return an appropriate response
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
