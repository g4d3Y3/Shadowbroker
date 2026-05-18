<p align="center">
  <h1 align="center">🛰️ S H A D O W B R O K E R</h1>
  <p align="center"><strong>全球威胁拦截 — 实时地理空间情报平台</strong></p>
  <p align="center">

  </p>
</p>

---

[![ShadowBroker](/uploads/46f99d19fa141a2efba37feee9de8aab/Title.jpg)](https://github.com/user-attachments/assets/248208ec-62f7-49d1-831d-4bd0a1fa6852)

**ShadowBroker** 是一个去中心化的情报平台，将来自 60+ 实时情报源的跨域 OSINT 遥测数据聚合到一张暗色作战地图界面中。飞机、船舶、卫星、冲突区域、CCTV 网络、GPS 干扰、联网设备、警用扫描器、Mesh 无线电节点以及突发地缘政治事件——全部在一张屏幕上实时更新，同时还提供混淆通信协议和信息交换基础设施。

基于 **Next.js**、**MapLibre GL**、**FastAPI** 和 **Python** 构建。包含 35+ 个可切换的数据图层，包括 SAR 地表变化检测。支持多种视觉模式（DEFAULT / SATELLITE / FLIR / NVG / CRT）。右键点击地球上的任意位置即可获取国家档案、国家元首查询以及最新的 Sentinel-2 卫星照片。不会收集或传输任何用户数据——仪表盘完全在浏览器中运行，对接自托管后端。

专为分析师、研究人员、无线电爱好者和所有希望在一个地图上看到所有公开信号的人而设计。


## 为什么会有这个项目

全球范围内已有大量公开的遥测数据——飞机 ADS-B 广播、船舶 AIS 信号、卫星轨道数据、地震传感器、Mesh 无线电网络、警用扫描器、环境监测站、互联网基础设施遥测等。这些数据分散在数十种工具和 API 中。ShadowBroker 将它们全部整合到一个界面中。

本项目并未引入新的监控能力——它只是聚合和可视化已有的公开数据集。项目完全开源，任何人都可以审计访问了哪些数据以及如何使用。不会收集或传输任何用户数据——所有内容都在本地运行，对接自托管后端。无遥测、无分析、无账户。

### Shodan 连接器

ShadowBroker 包含一个可选的 Shodan 连接器，供用户提供自己的 API 访问。Shodan 结果使用您自己的 `SHODAN_API_KEY` 获取，作为本地调查覆盖层呈现（不会合并到核心数据源中），并且受 Shodan 服务条款的约束。

---

## 有趣的用例

* **追踪空军一号**、亿万富翁和独裁者的私人飞机，以及所有广播 ADS-B 的军用加油机、ISR 和战斗机。空军一号及所有随行的总统/副总统专机从起飞那一刻起就被高亮标记并持续监控。
* **将 AI Agent 作为联合分析师接入**——通过 ShadowBroker 的 HMAC 签名智能体命令通道——支持 OpenClaw 及任何支持该协议的其他 Agent（Claude、GPT、LangChain、自定义 Agent）。Agent 可以完全读写所有 35+ 数据图层、放置标记、控制地图、SAR 地表变化检测、Mesh 网络和警报投递。它能看到操作员看到的一切，并能在地图上实时执行操作。
* **在 InfoNet 测试网上通信**——首个嵌入 OSINT 工具的去中心化情报 Mesh 网络。通过 Gate 身份进行混淆消息传递、Dead Drop 点对点交换，以及内置的终端 CLI。无需账户，无需注册。隐私尚未得到保证——这是一个实验性测试网——但协议已上线并正在加固中。
* **右键点击地球任意位置**获取国家档案（国家元首、人口、语言）、维基百科摘要以及最新的 10m 分辨率 Sentinel-2 卫星照片
* **点击 KiwiSDR 节点**直接在仪表盘中收听实时短波广播。点击警用扫描器源，一键监听。
* **观看 11,000+ 个 CCTV 摄像头**，覆盖 6 个国家——伦敦、纽约、加州、西班牙、新加坡等——在地图上实时直播
* **实时查看 GPS 干扰区域**——基于飞机应答器数据的 NAC-P 精度退化分析
* **监控头顶卫星**，按任务类型颜色编码——军事侦察、SIGINT、SAR、预警、空间站——包含 SatNOGS 和 TinyGS 地面站网络
* **追踪海军交通**，包括 25,000+ AIS 船舶、Global Fishing Watch 提供的渔业活动，以及亿万富翁超级游艇
* **关注地震、火山喷发、活跃野火**（NASA FIRMS）、恶劣天气警报和全球空气质量数据
* **绘制军事基地、35,000+ 座发电厂**、2,000+ 个数据中心和互联网中断区域——自动交叉引用
* **连接 Meshtastic Mesh 无线电节点**和 APRS 业余无线电网络——在地图上可见并集成到 Mesh Chat 中
* **通过 SAR（合成孔径雷达）穿透云层检测地表变化**——毫米级地面形变、洪水范围、植被扰动和损毁评估，数据来自 NASA OPERA 和 Copernicus EGMS。定义您自己的监测区域并获取异常警报。使用 NASA Earthdata 账户即可免费使用。
* **切换视觉模式**——DEFAULT、SATELLITE、FLIR（热成像）、NVG（夜视）、CRT（复古终端）——通过 STYLE 按钮
* **实时追踪美国（Amtrak）和欧洲（DigiTraffic）的列车**
* **通过自动 GDELT 新闻抓取估算美国航母位置**——目前没有其他开源工具能做到这一点
* **通过 Shodan 搜索全球联网设备**——摄像头、SCADA 系统、数据库——作为实时覆盖层绘制在地图上


---

## ⚡ 快速开始（Docker）

```bash
git clone https://github.com/bigbodycobain/Shadowbroker.git
cd Shadowbroker
docker compose pull
docker compose up -d
```

打开 `http://localhost:3000` 查看仪表盘！*（需要 [Docker Desktop](https://www.docker.com/products/docker-desktop/) 或 Docker Engine）*

> **后端端口已被占用？** 浏览器只需要端口 `3000`，但后端 API 也会在主机端口 `8000` 上发布用于本地诊断。如果另一个应用已使用 `8000`，请在 `docker-compose.yml` 旁边创建或编辑 `.env` 文件并设置 `BACKEND_PORT=8001`，然后运行 `docker compose up -d`。

> **几分钟后新闻/UAP/基地/废水数据空白？** 使用 `docker events --since 30m --filter container=shadowbroker-backend --filter event=oom` 检查后端是否因 OOM 重启。默认的 compose 文件给后端分配了 4GB 内存；如果您的宿主机内存较小，请减少启用的数据源或设置 `BACKEND_MEMORY_LIMIT=3G`，同时预期较慢/较重图层的预热时间会更长。

> **Podman 用户：** Podman 可用，但 `podman compose` 是一个包装器，仍需要安装 Compose 提供程序。在 Windows/WSL 上，如果看到 `looking up compose provider failed`，请安装 `podman-compose` 并在克隆的 `Shadowbroker` 文件夹中运行 `podman-compose pull` 后跟 `podman-compose up -d`。在 Linux/macOS/WSL 终端中，也可以使用 `./compose.sh --engine podman pull` 和 `./compose.sh --engine podman up -d`。

---

## 🔄 **如何更新**

ShadowBroker 使用预构建的 Docker 镜像——无需本地构建。更新只需几秒：

```bash
docker compose pull
docker compose up -d
```

就是这样。`pull` 获取最新镜像，`up -d` 重启容器。

> **从旧版本升级？** 先拉取最新的仓库代码，再拉取镜像：
>
> ```bash
> git pull origin main
> docker compose down
> docker compose pull
> docker compose up -d
> ```
>
> Podman 用户应运行等效的 provider 命令，例如 `podman-compose pull` 和 `podman-compose up -d`，或在 bash 兼容的终端中使用 `./compose.sh --engine podman pull` 和 `./compose.sh --engine podman up -d`。

### ⚠️ **卡在旧版本？**

**如果 `git pull` 失败或 `docker compose up` 一直从源码构建而不是拉取镜像**，说明您的克隆版本早于 2026 年 3 月的一次仓库迁移，该迁移重写了提交历史。普通的 `git pull` 无法修复此问题。请运行：

```bash
# 备份您想保留的任何本地配置（.env 等）
cd ..
rm -rf Shadowbroker
git clone https://github.com/bigbodycobain/Shadowbroker.git
cd Shadowbroker
docker compose pull
docker compose up -d
```

**如何判断您是否受影响：** 如果 `docker compose up` 显示 `RUN apt-get`、`RUN npm ci` 或 `RUN pip install`——说明它在从源码构建而不是拉取预构建镜像。您需要重新克隆。

**其他故障排除：**

* **强制重新拉取：** `docker compose pull --no-cache`
* **清理旧镜像：** `docker image prune -f`
* **查看日志：** `docker compose logs -f backend`

---

### **☸️ Kubernetes / Helm（高级）**

对于高可用性部署或家庭实验室集群，ShadowBroker 支持通过 **Helm** 部署。此 Chart 基于 `bjw-s-labs` 模板，为后端和前端提供了健壮的模块化设置。

**1. 添加仓库：**
```bash
helm repo add bjw-s-labs https://bjw-s-labs.github.io/helm-charts/
helm repo update
```

**2. 安装 Chart：**
```bash
# 从本地 helm/chart 目录安装
helm install shadowbroker ./helm/chart --create-namespace --namespace shadowbroker
```

**3. 主要特性：**
* **模块化架构：** 可分别扩展情报后端和 HUD 前端。
* **安全上下文：** 使用受限 UID（1001）运行以强化容器安全。
* **Ingress 就绪：** 兼容 Traefik、Cert-Manager 和 Gateway API，实现安全的外部访问。

*特别感谢 [@chr0n1x](https://github.com/chr0n1x) 贡献了初始 Kubernetes 架构。*

---

## 实验性测试网 — 无隐私保障

ShadowBroker v0.9.7 包含 **InfoNet**（去中心化情报 Mesh 网络 + Sovereign Shell 治理经济）、**智能体 AI 命令通道**（支持 OpenClaw 及任何 HMAC 签名 Agent）、**Time Machine 快照回放**和 **SAR 卫星地表变化检测**。这是一个**实验性测试网**——不是私密通讯工具，也不是生产级治理系统。

| 通道 | 隐私状态 | 详情 |
|---|---|---|
| **Meshtastic / APRS** | **公开** | 射频无线电传输本质上是公开且可被截获的。 |
| **InfoNet Gate Chat** | **混淆** | 消息通过 Gate 身份和规范负载签名进行混淆，但**不是**端到端加密的。元数据不会被隐藏。 |
| **Dead Drop 私信** | **当前最强级别** | 基于令牌的纪元邮箱，带有 SAS 词汇验证。当前构建中最强的通道，但尚未达到完全私密的可信水平。 |
| **Sovereign Shell 治理** | **公开账本** | 请愿书、投票、升级哈希和争议质押均为公开哈希链上的签名事件。通过 Gate 身份实现假名化，但治理行为是有意可观测的。 |
| **隐私原语（RingCT / 隐形地址 / DEX）** | **尚未接入** | 锁定的协议合约已就位，但加密方案尚未选定。隐私核心 Rust crate 是未来冲刺阶段的集成目标。 |

**请勿在任何通道上传输敏感信息。** 目前将所有通道视为开放和公开的。端到端加密和更深入的本地/Tauri 加固是接下来的里程碑。如果您分叉此项目，请保持这些标签不变，并且不要做出超出实现支持范围的更强的隐私声明。

> **要全面了解 Mesh 实际防御了什么以及没有防御什么，请阅读
> [威胁模型](docs/mesh/threat-model.md)和
> [声明核对表](docs/mesh/claims-reconciliation.md)。以上
> 每句话都在那里映射到了执行（或不执行）该声明的代码路径。**

---

## ✨ 功能特性

### 🧅 InfoNet — 去中心化情报 Mesh 网络 + Sovereign Shell（v0.9.7 扩展）

首个直接构建在 OSINT 平台内的去中心化情报通信和治理层。无需账户，无需注册，无需身份。v0.9.7 将 InfoNet 从聊天层升级为完整的治理经济体系，并明确了通往隐私保护型去中心化情报平台的路径。

**通信层（v0.9.6 起）：**

* **InfoNet 实验性测试网** — 一个全球性的混淆消息中继。任何运行 ShadowBroker 的人都可以在 InfoNet 上发送和接收消息。消息通过 Wormhole 中继层传输，包含 Gate 身份、Ed25519 规范负载签名和传输混淆。
* **Mesh Chat 面板** — 三标签界面：**INFONET**（带混淆传输的 Gate 聊天）、**MESH**（Meshtastic 无线电集成）、**DEAD DROP**（基于令牌的纪元邮箱点对点消息交换——当前最强通道）。
* **Gate 身份系统** — 带有 Ed25519 签名密钥、预密钥包、SAS 词汇联系人验证和滥用报告功能的假名身份。
* **Mesh 终端** — 内置 CLI：`send`、`dm`、市场命令、Gate 状态检查。可拖拽面板，可最小化到顶栏。输入 `help` 查看所有命令。
* **加密栈** — Ed25519 签名、X25519 Diffie-Hellman、AESGCM 加密配合 HKDF 密钥派生、哈希链承诺系统。双棘轮 DM 框架正在进行中。

**Sovereign Shell — 治理经济体系（v0.9.7 新增）：**

* **请愿书 + 治理 DSL** — 通过签名请愿书实现链上参数变更。类型安全的负载执行器，支持 `UPDATE_PARAM`、`BATCH_UPDATE_PARAMS`、`ENABLE_FEATURE` 和 `DISABLE_FEATURE`。可调参数通过投票更改——无需部署代码。
* **升级哈希治理** — 需要新逻辑（而不仅仅是参数变更）的协议升级，对已验证版本的 SHA-256 哈希进行投票。80% 绝对多数、40% 法定人数、67% 重节点激活。生命周期：签名 → 投票 → 挑战窗口 → 等待就绪 → 激活。
* **决议与争议市场** — 对市场决议结果（是 / 否 / 数据不可用）进行质押，打开带有保证金证据的争议，并对争议确认或反转进行质押。每一行的提交状态保持隔离，因此并发操作不会共享同一个进行中的插槽。
* **证据提交** — 带有保证金的证据包，客户端 SHA-256 规范化与 Python `repr()` 完全匹配，因此哈希值在链中能完美往返。
* **Gate 暂停 / 关闭 / 申诉** — 暂停或关闭 Gate 的提交表单，带有可重复使用的申诉流程，自动指向待处理的请愿书。
* **引导合格节点一票制** — 前 100 个市场通过每合格节点一票而非按质押权重进行决议。资格条件：身份年龄 ≥ 3 天，不在预测者排除集中，有效的 Argon2id 工作量证明（仅限重节点）。达到 1000 个节点后转换为质押决议。
* **双层状态 + 纪元最终性** — 第一层事件以 CRDT 方式传播以实现低延迟；第二层事件需要纪元最终性才能被处理。身份轮换、渐进式处罚、里程碑增长和宪法不变量通过 `MappingProxyType` 强制执行。
* **自适应轮询** — Sovereign Shell 视图在活跃投票 / 挑战 / 激活阶段每 8 秒轮询一次，空闲时每 30–60 秒轮询一次。无需 WebSocket 层也能感觉实时。
* **逐字诊断** — 每个写入按钮都会显示后端逐字的拒绝原因。不会出现不透明的"已拒绝"提示。

**隐私原语跑道（v0.9.7 新增）：**

* **功能密钥 — 匿名公民身份证明** — 公民可以在不暴露 InfoNet 身份的情况下证明"我是 InfoNet 公民"。6 个组件中已有 5 个完成：无效器、挑战-响应、两阶段提交收据、枚举拒绝码、批量结算。通过盲签名的发行正在等待原语决策（RSA 盲签名 vs BBS+ vs U-Prove vs Idemix）。
* **锁定的协议合约** — `services/infonet/privacy/contracts.py` 中稳定的环签名、隐形地址、Pedersen 承诺、范围证明和 DEX 匹配接口。`privacy-core` Rust crate 是集成目标——隐私模块的调用者无需知道哪个方案是激活的。
* **Sprint 11+ 路径** — 当加密方案选定后，原语将接入锁定的协议合约，无需 API 变更。

> **实验性测试网 — 无隐私保障：** InfoNet 消息是混淆的，但**不是**端到端加密的。Mesh 网络（Meshtastic/APRS）**不**是私密的——无线电传输本质上是公开的。隐私原语合约已搭建框架但尚未接入。请勿在任何通道上发送敏感信息。目前将所有通道视为开放和公开的。

### 🔍 Shodan 设备搜索（v0.9.6 新增）

* **互联网设备搜索** — 直接从 ShadowBroker 查询 Shodan。按关键词、CVE、端口或服务搜索——结果作为实时覆盖层绘制在地图上
* **可配置标记** — Shodan 结果的形状、颜色和大小均可自定义
* **用户自有 API** — 使用您自己的 `SHODAN_API_KEY`；结果作为本地调查覆盖层呈现

### 🛩️ 航空追踪

* **商业航班** — 通过 OpenSky Network 实时定位（约 5,000+ 架飞机）
* **私人飞机** — 轻型通用航空、涡轮螺旋桨飞机、商务喷气机分别追踪
* **私人喷气机** — 高净值个人飞机，带机主识别信息
* **军用飞行器** — 通过 adsb.lol 军事终端获取加油机、ISR、战斗机、运输机
* **飞行轨迹累积** — 所有追踪飞机的持久轨迹
* **盘旋模式检测** — 自动标记盘旋飞机（总转角 > 300°）
* **飞机分类** — 形状精确的 SVG 图标：客机、涡轮螺旋桨飞机、商务喷气机、直升机
* **地面检测** — 高度低于 100ft AGL 的飞机显示为灰色图标

### 🚢 海事追踪

* **AIS 船舶流** — 通过 aisstream.io WebSocket 获取 25,000+ 艘船舶（实时）
* **船舶分类** — 货船、油轮、客船、游艇、军用船舶类型，带有颜色编码图标
* **航母打击群追踪器** — 所有 11 艘现役美国海军航母，带有 OSINT 估算位置。目前没有其他开源工具能做到这一点。
  * 自动 GDELT 新闻抓取解析航母动态报道以估算位置
  * 50+ 个地理区域到坐标的映射（例如"东地中海"→ 经纬度）
  * 磁盘缓存位置，UTC 时间 00:00 和 12:00 自动刷新
* **邮轮与客运船舶** — 邮轮和渡轮的专用图层
* **渔业活动** — Global Fishing Watch 船舶事件（新增）
* **集群显示** — 低缩放级别时船舶聚合并显示数量标签，放大后解散

### 🚆 铁路追踪（v0.9.6 新增）

* **Amtrak 列车** — 美国各地 Amtrak 列车的实时位置，包含速度、航向、路线和状态
* **欧洲铁路** — DigiTraffic 集成的欧洲列车位置

### 🛰️ 太空与卫星

* **轨道追踪** — 通过 CelesTrak TLE 数据和 SGP4 传播算法实时获取卫星位置（2,000+ 颗活跃卫星，无需 API 密钥）
* **任务类型分类** — 按任务颜色编码：军事侦察（红色）、SAR（青色）、SIGINT（白色）、导航（蓝色）、预警（洋红色）、商用成像（绿色）、空间站（金色）
* **SatNOGS 地面站** — 业余卫星地面站网络，带有实时观测数据（新增）
* **TinyGS LoRa 卫星** — LoRa 卫星星座追踪（新增）

### 🌍 地缘政治与冲突

* **全球事件** — GDELT 驱动的冲突事件聚合（最近 8 小时，约 1,000 条事件）
* **乌克兰前线** — DeepState Map 实时战线 GeoJSON
* **乌克兰空袭警报** — 实时区域空袭警报（新增）
* **SIGINT/RISINT 新闻源** — 实时 RSS 聚合，来自多个情报来源，用户可自定义订阅源（最多 20 个来源，可配置优先级权重 1-5）
* **区域档案** — 右键点击地球任意位置获取即时情报简报：
  * 国家概况（人口、首都、语言、货币、面积）
  * 现任国家元首与政体类型（实时 Wikidata SPARQL 查询）
  * 本地维基百科摘要及缩略图
  * 最新的 Sentinel-2 卫星照片，含拍摄日期和云量（10m 分辨率）

### 🛰️ 卫星影像

* **NASA GIBS（MODIS Terra）** — 每日真彩色卫星影像覆盖层，带 30 天时间滑块、播放/暂停动画和不透明度控制（约 250m/像素）
* **高分辨率卫星（Esri）** — 通过 Esri World Imagery 获取亚米级分辨率影像——放大查看建筑和地形细节（缩放级别 18+）
* **Sentinel-2 情报卡** — 右键点击地图任意位置，显示浮动的 Sentinel-2 卫星照片情报卡，包含拍摄日期、云量百分比和可点击的全分辨率图像（10m 分辨率，约每 5 天更新一次）
* **Sentinel Hub Process API** — Copernicus CDSE 卫星影像，支持 OAuth2 令牌流程（新增）
* **VIIRS 夜光** — 夜间灯光变化检测覆盖层（新增）
* **5 种视觉模式** — 通过 STYLE 按钮切换整个地图的美学风格：
  * **DEFAULT** — 深色 CARTO 底图
  * **SATELLITE** — 亚米级 Esri World Imagery
  * **FLIR** — 热成像美学（反转灰度）
  * **NVG** — 夜视绿色荧光
  * **CRT** — 复古终端扫描线覆盖

### 🛰️ SAR 地表变化检测（新增）

* **合成孔径雷达图层** — 穿透云层、在夜间、在地球任何地方检测地表变化。两种模式，均免费：
  * **模式 A（目录）** — 来自 Alaska Satellite Facility 的免费 Sentinel-1 场景元数据。无需账户。显示雷达在您关注区域上空过境的时间以及下一次过境时间。
  * **模式 B（完整异常）** — 来自 NASA OPERA（DISP、DSWx、DIST-ALERT）和 Copernicus EGMS 的实时地表变化警报。需要免费的 NASA Earthdata 账户——应用内向导可在不到一分钟内引导您完成设置。
* **异常类型** — 地表形变（毫米级沉降、滑坡）、地表水变化（洪水范围）、植被扰动（森林砍伐、火灾痕迹、爆炸弹坑）、损毁评估（UNOSAT/Copernicus EMS 验证）以及相干性变化检测
* **地图可视化** — 按类型颜色编码的异常标记：橙色（形变）、青色（水）、绿色（植被）、红色（损毁）、紫色（相干性）。关注区域边界绘制为虚线多边形，带有基于类别的颜色。点击任何标记可查看详细信息弹出窗口，包含幅度、置信度、求解器、场景数量和来源链接。
* **AOI 编辑器** — 直接从地图上定义关注区域。在 SAR 图层激活时点击"EDIT AOIs"按钮，然后使用十字准星工具在地图上点击放置 AOI 中心。设置名称、半径（1–500 km）和类别。AOI 立即显示在地图上。
* **OpenClaw 集成** — AI Agent 可以检查 SAR 异常详情（`sar_pin_click`）并将操作员地图飞行到任何 AOI 中心（`sar_focus_aoi`）——支持协作分析工作流。
* **设置面板** — 设置中的专属 SAR 标签页显示模式 A/B 状态、OpenClaw 集成状态，并支持一键撤销 Earthdata 凭据。

### 📻 软件定义无线电与 SIGINT

* **KiwiSDR 接收器** — 500+ 个公共 SDR 接收器分布在全球，带有聚类的琥珀色标记
* **实时无线电调谐器** — 点击任何 KiwiSDR 节点，在 SIGINT 面板中直接打开嵌入式 SDR 调谐器
* **元数据显示** — 节点名称、位置、天线类型、频段、活跃用户数
* **Meshtastic Mesh 无线电** — 基于 MQTT 的 Mesh 无线电集成，带节点地图，集成到 Mesh Chat 中（新增）
* **APRS 集成** — 通过 APRS-IS TCP 数据流的业余无线电定位（新增）
* **GPS 干扰检测** — 实时分析飞机 NAC-P（导航精度类别）值
  * 基于网格的聚合识别干扰区域
  * 带有"GPS JAM XX%"严重程度标签的红色覆盖方块
* **无线电截听面板** — 扫描器风格 UI，包含 OpenMHZ 警用/消防扫描器源。点击任何系统即可实时收听。扫描模式自动循环切换活跃的源。一键窃听真实的应急通信。

### 📷 监控

* **CCTV Mesh 网络** — 来自 6 个国家 13 个数据源的 11,000+ 个实时交通摄像头：
  * 🇬🇧 Transport for London JamCams
  * 🇺🇸 NYC DOT、Austin TX（TxDOT）
  * 🇺🇸 California（12 个 Caltrans 区）、Washington State（WSDOT）、Georgia DOT、Illinois DOT、Michigan DOT
  * 🇪🇸 Spain DGT National（20 个城市）、Madrid City（357 个摄像头，通过 KML）
  * 🇸🇬 Singapore LTA
  * 🌍 Windy Webcams
* **数据源渲染** — 自动检测和渲染视频、MJPEG、HLS、嵌入、卫星瓦片和图像源
* **集群地图显示** — 绿色圆点聚合并带有数量标签，放大后解散

### 🔥 环境与灾害监测

* **NASA FIRMS 火灾热点（24h）** — 来自 NOAA-20 VIIRS 卫星的 5,000+ 个全球热异常，每次更新循环。火焰形状图标按火灾辐射功率（FRP）颜色编码：黄色（低）、橙色、红色、深红色（强烈）。低缩放级别时聚合并带有火焰形状的集群标记。
* **火山** — Smithsonian 全球火山计划的全新世火山全球分布（新增）
* **天气警报** — 带有紧急程度/严重程度指示器的恶劣天气多边形（新增）
* **空气质量（PM2.5）** — 全球 OpenAQ 站点的实时颗粒物读数（新增）
* **地震（24h）** — USGS 实时地震数据，带有按震级缩放的比例标记
* **太空天气徽章** — 底部状态栏中的实时 NOAA 地磁暴指示器。按 Kp 指数颜色编码：绿色（安静）、黄色（活跃）、红色（风暴 G1–G5）。数据来自 SWPC 行星 K 指数 1 分钟数据源。

### 🏗️ 基础设施监测

* **互联网中断监测** — 来自 Georgia Tech IODA 的区域互联网连接警报。受影响区域显示为灰色标记，带有严重程度百分比。仅使用可靠数据源（BGP 路由表、主动 Ping 探测）——不使用望远镜或插值数据。
* **数据中心地图** — 从精选数据集中绘制的 2,000+ 个全球数据中心。聚类的紫色标记，带有机架服务器图标。点击查看运营商、位置，并按国家自动交叉引用互联网中断数据。
* **军事基地** — 全球军事设施和导弹设施数据库（新增）
* **发电厂** — 来自 WRI 数据库的 35,000+ 个全球发电厂（新增）

### 🌐 附加图层与工具

* **昼夜循环** — 显示全球日照/黑暗的太阳终止线覆盖层
* **全球市场行情** — 实时金融市场指数（可最小化）
* **测量工具** — 地图上的点对点距离和方位角测量
* **LOCATE 搜索栏** — 按坐标（31.8, 34.8）或地名（德黑兰、霍尔木兹海峡）搜索，直接飞到任意位置——通过 OpenStreetMap Nominatim 进行地理编码

![Gaza](https://gitlab.com/bigbodycobain/Shadowbroker/uploads/c55a0c8d49e5e05c6cd094279e6e089b/gaza-screenshot.jpg)

### 🤖 智能体 AI 命令通道 — OpenClaw 及兼容 Agent（v0.9.7 扩展）

ShadowBroker 提供了一个**双向智能体 AI 命令通道**——一个已签名的、按层级分级的桥梁，让任何兼容的 AI Agent 都能完全读写情报平台。**OpenClaw 是参考 Agent**，但该通道是一个开放协议：任何使用 HMAC-SHA256 签名请求的 LLM 驱动 Agent（Claude Code、GPT、LangChain、自定义 Python/TypeScript 客户端或您自己的集成）都可以作为分析师连接到平台，看到与操作员相同的数据并在地图上执行操作。ShadowBroker **不**捆绑 LLM、Agent 运行时或模型权重——它提供交互界面，您自带 Agent。

v0.9.7 将 ShadowBroker 从一个人观看的仪表盘变成了任何 Agent 都可以操作的情报界面。

**通道传输（v0.9.7 新增）：**

* **单一命令通道** — `POST /api/ai/channel/command` 接受 `{cmd, args}` 并分发到任何注册的工具。
* **批量并发执行** — `POST /api/ai/channel/batch` 在一次请求中接受最多 20 个命令。后端并发执行它们并返回汇总结果图。相比顺序调用，可将 Agent 延迟降低一个数量级。
* **层级访问控制** — `OPENCLAW_ACCESS_TIER` 控制 Agent 可以调用哪些命令：`restricted` 暴露只读集，`full` 添加写入和注入操作。发现端点返回 `available_commands`，因此 Agent 可以自省其自身能力。
* **HMAC-SHA256 签名** — 每个命令都使用 `HMAC-SHA256(secret, METHOD|path|timestamp|nonce|sha256(body))` 签名，带有时间戳 + nonce 重放保护和请求完整性。支持本地模式（无需配置）和远程模式（Agent 在其他机器/VPS 上）。

**能力：**

* **完整遥测访问** — Agent 可查询所有 35+ 数据图层：航班、船舶、卫星、SIGINT、冲突事件、地震、火灾、废水、预测市场等。快速和慢速层级端点返回带有地理坐标、时间戳和来源归属的丰富数据。
* **AI 情报标记** — 直接在操作员地图上放置颜色编码的调查标记。14 种标记类别（威胁、异常、军事、海事、航空、SIGINT、基础设施等），带有置信度评分、TTL 过期时间、来源 URL 以及最多一次批量放置 100 个标记。
* **地图控制** — 将操作员的地图视图飞到任意坐标，触发卫星影像查找，打开区域档案。Agent 可以实时将操作员的注意力引导到特定位置。
* **SAR 地表变化** — 查询 SAR 异常数据源、检查标记详情、管理 AOI 并将地图飞到监测区域。Agent 可以监测地表形变、洪水范围或损毁，并将异常提升为标记。
* **原生图层注入** — 将自定义数据直接推送到 ShadowBroker 的原生图层（CCTV 摄像头、船舶、SIGINT 节点、军事基地等），使 Agent 发现的来源与真实数据源并列显示。
* **Wormhole Mesh 参与** — Agent 可以加入去中心化的 InfoNet、发布签名消息、加入加密的 Gate 频道、发送/接收加密私信，并与 Meshtastic 无线电和 Dead Drop 交互——作为完整的 Mesh 对等节点运行。
* **Sovereign Shell 参与（v0.9.7）** — 提交请愿书、签名并投票治理变更、对决议和争议进行质押、表明重节点升级就绪状态——全部通过编程方式完成，全部按层级和 HMAC 控制。Agent 成为去中心化情报经济体系中的一级参与者。
* **地理编码与邻近扫描** — 将地名解析为坐标，然后扫描半径内的所有图层以获取完整的邻近摘要。
* **位置附近的新闻与 GDELT** — 获取任意坐标附近的 GDELT 冲突事件和聚合新闻文章，用于区域态势感知。
* **警报投递** — 向 Discord Webhook 和 Telegram 频道发送品牌化的情报简报、警告和威胁通知。
* **情报报告** — 生成结构化报告，包含摘要统计、顶级军事航班、相关性分析、地震活动、SIGINT 计数和标记清单。
* **可审计** — 每次通道调用都会被记录；操作员可以查看 Agent 执行了哪些操作。

**连接 Agent：** 打开左侧边栏的 AI Intel 面板，点击 **Connect Agent**，复制 HMAC 密钥。然后，将任何兼容的 Agent 指向该通道——对于 OpenClaw，从 OpenClaw 技能包导入 `ShadowBrokerClient`；对于其他 Agent，使用上述相同的 HMAC 合约（时间戳 + nonce + 正文摘要，按层级控制）。通道就是协议，而不是 Agent 本身。

### ⏱️ Time Machine — 快照回放（v0.9.7 新增）

一种用于整个遥测数据流的媒体式传输控制。将实时地图视为可以快进、暂停和回放的录像。

* **实时 ↔ 快照切换** — 切换到快照模式会立即暂停全局轮询循环；切换回实时模式会使 ETag 失效并强制刷新快速和慢速层级，使仪表盘无闪烁地追上实时数据。
* **小时索引** — 每个捕获的快照都按其小时时段进行索引，包含 `count`、`latest_id`、`latest_ts` 和完整的 `snapshot_ids` 列表。直接从时间线滑块跳到任意捕获的时间戳。
* **帧插值** — 移动实体（飞机、船舶、卫星、军用飞行器）在回放过程中在录制的帧之间平滑插值，即使快照稀疏也能保持运动连续。
* **可变回放速度** — 以可调速度步进、播放、快进和快退保存的遥测数据。
* **配置文件感知** — 每个快照记录捕获时活跃的隐私配置文件，因此回放忠实地反映了该配置文件下的操作员会看到的内容。
* **操作员侧，非服务器侧** — 快照本地存储在后端；第三方永远看不到回放时间线。

### 📦 API 密钥面板 — 路径优先，只读（v0.9.7 新增）

设置 → API 密钥现在是一个只读注册表。密钥值永远不会到达浏览器进程——甚至连混淆前缀都不会。面板显示：

* 后端 `.env` 文件的绝对路径，由 `Path(__file__).resolve()` 解析——在所有操作系统、所有驱动器、所有安装位置上均有效（Linux `/home/...`、macOS `/Users/...`、Windows 任意驱动器、Docker 容器、云 VM）。
* 路径本身的 `[存在]` / `[首次保存时创建]` / `[不可写 — 请手动编辑]` 指示器。
* `.env.example` 模板的路径，方便用户复制并填写密钥。
* 每个密钥的二进制 `CONFIGURED` / `NOT CONFIGURED` 徽章，以及可复制粘贴的环境变量行（例如 `OPENSKY_CLIENT_ID=YOUR_VALUE`），用户可以手动放入文件。

OpenSky API 凭据现在是一个**严重警告**的环境要求：启动环境检查会标记缺失的 OpenSky OAuth2 凭据并发出强烈警告，更新日志弹窗直接链接到免费注册页面。没有它们，航班图层将回退到仅 ADS-B 覆盖，在非洲、亚洲和拉丁美洲存在显著缺口。

---

## 🏗️ 架构

ShadowBroker v0.9.7 由三个垂直堆叠的层面组成——**操作员 UI**、**后端服务层**和**去中心化层（InfoNet）**——加上两个横向桥接组件（**Time Machine** 和**智能体 AI 通道**，即 OpenClaw 及任何其他兼容 Agent 所连接的协议）以及一个**隐私核心** Rust crate，它支撑着传统 Mesh 和未来的屏蔽币 / DEX 工作。

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                       OPERATOR UI  (Next.js + MapLibre)                     ║
║                                                                             ║
║  ┌────────────────┐  ┌──────────┐  ┌────────────────┐  ┌────────────────┐   ║
║  │ MapLibre GL    │  │ NewsFeed │  │ Sovereign Shell│  │   Mesh Chat    │   ║
║  │  WebGL render  │  │  SIGINT  │  │  Petitions /   │  │  + Mesh Term.  │   ║
║  │  + clusters    │  │  GDELT   │  │  Upgrades /    │  │  (Infonet /    │   ║
║  │                │  │  Threat  │  │  Disputes /    │  │   Mesh /       │   ║
║  │                │  │          │  │  Gates /       │  │   Dead Drop)   │   ║
║  │                │  │          │  │  Bootstrap /   │  │                │   ║
║  │                │  │          │  │  Function Keys │  │                │   ║
║  └──────┬─────────┘  └────┬─────┘  └────────┬───────┘  └────────┬───────┘   ║
║         │                 │                 │                   │           ║
║  ┌──────┴─────────────────┴─────────────────┴───────────────────┴───────┐   ║
║  │  Time Machine ◀── snapshot playback ── snapshotMode toggle ──▶ Live │   ║
║  │  hourly index │ frame interpolation │ profile-aware │ per-tier ETag  │   ║
║  └──────────────────────────────────┬───────────────────────────────────┘   ║
║                                     │ REST  +  /api/[...path] proxy         ║
╠═════════════════════════════════════╪═══════════════════════════════════════╣
║                       BACKEND SERVICE PLANE  (FastAPI)                      ║
║                                     │                                       ║
║  ┌──────────────────────────────────┴────────────────────────────────────┐  ║
║  │              Data Fetcher  (APScheduler — fast / slow tiers)          │  ║
║  │                                                                       │  ║
║  │  ┌───────────┬───────────┬───────────┬───────────┬───────────┐        │  ║
║  │  │  OpenSky* │ adsb.lol  │ CelesTrak │   USGS    │   AIS WS  │        │  ║
║  │  │  Flights  │ Military  │   Sats    │  Quakes   │   Ships   │        │  ║
║  │  ├───────────┼───────────┼───────────┼───────────┼───────────┤        │  ║
║  │  │  Carrier  │   GDELT   │ CCTV (12) │ DeepState │   NASA    │        │  ║
║  │  │  Tracker  │ Conflict  │  Cameras  │ Frontline │   FIRMS   │        │  ║
║  │  ├───────────┼───────────┼───────────┼───────────┼───────────┤        │  ║
║  │  │   GPS     │  KiwiSDR  │  Shodan   │  Amtrak   │  SatNOGS  │        │  ║
║  │  │  Jamming  │   Radios  │  Devices  │ DigiTraf  │  TinyGS   │        │  ║
║  │  ├───────────┼───────────┼───────────┼───────────┼───────────┤        │  ║
║  │  │ Volcanoes │  Weather  │  Fishing  │ Mil Bases │   IODA    │        │  ║
║  │  │  Air Qual │  Alerts   │  Activity │ PwrPlants │  Outages  │        │  ║
║  │  ├───────────┼───────────┼───────────┼───────────┼───────────┤        │  ║
║  │  │ Sentinel  │   MODIS   │   VIIRS   │   Data    │ Meshtastic│        │  ║
║  │  │  Hub/STAC │   Terra   │ Nightlts  │  Centers  │   APRS    │        │  ║
║  │  ├───────────┴───────────┴───────────┴───────────┴───────────┤        │  ║
║  │  │  SAR (NEW v0.9.7)                                         │        │  ║
║  │  │   Mode A: ASF Search catalog (free, no account)           │        │  ║
║  │  │   Mode B: NASA OPERA / Copernicus EGMS / GFM / EMS /      │        │  ║
║  │  │           UNOSAT  ground-change anomalies (opt-in)        │        │  ║
║  │  └───────────────────────────────────────────────────────────┘        │  ║
║  │   * OpenSky: REQUIRED for global flight coverage                      │  ║
║  └───────────────────────────────────────────────────────────────────────┘  ║
║                                     │                                       ║
║  ┌──────────────────────────────────┴────────────────────────────────────┐  ║
║  │                   Snapshot Store  (Time Machine source)               │  ║
║  │   Hourly index  │  per-snapshot layer manifest  │  profile metadata   │  ║
║  └───────────────────────────────────────────────────────────────────────┘  ║
║                                                                             ║
║  ┌───────────────────────────────────────────────────────────────────────┐  ║
║  │   Agentic AI Channel  (HMAC-SHA256, tier-gated  —  OpenClaw + others) │  ║
║  │                                                                       │  ║
║  │   POST /api/ai/channel/command   →  one tool call                     │  ║
║  │   POST /api/ai/channel/batch     →  up to 20 concurrent tool calls    │  ║
║  │                                                                       │  ║
║  │   Tier:   restricted (read-only)   │   full (read + write + inject)   │  ║
║  │   Auth:   X-SB-Timestamp + X-SB-Nonce + X-SB-Signature                │  ║
║  │   Sig  =  HMAC-SHA256(secret, METHOD|path|ts|nonce|sha256(body))      │  ║
║  └───────────────────────────────────────────────────────────────────────┘  ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                  DECENTRALIZED LAYER  (InfoNet Testnet — signed events)     ║
║                                                                             ║
║  ┌────────────────────────────┐    ┌──────────────────────────────────┐     ║
║  │    Mesh Hashchain          │    │   Sovereign Shell Governance     │     ║
║  │                            │    │                                  │     ║
║  │  Ed25519 signed events     │    │  Petitions  (DSL: UPDATE_PARAM,  │     ║
║  │  Public-key binding        │    │              ENABLE_FEATURE …)   │     ║
║  │  Replay / sequence guard   │    │  Upgrade-Hash voting (80% / 40%  │     ║
║  │  Two-tier finality         │    │             quorum / 67% Heavy)  │     ║
║  │   ├ Tier 1 (CRDT, fast)    │    │  Resolution & Dispute markets    │     ║
║  │   └ Tier 2 (epoch finality)│    │  Gate suspend / shutdown / appeal│     ║
║  │  Identity rotation         │    │  Bootstrap eligible-node-1-vote  │     ║
║  │  Constitutional invariants │    │   (Argon2id PoW, Heavy-Node only)│     ║
║  │  (MappingProxyType)        │    │  Function Keys (5 of 6 pieces)   │     ║
║  └─────────────┬──────────────┘    └─────────────┬────────────────────┘     ║
║                │                                 │                          ║
║                └──────────────┬──────────────────┘                          ║
║                               │                                             ║
║  ┌────────────────────────────┴──────────────────────────────────────┐      ║
║  │            Wormhole / InfoNet Relay  (transport layer)            │      ║
║  │   Gate personas │ canonical signing │ Dead Drop epoch mailboxes   │      ║
║  └───────────────────────────────────────────────────────────────────┘      ║
╠═════════════════════════════════════════════════════════════════════════════╣
║              PRIVACY CORE  (Rust crate — locked Protocol contracts)         ║
║                                                                             ║
║   privacy-core/  ─►  Argon2id │ Ed25519/X25519 │ AESGCM │ HKDF              ║
║                      Ring sigs* │ Stealth addrs* │ Pedersen* │ Bulletproofs*║
║                      Blind-sig issuance* (RSA / BBS+ / U-Prove / Idemix)    ║
║                                                                             ║
║   * = locked Protocol contract; cryptographic primitive lands Sprint 11+    ║
╚═════════════════════════════════════════════════════════════════════════════╝

   分发
   ────────────
     GitHub（主仓库）：  ghcr.io/bigbodycobain/shadowbroker-{backend,frontend}
     GitLab（镜像）：   registry.gitlab.com/bigbodycobain/shadowbroker/{backend,frontend}
     多架构：        linux/amd64  +  linux/arm64  （支持 Raspberry Pi 5）
     桌面端：           Tauri shell  →  打包的后端运行时  +  Next.js 前端
```

---

## 📊 数据源与 API

| 数据源 | 数据内容 | 更新频率 | 需要 API 密钥 |
|---|---|---|---|
| [OpenSky Network](https://opensky-network.org) | 商业与私人航班 | ~60秒 | **是** |
| [adsb.lol](https://adsb.lol) | 军用飞行器 | ~60秒 | 否 |
| [aisstream.io](https://aisstream.io) | AIS 船舶位置 | 实时 WebSocket | **是** |
| [CelesTrak](https://celestrak.org) | 卫星轨道位置（TLE + SGP4） | ~60秒 | 否 |
| [USGS Earthquake](https://earthquake.usgs.gov) | 全球地震事件 | ~60秒 | 否 |
| [GDELT Project](https://www.gdeltproject.org) | 全球冲突事件 | ~6小时 | 否 |
| [DeepState Map](https://deepstatemap.live) | 乌克兰前线 | ~30分钟 | 否 |
| [Shodan](https://www.shodan.io) | 联网设备搜索 | 按需 | **是** |
| [Amtrak](https://www.amtrak.com) | 美国列车位置 | ~60秒 | 否 |
| [DigiTraffic](https://www.digitraffic.fi) | 欧洲铁路位置 | ~60秒 | 否 |
| [Global Fishing Watch](https://globalfishingwatch.org) | 渔船活动事件 | ~10分钟 | 否 |
| Transport for London、NYC DOT、TxDOT | CCTV 摄像头（英国、美国） | ~10分钟 | 否 |
| Caltrans、WSDOT、GDOT、IDOT、MDOT | CCTV 摄像头（美国 5 个州） | ~10分钟 | 否 |
| Spain DGT、Madrid City | CCTV 摄像头（西班牙） | ~10分钟 | 否 |
| [Singapore LTA](https://datamall.lta.gov.sg) | 新加坡交通摄像头 | ~10分钟 | **是** |
| [Windy Webcams](https://www.windy.com) | 全球网络摄像头 | ~10分钟 | 否 |
| [SatNOGS](https://satnogs.org) | 业余卫星地面站 | ~30分钟 | 否 |
| [TinyGS](https://tinygs.com) | LoRa 卫星地面站 | ~30分钟 | 否 |
| [Meshtastic MQTT](https://meshtastic.org) | Mesh 无线电节点位置 | 实时 | 否 |
| [APRS-IS](https://www.aprs-is.net) | 业余无线电位置 | 实时 TCP | 否 |
| [KiwiSDR](https://kiwisdr.com) | 公共 SDR 接收器位置 | ~30分钟 | 否 |
| [OpenMHZ](https://openmhz.com) | 警用/消防扫描器数据源 | 实时 | 否 |
| [Smithsonian GVP](https://volcano.si.edu) | 全球全新世火山 | 静态（缓存） | 否 |
| [OpenAQ](https://openaq.org) | 空气质量 PM2.5 监测站 | ~120秒 | 否 |
| NOAA / NWS | 恶劣天气警报与多边形 | ~120秒 | 否 |
| [WRI Global Power Plant DB](https://datasets.wri.org) | 35,000+ 座发电厂 | 静态（缓存） | 否 |
| 军事基地数据集 | 全球军事设施 | 静态（缓存） | 否 |
| [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov) | NOAA-20 VIIRS 火灾/热异常 | ~120秒 | 否 |
| [NOAA SWPC](https://services.swpc.noaa.gov) | 太空天气 Kp 指数与太阳事件 | ~120秒 | 否 |
| [IODA（Georgia Tech）](https://ioda.inetintel.cc.gatech.edu) | 区域互联网中断警报 | ~120秒 | 否 |
| [DC Map（GitHub）](https://github.com/Ringmast4r/Data-Center-Map---Global) | 全球数据中心位置 | 静态（缓存 7 天） | 否 |
| [NASA GIBS](https://gibs.earthdata.nasa.gov) | MODIS Terra 每日卫星影像 | 每日（24-48h 延迟） | 否 |
| [Esri World Imagery](https://www.arcgis.com) | 高分辨率卫星底图 | 静态（定期更新） | 否 |
| [MS Planetary Computer](https://planetarycomputer.microsoft.com) | Sentinel-2 L2A 场景（右键点击） | 按需 | 否 |
| [Copernicus CDSE](https://dataspace.copernicus.eu) | Sentinel Hub 影像（Process API） | 按需 | **是**（免费） |
| [VIIRS Nightlights](https://eogdata.mines.edu) | 夜间灯光变化检测 | 静态 | 否 |
| [RestCountries](https://restcountries.com) | 国家概况数据 | 按需（缓存 24h） | 否 |
| [Wikidata SPARQL](https://query.wikidata.org) | 国家元首数据 | 按需（缓存 24h） | 否 |
| [Wikipedia API](https://en.wikipedia.org/api) | 位置摘要与飞机图片 | 按需（缓存） | 否 |
| [OSM Nominatim](https://nominatim.openstreetmap.org) | 地名地理编码（LOCATE 搜索栏） | 按需 | 否 |
| [CARTO Basemaps](https://carto.com) | 深色地图瓦片 | 持续 | 否 |

---

## 🚀 开始使用

### 🐳 Docker 设置（推荐自托管）

仓库包含一个 `docker-compose.yml`，可从 GitHub Container Registry 拉取预构建镜像。

```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
cd Shadowbroker
# 在仓库根目录的 .env 文件中添加您的 API 密钥（可选 — 见下方环境变量）
docker compose pull
docker compose up -d
```

打开 `http://localhost:3000` 查看仪表盘。

> **在公网或局域网部署？** 大多数场景无需配置。
> 前端通过 Next.js 服务器将所有 API 调用代理到 `BACKEND_URL`，
> 默认为 `http://backend:8000`（Docker 内部网络）。
> 主机端口 `8000` 仅用于本地 API/调试访问。如果与
> 其他服务冲突，请在 `.env` 中设置 `BACKEND_PORT=8001`；保持 `BACKEND_URL`
> 为 `http://backend:8000`，因为这是 Docker 内部端口。
> 后端内存上限由 `BACKEND_MEMORY_LIMIT` 控制，默认为
> `4G`。如果 Docker 报告 OOM 事件，后端将重启，慢速
> 图层在重新填充前可能显示为空。
>
> 如果后端运行在**不同的主机或端口**上，运行时设置 `BACKEND_URL` 即可——无需重新构建：
>
> ```bash
> # Linux / macOS
> BACKEND_URL=http://myserver.com:9096 docker compose up -d
>
> # Podman（通过 compose.sh 包装器）
> BACKEND_URL=http://192.168.1.50:9096 ./compose.sh up -d
>
> # Windows（PowerShell）
> $env:BACKEND_URL="http://myserver.com:9096"; docker compose up -d
>
> # 或者添加到 docker-compose.yml 旁边的 .env 文件中：
> # BACKEND_URL=http://myserver.com:9096
> ```

**Podman 用户：** 不要将 GitHub URL 直接传递给 `podman compose pull`；请先克隆仓库，`cd Shadowbroker`，然后从该文件夹运行 compose。`podman compose` 还需要一个 Compose 提供程序。如果 Podman 报告 `looking up compose provider failed`，请安装一个：

```bash
# Linux / macOS / WSL
python3 -m pip install --user podman-compose
podman-compose pull
podman-compose up -d
```

```powershell
# Windows PowerShell
py -m pip install --user podman-compose
podman-compose pull
podman-compose up -d
```

如果您在 bash 兼容的终端中，附带的包装器可以自动检测 Docker 或 Podman：

```bash
./compose.sh --engine podman pull
./compose.sh --engine podman up -d
```

---

### 🐋 独立部署（Portainer、Uncloud、NAS 等）

无需克隆仓库。使用 GitHub Container Registry 的预构建镜像。如果您将镜像发布到 GitLab 注册表，也可以作为镜像使用。

创建包含以下内容的 `docker-compose.yml` 并直接部署——粘贴到 Portainer 的堆栈编辑器、`uncloud deploy` 或任何 Docker 主机中：

```yaml
## 镜像注册表 — 每个服务取消注释一行：
##   GitHub（主仓库）：  ghcr.io/bigbodycobain/shadowbroker-backend:latest
##   GitLab（镜像）：  registry.gitlab.com/bigbodycobain/shadowbroker/backend:latest


services:
  backend:
    image: ghcr.io/bigbodycobain/shadowbroker-backend:latest
    # image: registry.gitlab.com/bigbodycobain/shadowbroker/backend:latest
    container_name: shadowbroker-backend
    ports:
      - "${BACKEND_PORT:-8000}:8000"
    environment:
      - AIS_API_KEY=your_aisstream_key          # 必填 — 在 aisstream.io 免费获取
      - OPENSKY_CLIENT_ID=                       # 可选 — 更高的航班数据速率限制
      - OPENSKY_CLIENT_SECRET=                   # 可选 — 与上面的 Client ID 配对
      - LTA_ACCOUNT_KEY=                         # 可选 — 新加坡 CCTV 摄像头
      - SHODAN_API_KEY=                          # 可选 — Shodan 设备搜索覆盖层
      - SH_CLIENT_ID=                            # 可选 — Sentinel Hub 卫星影像
      - SH_CLIENT_SECRET=                        # 可选 — 与 Sentinel Hub ID 配对
      - CORS_ORIGINS=                            # 可选 — 逗号分隔的允许来源
    volumes:
      - backend_data:/app/data
    restart: unless-stopped

  frontend:
    image: ghcr.io/bigbodycobain/shadowbroker-frontend:latest
    # image: registry.gitlab.com/bigbodycobain/shadowbroker/frontend:latest
    container_name: shadowbroker-frontend
    ports:
      - "3000:3000"
    environment:
      - BACKEND_URL=http://backend:8000   # Docker 内部网络 — 无需重新构建
    depends_on:
      - backend
    restart: unless-stopped

volumes:
  backend_data:
```

> **工作原理：** 前端容器将所有 `/api/*` 请求通过 Next.js 服务器代理到 `BACKEND_URL`，使用 Docker 的内部网络。浏览器只与端口 3000 通信。后端的主机端口用于本地 API/调试访问，可以通过 `BACKEND_PORT=8001` 更改，无需更改 `BACKEND_URL`。
>
> `BACKEND_URL` 是纯粹的运行时环境变量（不是构建时的 `NEXT_PUBLIC_*`），因此您可以在 Portainer、Uncloud 或任何 compose 编辑器中更改它，无需重新构建镜像。将其设置为后端在 Docker 网络内可达的地址（例如 `http://backend:8000`、`http://192.168.1.50:8000`）。

---

### 📦 快速开始（无需代码）

如果您只想运行仪表盘而不使用终端命令：

1. 转到此仓库页面右侧的 **[Releases](../../releases)** 标签。
2. 从发布版本中下载最新的 `.zip` 文件。
3. 将文件夹解压到您的电脑上。
4. **Windows：** 双击 `start.bat`。
   **Mac/Linux：** 打开终端，输入 `chmod +x start.sh`、`dos2unix start.sh`，然后运行 `./start.sh`。
5. 它将自动安装所有内容并启动仪表盘！

本地启动器说明：

- `start.bat` / `start.sh` 在无 Docker 的情况下运行应用——它们直接安装依赖并启动两个服务器。
- 如果升级后 Wormhole 身份或 DM 联系人端点失败，请查看 `docs/mesh/` 文件夹中的故障排除。
- 有关 DM 根见证、透明度和操作员监控部署，请从 `docs/mesh/wormhole-dm-root-operations-runbook.md` 开始。
- 有关示例 DM 根操作桥资产，另请参见 `scripts/mesh/poll-dm-root-health-alerts.mjs`、`scripts/mesh/export-dm-root-health-prometheus.mjs`、`scripts/mesh/publish-external-root-witness-package.mjs`、`scripts/mesh/smoke-external-root-witness-flow.mjs`、`scripts/mesh/smoke-root-transparency-publication-flow.mjs`、`scripts/mesh/smoke-dm-root-deployment-flow.mjs`、`scripts/mesh/sync-dm-root-external-assurance.mjs` 和 `docs/mesh/examples/`。

---

### 💻 开发者设置

如果您想修改代码或从源码运行：

#### 前置条件

* **Node.js** 18+ 和 **npm** — [nodejs.org](https://nodejs.org/)
* **Python** 3.10、3.11 或 3.12，带 `pip` — [python.org](https://www.python.org/downloads/)（安装时**勾选"Add to PATH"**）
  * ⚠️ Python 3.13+ 可能与某些依赖存在兼容性问题。**建议使用 3.11 或 3.12。**
* API 密钥：`aisstream.io`（必填），以及可选的 `opensky-network.org`（OAuth2）、`lta.gov.sg`

### 安装

```bash
# 克隆仓库
git clone https://github.com/BigBodyCobain/Shadowbroker.git
cd Shadowbroker

# 后端设置
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux
pip install .

# 可选的辅助脚本（创建虚拟环境 + 安装开发依赖）
# Windows PowerShell
# .\backend\scripts\setup-venv.ps1
# macOS/Linux
# ./backend/scripts/setup-venv.sh

# 可选的环境检查（打印缺少密钥的警告）
# Windows PowerShell
# .\backend\scripts\check-env.ps1
# macOS/Linux
# ./backend/scripts/check-env.sh

# 使用您的 API 密钥创建 .env 文件
echo "AIS_API_KEY=your_aisstream_key" >> .env
echo "OPENSKY_CLIENT_ID=your_opensky_client_id" >> .env
echo "OPENSKY_CLIENT_SECRET=your_opensky_secret" >> .env

# 前端设置
cd ../frontend
npm ci
```

### 运行

```bash
# 从前端目录 — 同时启动前端和后端
npm run dev
```

这将启动：

* **Next.js** 前端，地址为 `http://localhost:3000`
* **FastAPI** 后端，地址为 `http://localhost:8000`

### Pre-commit（可选）

如果您使用 pre-commit，从仓库根目录安装一次钩子：

```bash
pre-commit install
```

### 本地 AIS 接收器（可选）

您可以使用 RTL-SDR 加密狗和 [AIS-catcher](https://github.com/jvde-github/AIS-catcher)（一个开源 AIS 解码器）向 ShadowBroker 提供自己的 AIS 船舶数据。这为您提供所在地区船舶的实时覆盖——无需 API 密钥。

1. 插入 RTL-SDR 加密狗
2. 安装 AIS-catcher（[发布页面](https://github.com/jvde-github/AIS-catcher/releases)）或使用 Docker 镜像：
   ```bash
   docker run -d --device /dev/bus/usb \
     ghcr.io/jvde-github/ais-catcher -H http://host.docker.internal:4000/api/ais/feed interval 10
   ```
3. 或者本地运行：
   ```bash
   AIS-catcher -H http://localhost:4000/api/ais/feed interval 10
   ```

AIS-catcher 解码 161.975 MHz 和 162.025 MHz 上的 VHF 无线电信号，并每隔 10 秒将解码后的船舶数据 POST 到 ShadowBroker。由您的 SDR 天线检测到的船舶将与全球 AIS 数据流一起显示。

**Docker（ARM/Raspberry Pi）：** 请参见 [docker-shipfeeder](https://github.com/sdr-enthusiasts/docker-shipfeeder) 获取为 ARM 优化的生产就绪 Docker 镜像。

**注意：** AIS 范围取决于您的天线——基本设置通常为 20-40 海里，使用架高安装的船用 VHF 天线可达 60+ 海里。

---

## 🎛️ 数据图层

所有 37 个图层均可从左侧面板独立切换：

| 图层 | 默认状态 | 描述 |
|---|---|---|
| 商业航班 | ✅ 开启 | 航空公司、货运、通用航空飞机 |
| 私人航班 | ✅ 开启 | 非商业私人飞机 |
| 私人喷气机 | ✅ 开启 | 高价值商务喷气机，附带所有者数据 |
| 军用飞行器 | ✅ 开启 | 军用及政府飞机 |
| 追踪飞机 | ✅ 开启 | 特殊关注监控列表 |
| GPS 干扰 | ✅ 开启 | NAC-P 退化区域 |
| 航母/军船/货船 | ✅ 开启 | 海军航母、货船、油轮 |
| 民用船舶 | ✅ 开启 | 游艇、渔船、休闲船 |
| 邮轮/客船 | ✅ 开启 | 邮轮和渡轮 |
| 追踪游艇 | ✅ 开启 | 亿万富翁及寡头超级游艇 |
| 渔业活动 | ✅ 开启 | Global Fishing Watch 船舶事件 |
| 列车 | ✅ 开启 | Amtrak + 欧洲铁路位置 |
| 卫星 | ✅ 开启 | 按任务类型分类的轨道资产 |
| SatNOGS | ✅ 开启 | 业余卫星地面站 |
| TinyGS | ✅ 开启 | LoRa 卫星地面站 |
| 地震（24h） | ✅ 开启 | USGS 地震事件 |
| 火灾热点（24h） | ✅ 开启 | NASA FIRMS VIIRS 热异常 |
| 火山 | ✅ 开启 | Smithsonian 全新世火山 |
| 天气警报 | ✅ 开启 | 恶劣天气多边形 |
| 空气质量（PM2.5） | ✅ 开启 | 全球 OpenAQ 监测站 |
| 乌克兰前线 | ✅ 开启 | 实时战线位置 |
| 乌克兰空袭警报 | ✅ 开启 | 区域空袭警报 |
| 全球事件 | ✅ 开启 | GDELT 冲突事件 |
| CCTV Mesh 网络 | ✅ 开启 | 13 个数据源、6 个国家、11,000+ 个摄像头 |
| 互联网中断 | ✅ 开启 | IODA 区域连接警报 |
| 数据中心 | ✅ 开启 | 全球数据中心位置（2,000+） |
| 军事基地 | ✅ 开启 | 全球军事设施 |
| KiwiSDR 接收器 | ✅ 开启 | 公共 SDR 无线电接收器 |
| Meshtastic 节点 | ✅ 开启 | Mesh 无线电节点位置 |
| APRS | ✅ 开启 | 业余无线电定位 |
| 扫描器 | ✅ 开启 | 警用/消防扫描器数据源 |
| 昼夜循环 | ✅ 开启 | 太阳终止线覆盖层 |
| MODIS Terra（每日） | ❌ 关闭 | NASA GIBS 每日卫星影像 |
| 高分辨率卫星 | ❌ 关闭 | Esri 亚米级卫星影像 |
| Sentinel Hub | ❌ 关闭 | Copernicus CDSE Process API |
| VIIRS 夜光 | ❌ 关闭 | 夜间灯光变化检测 |
| 发电厂 | ❌ 关闭 | 35,000+ 座全球发电厂 |
| Shodan 覆盖层 | ❌ 关闭 | 互联网设备搜索结果 |

---

## 🔧 性能

该平台针对处理大规模实时数据集进行了优化：

* **Gzip 压缩** — API 负载压缩约 92%（11.6 MB → 915 KB）
* **ETag 缓存** — `304 Not Modified` 响应跳过冗余的 JSON 解析
* **视口裁剪** — 仅渲染可见地图边界内的要素（+20% 缓冲区）
* **命令式地图更新** — 高容量图层（航班、卫星、火灾）通过直接 `setData()` 调用绕过 React 协调过程
* **集群渲染** — 船舶、CCTV、地震和数据中心使用 MapLibre 聚类减少要素数量
* **防抖视口更新** — 300ms 防抖防止平移/缩放期间的 GeoJSON 重建抖动；密集图层（卫星、火灾）使用 2s 防抖
* **位置插值** — 数据刷新之间平滑的 10 秒刻度动画
* **React.memo** — 重型组件使用包装器防止不必要的重新渲染
* **坐标精度** — 经纬度四舍五入到 5 位小数（约 1m）以减少 JSON 大小

---

## 📁 项目结构

```
Shadowbroker/
├── backend/
│   ├── main.py                     # FastAPI 应用、中间件、API 路由（约 4,000 行）
│   ├── cctv.db                     # SQLite CCTV 摄像头数据库（自动生成）
│   ├── config/
│   │   └── news_feeds.json         # 用户可自定义的 RSS 订阅源列表
│   ├── services/
│   │   ├── data_fetcher.py         # 核心调度器 — 编排所有数据源
│   │   ├── ais_stream.py           # AIS WebSocket 客户端（25K+ 艘船舶）
│   │   ├── carrier_tracker.py      # OSINT 航母位置估算器（GDELT 新闻抓取）
│   │   ├── cctv_pipeline.py        # 13 源 CCTV 摄像头摄取管线
│   │   ├── geopolitics.py          # GDELT + 乌克兰前线 + 空袭警报
│   │   ├── region_dossier.py       # 右键点击国家/城市情报
│   │   ├── radio_intercept.py      # 警用扫描器数据源 + OpenMHZ
│   │   ├── kiwisdr_fetcher.py      # KiwiSDR 接收器抓取器
│   │   ├── sentinel_search.py      # Sentinel-2 STAC 影像搜索
│   │   ├── shodan_connector.py     # Shodan 设备搜索连接器
│   │   ├── sigint_bridge.py        # APRS-IS TCP 桥接
│   │   ├── network_utils.py        # 带 curl 回退的 HTTP 客户端
│   │   ├── api_settings.py         # API 密钥管理
│   │   ├── news_feed_config.py     # RSS 订阅源配置管理器
│   │   ├── fetchers/
│   │   │   ├── flights.py          # OpenSky、adsb.lol、GPS 干扰、盘旋模式
│   │   │   ├── geo.py              # AIS 船舶、航母、GDELT、渔业活动
│   │   │   ├── satellites.py       # CelesTrak TLE + SGP4 传播
│   │   │   ├── earth_observation.py # 地震、火灾、火山、空气质量、天气
│   │   │   ├── infrastructure.py   # 数据中心、发电厂、军事基地
│   │   │   ├── trains.py           # Amtrak + DigiTraffic 欧洲铁路
│   │   │   ├── sigint.py           # SatNOGS、TinyGS、APRS、Meshtastic
│   │   │   ├── meshtastic_map.py   # Meshtastic MQTT + 地图节点聚合
│   │   │   ├── military.py         # 军用飞行器分类
│   │   │   ├── news.py             # RSS 情报源聚合
│   │   │   ├── financial.py        # 全球市场数据
│   │   │   └── ukraine_alerts.py   # 乌克兰空袭警报
│   │   └── mesh/                   # InfoNet / Wormhole 协议栈
│   │       ├── mesh_protocol.py    # 核心 Mesh 协议 + 路由
│   │       ├── mesh_crypto.py      # Ed25519、X25519、AESGCM 原语
│   │       ├── mesh_hashchain.py   # 哈希链承诺系统（约 1,400 行）
│   │       ├── mesh_router.py      # 多传输路由器（APRS、Meshtastic、WS）
│   │       ├── mesh_wormhole_persona.py  # Gate 身份管理
│   │       ├── mesh_wormhole_dead_drop.py # Dead Drop 基于令牌的 DM 邮箱
│   │       ├── mesh_wormhole_ratchet.py   # 双棘轮 DM 框架
│   │       ├── mesh_wormhole_gate_keys.py # Gate 密钥管理 + 轮换
│   │       ├── mesh_wormhole_seal.py      # 消息密封 + 解封
│   │       ├── mesh_merkle.py      # 数据承诺的 Merkle 树证明
│   │       ├── mesh_reputation.py  # 节点信誉评分
│   │       ├── mesh_oracle.py      # Oracle 共识协议
│   │       └── mesh_secure_storage.py # 安全凭据存储
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx            # 主仪表盘 — 状态、轮询、布局
│   │   └── components/
│   │       ├── MaplibreViewer.tsx   # 核心地图 — 所有 GeoJSON 图层
│   │       ├── MeshChat.tsx        # InfoNet / Mesh / Dead Drop 聊天面板
│   │       ├── MeshTerminal.tsx    # 可拖拽 CLI 终端
│   │       ├── NewsFeed.tsx        # SIGINT 数据源 + 实体详情面板
│   │       ├── WorldviewLeftPanel.tsx   # 数据图层开关（35+ 个图层）
│   │       ├── WorldviewRightPanel.tsx  # 搜索 + 过滤侧边栏
│   │       ├── AdvancedFilterModal.tsx  # 机场/国家/所有者过滤
│   │       ├── MapLegend.tsx       # 动态图例，包含所有图标
│   │       ├── MarketsPanel.tsx    # 全球金融市场行情
│   │       ├── RadioInterceptPanel.tsx # 扫描器风格无线电面板
│   │       ├── FindLocateBar.tsx   # 搜索/定位栏
│   │       ├── ChangelogModal.tsx  # 版本更新日志弹窗（升级时自动显示）
│   │       ├── SettingsPanel.tsx   # API 密钥 + 新闻源 + Shodan 配置
│   │       ├── ScaleBar.tsx        # 地图比例尺指示器
│   │       └── ErrorBoundary.tsx   # 崩溃恢复包装器
│   └── package.json
```

---

## 🔑 环境变量

### 后端（`backend/.env`）

```env
# 飞机遥测必需（v0.9.7 新增 — 启动环境检查标记为严重）
# 免费注册：https://opensky-network.org/index.php?option=com_users&view=registration
OPENSKY_CLIENT_ID=your_opensky_client_id      # OAuth2 — 全球航班状态向量
OPENSKY_CLIENT_SECRET=your_opensky_secret     # OAuth2 — 与上面的 Client ID 配对

# 可选（增强数据质量）
AIS_API_KEY=your_aisstream_key                # 船舶追踪（aisstream.io）— 无此密钥则船舶图层为空
LTA_ACCOUNT_KEY=your_lta_key                  # 新加坡 CCTV 摄像头
SHODAN_API_KEY=your_shodan_key                # Shodan 设备搜索覆盖层
SH_CLIENT_ID=your_sentinel_hub_id             # Copernicus CDSE Sentinel Hub 影像
SH_CLIENT_SECRET=your_sentinel_hub_secret     # 与 Sentinel Hub Client ID 配对
MESH_SAR_EARTHDATA_USER=                      # NASA Earthdata 用户（SAR 模式 B — OPERA 产品）
MESH_SAR_EARTHDATA_TOKEN=                     # NASA Earthdata 令牌（与上面用户配对）
MESH_SAR_COPERNICUS_USER=                     # Copernicus Data Space 用户（SAR 模式 B — EGMS / EMS）
MESH_SAR_COPERNICUS_TOKEN=                    # Copernicus 令牌（与上面用户配对）
OPENCLAW_ACCESS_TIER=restricted               # OpenClaw Agent 层级："restricted"（只读）或 "full"

# 私有通道隐私核心固定（当启用 Arti 或 RNS 时需要）
PRIVACY_CORE_MIN_VERSION=0.1.0
PRIVACY_CORE_ALLOWED_SHA256=your_privacy_core_sha256
# 可选覆写，如果您加载非默认共享库路径
PRIVACY_CORE_LIB=
```

当 `MESH_ARTI_ENABLED=true` 或 `MESH_RNS_ENABLED=true` 时，后端启动现在会安全失败，除非加载的 `privacy-core` 产物报告的版本达到或超过 `PRIVACY_CORE_MIN_VERSION`，并且匹配 `PRIVACY_CORE_ALLOWED_SHA256` 中的哈希之一。

从您打算发布的产物生成哈希：

```powershell
Get-FileHash .\privacy-core\target\release\privacy_core.dll -Algorithm SHA256
```

```bash
sha256sum ./privacy-core/target/release/libprivacy_core.so
```

然后确认经过身份验证的 `GET /api/wormhole/status` 或 `GET /api/settings/wormhole-status` 显示相同的 `privacy_core.version`、`privacy_core.library_path` 和 `privacy_core.library_sha256`。

### 前端

| 变量 | 设置位置 | 用途 |
|---|---|---|
| `BACKEND_URL` | `docker-compose.yml` 中的 `environment`，或 shell 环境变量 | Next.js 服务器用于将 API 调用代理到后端的 URL。默认为 `http://backend:8000`。**运行时变量 — 无需重新构建。** |
| `BACKEND_PORT` | 仓库根目录 `.env` 或在 `docker compose up` 之前的 shell 环境变量 | 用于暴露后端 API 供本地诊断的主机端口。默认为 `8000`；如果端口 8000 已被占用，设置 `BACKEND_PORT=8001`。不会更改 Docker 内部的 `BACKEND_URL`。 |

**工作原理：** 前端将所有 `/api/*` 请求通过 Next.js 服务器代理到 `BACKEND_URL`，使用 Docker 的内部网络。浏览器只与端口 3000 通信；后端主机端口仅用于本地诊断。对于无 Docker 的本地开发，`BACKEND_URL` 默认为 `http://localhost:8000`。

---

## 🤝 贡献者

ShadowBroker 是开放构建的。以下人员贡献了实际代码：

| 谁 | 做了什么 | PR |
|---|---|---|
| [@Alienmajik](https://gitlab.com/Alienmajik) | Raspberry Pi 5 支持 — ARM64 打包、无头部署说明、Pi 级硬件运行时调优 | — |
| [@wa1id](https://github.com/wa1id) | CCTV 摄取修复 — 线程化 SQLite、持久化数据库、启动数据填充、集群可点击性 | #92 |
| [@AlborzNazari](https://github.com/AlborzNazari) | Spain DGT + Madrid CCTV 数据源、STIX 2.1 威胁情报导出 | #91 |
| [@adust09](https://github.com/adust09) | 发电厂图层、东亚情报覆盖（JSDF 基地、ICAO 增强、台湾新闻、军事分类） | #71、#72、#76、#77、#87 |
| [@Xpirix](https://github.com/Xpirix) | LocateBar 样式和交互改进 | #78 |
| [@imqdcr](https://github.com/imqdcr) | 船舶开关拆分（4 个类别）+ 稳定的 MMSI/呼号实体 ID | — |
| [@csysp](https://github.com/csysp) | 可关闭的威胁警报 + GDELT 和新闻的稳定实体 ID | #48、#63 |
| [@suranyami](https://github.com/suranyami) | 并行多架构 Docker 构建（11 分钟 → 3 分钟）+ 运行时 BACKEND_URL 修复 | #35、#44 |
| [@chr0n1x](https://github.com/chr0n1x) | 高可用性部署的 Kubernetes / Helm Chart 架构 | — |

---

## ⚠️ 免责声明

本工具完全基于公开可用的开源情报（OSINT）数据构建。不使用任何机密、受限或非公开的数据。航母位置基于公开报道的估算。军事主题的 UI 纯粹是美学设计。

---

## 📜 许可证

本项目仅供教育和个人研究目的使用。请参阅各 API 提供商的服务条款以了解数据使用限制。

---

<p align="center">
  <sub>用 ☕ 和太多的 API 调用构建</sub>
</p>

> **此中文版由社区贡献，与英文版可能存在差异。英文版为准。**
