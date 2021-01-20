import Head from 'next/head'
import { Layout } from '../components/Layout'
import episodes from '../data/podcasts.json'
import { AudioPlayer } from '../components/AudioPlayer'

const Episodes = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">About:</h1>
      <p className="text-gray-500 font-normal">
        In this podcast I discuss how startups are increasingly impacting the
        financial climate. I talk to a wide range of industry leaders, chatting
        about topic that range from new crypto soultions to discussions about
        why V.C. money is, or is not benificial for seed stage companies.
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">Episodes:</h1>
      {episodes.map((episode, i) => (
        <AudioPlayer key={i} index={i + 1} {...episode} />
      ))}
    </div>
  )
}

const Bibliography = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">
        Annotated Bibliography:
      </h1>
      <div className="mt-4">
        <h3 className="font-semibold">
          Graham, Paul. 2012. “How to get startup ideas.” Paul Graham.
        </h3>
        <a
          href="http://www.paulgraham.com/startupideas.html"
          className="text-indigo-500"
          target="_blank"
        >
          http://www.paulgraham.com/startupideas.html
        </a>
        <p>
          In this essay Graham talks about how to make a successful startup
          idea. The basic idea behind it is identifying a problem you face in
          your everyday life. Graham believes that the best startup ideas come
          from necessity; they are organic and come from a lack of solutions in
          the market. In the end, he gets to the root of how unglorious early
          startup life really is, mentioning long hours and strenuous
          situations.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Popper, Nathaniel. “JPMorgan Chase Moves to Be First Big U.S. Bank
          With Its Own Cryptocurrency.” New York Times.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.nytimes.com/2019/02/14/business/dealbook/jpmorgan-cryptocurrency-bitcoin.html"
        >
          https://www.nytimes.com/2019/02/14/business/dealbook/jpmorgan-cryptocurrency-bitcoin.htmlnpx
        </a>
        <p>
          The content of this new story is really important, and the sub-context
          is really interesting to look at. When we studied in class what
          creates a bubble, one of the reasons is a financial-technical
          innovation. What we see here from one of the oldest banks, J.P.
          Morgan, is the integration of their own "stablecoin". The coin will
          match the dollar and allow a new easy of access to transferring money.
          I do think, despite the upsides, this is a slippery slope. When a
          stablecoin is minted, is a dollar must always be held in a bank
          account, to give the coin value. If we see banks go out and start
          trading your money, it could leave stablecoin in a very dangerous
          spot. I also wonder how they will deal with the ledger, a{' '}
          <i>public</i> database of all transactions that happen, based on
          ethereum. This could clearly lead to some pretty serious privacy
          concerns that the author mentions.
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">
          Martell, Dan. “Why The Best Startups Are Created In An Economic
          Downturn.” Dan Martell.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.danmartell.com/why-the-best-startups-are-created-in-an-economic-downturn/"
        >
          https://www.danmartell.com/why-the-best-startups-are-created-in-an-economic-downturn/
        </a>
        <p>
          This piece by Dan Martell struck me how an economic downturn forces
          the talent pool to shrink, which then makes the employees better. He
          also claims a downturn forces people who are “true entrepreneurs” to
          show their true colors and create a high-quality startup, out of
          necessity and urgency. This idea is similar to that of Paul Graham, in
          that, the best businesses are created out of a real world problem.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Duhigg, Charles. “How Venture Capitalists Are Deforming Capitalism.”
          The New Yorker.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.newyorker.com/magazine/2020/11/30/how-venture-capitalists-are-deforming-capitalism"
        >
          https://www.newyorker.com/magazine/2020/11/30/how-venture-capitalists-are-deforming-capitalism
        </a>
        <p>
          Duhigg gives a great anecdote by mentioning WeWork, a company that
          originally looked promising to many investors, mainly Softbank.
          Softbank is infamous for outbidding competitors by a vast margin. This
          hikes up the evaluation, and disguises the underlying problems, which,
          in WeWork's cases, were quite significant.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Florida, Richard. “The Benefits of High-Tech Job Growth Don’t Trickle
          Down.” Bloomburg CityLab.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.bloomberg.com/news/articles/2019-08-08/low-wage-workers-lose-out-when-tech-jobs-gain"
        >
          https://www.bloomberg.com/news/articles/2019-08-08/low-wage-workers-lose-out-when-tech-jobs-gain
        </a>
        <p>
          A term you hear a lot nowadays, "trickle-down economics", may not work
          in tech, according to a new study. Mr. Florida dives into the study,
          stating that while teachers create a multiple of 2 low-pay jobs for
          every one teaching position, while those in tech only make 0.7. This
          makes sense, unlike more physical high-pay jobs (store managers,
          general managers) which can create smaller paying offshoots (janitors,
          cashiers). Tech is all done online, which means all the customer needs
          to interact with the business is a computer.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Castillo, Michael del. “Visa Partners With Ethereum Digital-Dollar
          Startup That Raised $271 Million.” Forbes.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.forbes.com/sites/michaeldelcastillo/2020/12/02/visa-partners-with-ethereum-digital-dollar-startup-that-raised-271-million/?sh=6ac7b4a14b1f"
        >
          https://www.forbes.com/sites/michaeldelcastillo/2020/12/02/visa-partners-with-ethereum-digital-dollar-startup-that-raised-271-million/?sh=6ac7b4a14b1f
        </a>
        <p>
          This news story reports on a recent partnership between one of the
          creators of USDC, a newly minted stablecoin, and Visa. What this means
          for customers of Visa is that they can begin to integrate USDC, which
          is based on ethereum, another form of bitcoin into their software.
          USDC is almost the opposite of bitcoin, it matches the US dollar
          exactly. The reason why this is very exciting is because that it is a
          crypto coin, it isn't subject to the same fees that would come with
          sending money in a more traditional way (eg. wire transfer).
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Ester, Peter. “Innovation and Startups in Silicon Valley: An Ecosystem
          Approach.” Accelerators in Silicon Valley, by Peter Ester, Amsterdam
          University Press, Amsterdam, 2017, pp. 37–62. JSTOR.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.jstor.org/stable/j.ctt1zrvhk7.7"
        >
          https://www.jstor.org/stable/j.ctt1zrvhk7.7
        </a>
        <p>
          I think Ester brings up a great point here. Society's growing reliance
          on the innovation spurred by silicon valley has created a dangerous
          precedent moving forward. He goes on to echo a lot of the points made
          by Paul Graham, restating that early startup life is often not all it
          is chalked up to be. He says the most efficient way to run a startup
          is just getting something out of the door, something I've heard often
          in my research.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Kirn, Walter. “The Cautionary Tale of Adam Neumann and WeWork.” New
          York Times.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.nytimes.com/2020/10/23/books/review/billion-dollar-loser-adam-neumann-wework-reeves-wiedeman.html"
        >
          https://www.nytimes.com/2020/10/23/books/review/billion-dollar-loser-adam-neumann-wework-reeves-wiedeman.html
        </a>
        <p>
          This piece is a must-read for anyone interested in startups, and how
          they fail. Similar to the unit "how markets fail", this piece by Kirn
          tells the "cautionary" tale of WeWork. A company plagued by
          overvaluation and under-deliverance. This created a large divide, and
          forced WeWork to be "the landlord and tenet". Their dramatic growth,
          with a less-than optimal business plan, all lead to the failure of
          WeWork.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Strebulaev, Ilya A., and Will Gornall. 2015. “How Much Does Venture
          Capital Drive the U.S. Economy?” Stanford Business.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://www.gsb.stanford.edu/insights/how-much-does-venture-capital-drive-us-economy"
        >
          https://www.gsb.stanford.edu/insights/how-much-does-venture-capital-drive-us-economy
        </a>
        <p>
          In this article the authors discuss the impact of VC money on the US
          economy. VC money has infiltrated all of our institutions, with the
          private equity sector being the most impacted. In fact, VC funds
          invest in a staggering 0.19% of all new US business.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">
          Kupor, Scott. 2016. “16 Definitions on the Economics of VC.”
          Andreessen Horowitz.
        </h3>
        <a
          className="text-indigo-400"
          target="_blank"
          href="https://a16z.com/2016/09/11/vc-economics/"
        >
          https://a16z.com/2016/09/11/vc-economics/
        </a>
        <p>
          This article dives more into how the money flows in and out of VC
          funds. The funds starting with LP’s (limited partners) which source
          money from various institutions. It also goes on to mention how
          important VC money is in funding fast-moving and revolutionary tech
          solutions.
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Stettner Econ Podcast</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Layout
        tabs={{
          Episodes,
          Bibliography,
        }}
      />
    </>
  )
}
