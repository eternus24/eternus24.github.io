import profileImg from "../assets/profile.jpg";
import farmdayImg from "../assets/FarmDay.JPG";
import calldayImg from "../assets/CallDay.JPG";
import tripstoryImg from "../assets/TripStory.JPG";
import smartbudgetImg from "../assets/SmartBudget.PNG";

const projects = [
  {
    title: "CallDay",
    desc: "사용자 건강 관리 서비스",
    detail:
      "Spring Framework + JPA 기반 개인 헬스케어 서비스로 운동 일정 관리와 피드형 게시판 제공",
    img: calldayImg,
    tags: ["Spring", "JPA", "헬스케어", "UX"],
    github: "https://github.com/eternus24/CallDayProject.github.io.git",
    notion: "https://www.notion.so/1-CallDay-d39cb0bea8464f70b48c4bee2ac21df6",
    trouble: {
      problem: "GitHub 충돌이 빈번해 통합 과정에서 일정 지연 위험 발생",
      cause: "브랜치 전략과 협업 규칙에 대한 사전 합의 부족",
      solve:
        "팀원별 작업물을 개별 취합 후 기능 단위로 직접 코드 통합 및 충돌 파일 정리",
      result:
        "프로젝트를 기한 내 완료하고 이후 협업 프로세스 개선 계기 마련",
    },
  },
  {
    title: "TripStory",
    desc: "AI 여행 기록 & 추천 플랫폼",
    detail:
      "React와 Node.js 기반으로 여행 기록을 AI API로 요약하고 개인화된 여행 추천 제공",
    img: tripstoryImg,
    tags: ["React", "AI API", "여행", "추천"],
    github: "https://github.com/eternus24/TripStory.git",
    notion: "https://www.notion.so/2-TripStory-2e88cb7206c0802391a5c667e0397140",
    trouble: {
      problem: "기능 확장에 따라 전체 구조가 복잡해질 위험 존재",
      cause: "사전 구조 설계 없이 기능 구현 위주로 진행할 가능성",
      solve:
        "프로젝트 시작 전 ERD 및 시스템 구조 설계, 공통 컴포넌트 선 구현",
      result:
        "안정적인 개발 진행과 구조 설계 기반 개발의 중요성 체감",
    },
  },
  {
    title: "FarmDay",
    desc: "AI 시세 추이 직거래 플랫폼",
    detail:
      "React + Spring Boot + MyBatis 기반 농산물 시세 추이 시각화 및 직거래 플랫폼",
    img: farmdayImg,
    tags: ["Spring Boot", "MyBatis", "AI API", "플랫폼"],
    github: "https://github.com/eternus24/farmday.git",
    notion: "https://www.notion.so/3-Farm-Day-2cb8cb7206c080208e25c7a1dbf3b3a6",
    trouble: {
      problem: "프로젝트 중반 팀원 이탈로 핵심 기능 누락 위험 발생",
      cause: "역할 기대치 차이와 커뮤니케이션 부족",
      solve:
        "이탈 인원의 메인·관리자 페이지를 인수하고 기능 우선순위 재정의",
      result:
        "인원 축소 상황에서도 기능 축소 없이 프로젝트 완주",
    },
  },
  {
    title: "SmartBudget",
    desc: "AI 기반 자산관리 및 지출 분석 서비스",
    detail:
      "Python LLM과 LangChain 기반 RAG 구조로 소비 패턴을 분석하고 인사이트 제공",
    img: smartbudgetImg,
    tags: ["LLM", "RAG", "Python", "AI 분석"],
    github: "https://github.com/choyhns/smartbudget.git",
    notion:
      "https://www.notion.so/AI-SmartBudget-3068cb7206c080138dddca516b4ee75d?source=copy_link",
    featured: true,
  },
];

export default function Portfolio() {
  return (
    <main style={styles.container}>
      <div style={styles.wrapper}>
        {/* ===== 소개 ===== */}
        <section style={styles.intro}>
          <img src={profileImg} alt="profile" style={styles.profileImg} />
          <div style={styles.introText}>
            <h2 style={styles.name}>차현탁</h2>
            <p style={styles.introDesc}>
              Java와 Spring 기반의 웹 개발을 중심으로 학습하며 총 세 번의 팀 프로젝트를 진행했고,
              <br />
              각 프로젝트마다 서로 다른 주제와 요구사항을 바탕으로 웹 서비스 전반을 구현했습니다.
              <br />
              또한 Python을 활용한 머신러닝·딥러닝 학습을 기반으로 LLM을 활용한 팀 및 개인 프로젝트를 수행하며 AI 기술을 실제 서비스에 적용하는 경험을 쌓았습니다.
            </p>
            <p style={styles.introDesc}>
              Java 과정의 세 프로젝트에서는 팀장으로 참여하여 일정 관리와 역할 분담, 팀원 간 소통을 담당했으며,
              이를 통해 협업과 커뮤니케이션이 프로젝트 완성도에 미치는 영향을 깊이 이해하게 되었습니다.
              이러한 경험을 바탕으로 단순한 기능 구현을 넘어, 팀과 함께 문제를 해결하고 결과를 만들어가는 개발자가 되고자 합니다.
            </p>
          </div>
        </section>

        {/* ===== 프로젝트 ===== */}
        <h1 style={styles.title}>프로젝트</h1>

        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              ...styles.card,
              ...(p.featured ? styles.featured : {}),
            }}
          >
            {p.img && (
              <img src={p.img} alt={p.title} style={styles.projectImg} />
            )}

            <div style={styles.cardContent}>
              <h2 style={styles.projectTitle}>
                {p.featured && "⭐ "}
                {p.title}
              </h2>

              <p style={styles.desc}>{p.desc}</p>
              <p style={styles.detail}>{p.detail}</p>

              <div style={styles.tags}>
                {p.tags.map((tag) => (
                  <span key={tag} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {p.trouble && (
                <div style={styles.trouble}>
                  <h3 style={styles.troubleTitle}>트러블슈팅</h3>
                  <p><b>문제</b> · {p.trouble.problem}</p>
                  <p><b>원인</b> · {p.trouble.cause}</p>
                  <p><b>해결</b> · {p.trouble.solve}</p>
                  <p><b>결과</b> · {p.trouble.result}</p>
                </div>
              )}

              <div style={styles.links}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.githubBtn}
                >
                  GitHub (팀 전체) →
                </a>

                <a
                  href={p.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.notionBtn}
                >
                  Notion (개인 기여) →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  /* ===== 전체 레이아웃 ===== */
  wrapper: {
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
  },
  container: {
    minHeight: "100vh",
    width: "100%",
    background: "radial-gradient(circle at top, #020617, #00010a)",
    color: "#e5e7eb",
    padding: "100px 24px",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  /* ===== 소개 ===== */
  intro: {
    display: "flex",
    gap: 48,
    marginBottom: 120,
    alignItems: "center",
  },
  profileImg: {
    width: 220,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #60a5fa",
    boxShadow: "0 0 24px rgba(96,165,250,0.35)",
  },
  introText: {
    maxWidth: 720,
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: 30,
    marginBottom: 12,
  },
  introDesc: {
    lineHeight: 2,
    opacity: 0.9,
    marginBottom: 20,
  },

  /* ===== 섹션 타이틀 ===== */
  title: {
    fontSize: 36,
    marginBottom: 64,
  },

  /* ===== 프로젝트 카드 ===== */
  card: {
    display: "flex",
    gap: 36,
    padding: 40,
    marginBottom: 72,
    borderRadius: 22,
    background: "rgba(2,6,23,0.9)",
    border: "1px solid rgba(148,163,184,0.25)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    overflow: "hidden",
  },

  /* 대표 프로젝트 강조 */
  featured: {
    border: "2px solid #60a5fa",
    boxShadow: "0 0 0 1px rgba(96,165,250,0.4)",
  },

  /* ===== 프로젝트 이미지 ===== */
  projectImg: {
    width: 320,
    height: 190,
    borderRadius: 16,
    objectFit: "cover",
    flexShrink: 0,
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },

  /* ===== 카드 내용 ===== */
  cardContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  projectTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 700,
  },
  desc: {
    opacity: 0.95,
  },
  detail: {
    opacity: 0.75,
    marginTop: 6,
    lineHeight: 1.7,
  },

  /* ===== 태그 ===== */
  tags: {
    display: "flex",
    gap: 10,
    marginTop: 14,
    flexWrap: "wrap",
  },
  tag: {
    padding: "6px 14px",
    borderRadius: 999,
    border: "1px solid rgba(96,165,250,0.4)",
    fontSize: 12,
    color: "#bfdbfe",
    background: "rgba(2,6,23,0.7)",
  },

  /* ===== 트러블슈팅 ===== */
  trouble: {
    marginTop: 24,
    padding: 20,
    borderRadius: 14,
    background: "rgba(15,23,42,0.6)",
    border: "1px solid rgba(148,163,184,0.25)",
    fontSize: 14,
    lineHeight: 1.7,
  },
  troubleTitle: {
    marginBottom: 8,
    color: "#93c5fd",
    fontSize: 16,
    fontWeight: 600,
  },

  /* ===== 링크 버튼 ===== */
  links: {
    display: "flex",
    gap: 14,
    marginTop: 24,
    flexWrap: "wrap",
  },

  /* 🔵 GitHub (팀 전체) */
  githubBtn: {
    padding: "12px 26px",
    background: "linear-gradient(90deg, #2563eb, #3b82f6)",
    borderRadius: 10,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    boxShadow: "0 6px 20px rgba(37,99,235,0.45)",
  },

  /* ⚫ Notion (개인 기여) */
  notionBtn: {
    padding: "12px 26px",
    background: "#111827",
    borderRadius: 10,
    color: "#e5e7eb",
    textDecoration: "none",
    border: "1px solid rgba(148,163,184,0.35)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
  },
};
